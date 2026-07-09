export type ResourceType = 'youtube' | 'instagram' | 'book' | 'course' | 'website' | 'other';

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  resourceType: ResourceType;
  url: string;
  thumbnailUrl?: string;
  likes: number;
  creator?: string;
  createdAt: string;
}

export interface UserSubmission {
  id: string;
  title: string;
  description: string;
  category: string;
  resourceType?: ResourceType;
  url?: string;
  isRequest: boolean; // true: topic request, false: resource recommendation
  submittedBy: string;
  likes: number;
  createdAt: string;
  updatedAt?: string;
  status?: 'pending' | 'approved';
}

export interface CategorySpec {
  id: string;
  name: string;
  description: string;
  iconName: string; // Dynamic icon from lucide-react
  phaseId?: string;
}
