import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocFromServer,
  query,
  orderBy,
  limit,
  increment,
  setDoc,
} from "firebase/firestore";
import { Resource, UserSubmission } from "./types";
import { INITIAL_RESOURCES } from "./resourcesData";

// Safe Import of Config
import firebaseConfig from "./firebase-applet-config.json";

export enum OperationType {
  CREATE = "create",
  UPDATE = "update",
  DELETE = "delete",
  LIST = "list",
  GET = "get",
  WRITE = "write",
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  };
}

// Check if config is a valid firebase configuration containing an apiKey
const hasValidConfig =
  firebaseConfig &&
  typeof firebaseConfig === "object" &&
  "apiKey" in firebaseConfig &&
  !!(firebaseConfig as any).apiKey;

let db: any = null;
let auth: any = null;
let isFirebaseReady = false;

if (hasValidConfig) {
  try {
    const app =
      getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app, (firebaseConfig as any).firestoreDatabaseId);
    auth = getAuth(app);
    isFirebaseReady = true;

    // Validate connection online as required by Firebase skill
    const testConnection = async () => {
      try {
        await getDocFromServer(doc(db, "test", "connection"));
      } catch (error) {
        if (
          error instanceof Error &&
          error.message.includes("the client is offline")
        ) {
          console.error(
            "Please check your Firebase configuration: Client is offline.",
          );
        }
      }
    };
    testConnection();
  } catch (err) {
    console.error("Error initializing Firebase:", err);
    isFirebaseReady = false;
  }
}

export { db, auth, isFirebaseReady };

// Hardened error handler compliance
function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null,
) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth?.currentUser?.uid || null,
      email: auth?.currentUser?.email || null,
      emailVerified: auth?.currentUser?.emailVerified || null,
      isAnonymous: auth?.currentUser?.isAnonymous || null,
    },
    operationType,
    path,
  };
  console.error("Firestore Error: ", JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Auth Login Helper
export async function loginWithGoogle(): Promise<User | null> {
  if (!isFirebaseReady || !auth) {
    console.warn("Firebase not configured. Operating in guest simulator mode.");
    return null;
  }
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
}

// Auth Logout Helper
export async function logoutUser(): Promise<void> {
  if (isFirebaseReady && auth) {
    await signOut(auth);
  }
}

// ==========================================
// DB OPERATIONS WITH SECURE LOCAL FALLBACK
// ==========================================

// KEY FOR LOCALSTORAGE
const STORAGE_RESOURCES_KEY = "pernikah_resources_local";
const STORAGE_SUBMISSIONS_KEY = "pernikah_submissions_local";

// Initialize local storage seeds if empty
if (!localStorage.getItem(STORAGE_RESOURCES_KEY)) {
  localStorage.setItem(
    STORAGE_RESOURCES_KEY,
    JSON.stringify(INITIAL_RESOURCES),
  );
}
if (!localStorage.getItem(STORAGE_SUBMISSIONS_KEY)) {
  localStorage.setItem(STORAGE_SUBMISSIONS_KEY, JSON.stringify([]));
}

// 1. GET ALL CURATED RESOURCES (Firestore or fallback to LocallStorage)
export async function fetchResources(): Promise<Resource[]> {
  const path = "resources";
  if (isFirebaseReady && db) {
    try {
      const q = query(collection(db, path), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const existingItemsMap = new Map<string, Resource>();
      snapshot.forEach((docSnap) => {
        const item = { id: docSnap.id, ...docSnap.data() } as Resource;
        existingItemsMap.set(item.id, item);
      });

      let seededAny = false;
      const finalItemsMap = new Map<string, Resource>();

      for (const res of INITIAL_RESOURCES) {
        const existing = existingItemsMap.get(res.id);

        if (!existing) {
          console.log(`Seeding missing resource ${res.id} to Cloud DB...`);
          const docId = res.id;
          const newDoc = {
            title: res.title,
            description: res.description,
            category: res.category,
            resourceType: res.resourceType,
            url: res.url,
            thumbnailUrl: res.thumbnailUrl || "",
            likes: res.likes || 0,
            creator: res.creator || "",
            createdAt: res.createdAt,
          };
          await setDoc(doc(db, path, docId), newDoc);
          finalItemsMap.set(res.id, { id: res.id, ...newDoc });
          seededAny = true;
        } else {
          // Check if any curation fields were modified in resourcesData.ts
          const needsUpdate =
            existing.title !== res.title ||
            existing.description !== res.description ||
            existing.url !== res.url ||
            existing.category !== res.category ||
            existing.resourceType !== res.resourceType ||
            existing.creator !== res.creator ||
            existing.thumbnailUrl !== res.thumbnailUrl;

          if (needsUpdate) {
            console.log(`Updating modified resource ${res.id} in Cloud DB...`);
            const docId = res.id;
            const updatedFields = {
              title: res.title,
              description: res.description,
              category: res.category,
              resourceType: res.resourceType,
              url: res.url,
              thumbnailUrl: res.thumbnailUrl || "",
              creator: res.creator || "",
              createdAt: res.createdAt,
            };
            await updateDoc(doc(db, path, docId), updatedFields);
            finalItemsMap.set(res.id, {
              ...existing,
              ...updatedFields,
            });
            seededAny = true;
          } else {
            finalItemsMap.set(res.id, existing);
          }
        }
      }

      // Add any custom/user-contributed resources that exist in Firestore but not in INITIAL_RESOURCES
      existingItemsMap.forEach((item, id) => {
        if (!finalItemsMap.has(id)) {
          finalItemsMap.set(id, item);
        }
      });

      const finalItems = Array.from(finalItemsMap.values());
      finalItems.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      return finalItems;
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, path);
      return INITIAL_RESOURCES; // Safe UI fallback
    }
  } else {
    // Local fallback with complete synchronization support
    const raw = localStorage.getItem(STORAGE_RESOURCES_KEY);
    const localList: Resource[] = raw ? JSON.parse(raw) : [];
    const localMap = new Map<string, Resource>();
    localList.forEach((item) => localMap.set(item.id, item));

    const updatedList: Resource[] = [];
    const processedIds = new Set<string>();

    for (const res of INITIAL_RESOURCES) {
      const existing = localMap.get(res.id);
      if (existing) {
        updatedList.push({
          ...res,
          likes: existing.likes, // Keep accumulated votes/likes
        });
      } else {
        updatedList.push(res);
      }
      processedIds.add(res.id);
    }

    // Retain any offline/custom local resources not present in INITIAL_RESOURCES
    for (const item of localList) {
      if (!processedIds.has(item.id)) {
        updatedList.push(item);
      }
    }

    localStorage.setItem(STORAGE_RESOURCES_KEY, JSON.stringify(updatedList));
    updatedList.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
    return updatedList;
  }
}

// 2. CREATE A RECPMMENDATION RESOURCE (CRU - Create)
export async function addResource(
  resData: Omit<Resource, "id" | "likes" | "createdAt">,
): Promise<Resource> {
  const path = "resources";
  const newResource: Omit<Resource, "id"> = {
    ...resData,
    likes: 0,
    createdAt: new Date().toISOString(),
  };

  if (isFirebaseReady && db) {
    try {
      const docRef = await addDoc(collection(db, path), newResource);
      return { id: docRef.id, ...newResource } as Resource;
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
    }
  }

  // Backup Local Storage execution
  const raw = localStorage.getItem(STORAGE_RESOURCES_KEY) || "[]";
  const localList: Resource[] = JSON.parse(raw);
  const created: Resource = {
    id: "res-" + Math.random().toString(36).substr(2, 9),
    ...newResource,
  };
  localList.unshift(created);
  localStorage.setItem(STORAGE_RESOURCES_KEY, JSON.stringify(localList));
  return created;
}

// 3. INCREMENT LIKES FOR CURATED RESOURCE (CRU - Update)
export async function likeResource(id: string): Promise<void> {
  const path = `resources/${id}`;
  if (isFirebaseReady && db) {
    try {
      const docRef = doc(db, "resources", id);
      await updateDoc(docRef, {
        likes: increment(1),
      });
      return;
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  }

  // Local Storage update
  const raw = localStorage.getItem(STORAGE_RESOURCES_KEY) || "[]";
  const localList: Resource[] = JSON.parse(raw);
  const index = localList.findIndex((item) => item.id === id);
  if (index !== -1) {
    localList[index].likes += 1;
    localStorage.setItem(STORAGE_RESOURCES_KEY, JSON.stringify(localList));
  }
}

// 4. FETCH ALL USER SUBMISSIONS (Topic Requests / Recommendations)
export async function fetchUserSubmissions(): Promise<UserSubmission[]> {
  const path = "user_submissions";
  if (isFirebaseReady && db) {
    try {
      const q = query(collection(db, path), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const items: UserSubmission[] = [];
      snapshot.forEach((docSnap) => {
        items.push({ id: docSnap.id, ...docSnap.data() } as UserSubmission);
      });
      return items;
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, path);
      return [];
    }
  } else {
    const raw = localStorage.getItem(STORAGE_SUBMISSIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  }
}

// 5. SUBMIT TOPIC REQUEST OR RECOMMENDATION (CRU - Create)
export async function addUserSubmission(
  sub: Omit<UserSubmission, "id" | "likes" | "createdAt">,
): Promise<UserSubmission> {
  const path = "user_submissions";
  const itemData: Omit<UserSubmission, "id"> = {
    ...sub,
    likes: 0,
    createdAt: new Date().toISOString(),
    status: "pending",
  };

  if (isFirebaseReady && db) {
    try {
      // Add record to Firestore
      const docRef = await addDoc(collection(db, path), itemData);
      return { id: docRef.id, ...itemData } as UserSubmission;
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
    }
  }

  // Local Storage Fallback
  const raw = localStorage.getItem(STORAGE_SUBMISSIONS_KEY) || "[]";
  const localList: UserSubmission[] = JSON.parse(raw);
  const created: UserSubmission = {
    id: "sub-" + Math.random().toString(36).substr(2, 9),
    ...itemData,
  };
  localList.unshift(created);
  localStorage.setItem(STORAGE_SUBMISSIONS_KEY, JSON.stringify(localList));
  return created;
}

// 6. EDIT/UPDATE OWN SUBMISSION (CRU - Update)
export async function updateUserSubmission(
  id: string,
  updatedFields: Partial<Omit<UserSubmission, "id" | "createdAt" | "likes">>,
): Promise<void> {
  const path = `user_submissions/${id}`;
  const now = new Date().toISOString();

  if (isFirebaseReady && db) {
    try {
      const docRef = doc(db, "user_submissions", id);
      await updateDoc(docRef, {
        ...updatedFields,
        updatedAt: now,
      });
      return;
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  }

  // Local Update fallback
  const raw = localStorage.getItem(STORAGE_SUBMISSIONS_KEY) || "[]";
  const localList: UserSubmission[] = JSON.parse(raw);
  const index = localList.findIndex((item) => item.id === id);
  if (index !== -1) {
    localList[index] = {
      ...localList[index],
      ...updatedFields,
      updatedAt: now,
    };
    localStorage.setItem(STORAGE_SUBMISSIONS_KEY, JSON.stringify(localList));
  }
}

// 7. INCREMENT SUBMISSION LIKES (VOTE UP)
export async function likeUserSubmission(id: string): Promise<void> {
  const path = `user_submissions/${id}`;
  if (isFirebaseReady && db) {
    try {
      const docRef = doc(db, "user_submissions", id);
      await updateDoc(docRef, {
        likes: increment(1),
        updatedAt: new Date().toISOString(),
      });
      return;
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  }

  // Local storage vote fallback
  const raw = localStorage.getItem(STORAGE_SUBMISSIONS_KEY) || "[]";
  const localList: UserSubmission[] = JSON.parse(raw);
  const index = localList.findIndex((item) => item.id === id);
  if (index !== -1) {
    localList[index].likes += 1;
    localList[index].updatedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_SUBMISSIONS_KEY, JSON.stringify(localList));
  }
}

// 8. DELETE RESOURCE (Admin only)
export async function deleteResource(id: string): Promise<void> {
  const path = `resources/${id}`;
  if (isFirebaseReady && db) {
    try {
      const docRef = doc(db, "resources", id);
      await deleteDoc(docRef);
      return;
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  }

  // Local Storage fallback
  const raw = localStorage.getItem(STORAGE_RESOURCES_KEY) || "[]";
  const localList: Resource[] = JSON.parse(raw);
  const updatedList = localList.filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_RESOURCES_KEY, JSON.stringify(updatedList));
}

// 9. DELETE USER SUBMISSION (Admin only)
export async function deleteUserSubmission(id: string): Promise<void> {
  const path = `user_submissions/${id}`;
  if (isFirebaseReady && db) {
    try {
      const docRef = doc(db, "user_submissions", id);
      await deleteDoc(docRef);
      return;
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  }

  // Local Storage fallback
  const raw = localStorage.getItem(STORAGE_SUBMISSIONS_KEY) || "[]";
  const localList: UserSubmission[] = JSON.parse(raw);
  const updatedList = localList.filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_SUBMISSIONS_KEY, JSON.stringify(updatedList));
}

// 10. APPROVE USER SUBMISSION (Admin ACC)
export async function approveUserSubmission(id: string): Promise<void> {
  const path = `user_submissions/${id}`;
  if (isFirebaseReady && db) {
    try {
      const subRef = doc(db, "user_submissions", id);
      const subSnap = await getDoc(subRef);
      if (subSnap.exists()) {
        const subData = subSnap.data() as UserSubmission;

        // 1. Update status to 'approved'
        await updateDoc(subRef, { status: "approved" });

        // 2. Add as main curated resource
        await addResource({
          title: subData.title,
          description: subData.description,
          category: subData.category,
          resourceType: subData.resourceType || "other",
          url: subData.url || "",
          creator: subData.submittedBy || "Kontributor PernikahApp",
          thumbnailUrl: "",
        });
      }
      return;
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  }

  // Local Fallback
  const rawSubs = localStorage.getItem(STORAGE_SUBMISSIONS_KEY) || "[]";
  const subList: UserSubmission[] = JSON.parse(rawSubs);
  const index = subList.findIndex((item) => item.id === id);
  if (index !== -1) {
    // 1. Update status to 'approved'
    subList[index].status = "approved";
    localStorage.setItem(STORAGE_SUBMISSIONS_KEY, JSON.stringify(subList));

    // 2. Add as main curated resource
    const subData = subList[index];
    await addResource({
      title: subData.title,
      description: subData.description,
      category: subData.category,
      resourceType: subData.resourceType || "other",
      url: subData.url || "",
      creator: subData.submittedBy || "Kontributor PernikahApp",
      thumbnailUrl: "",
    });
  }
}
