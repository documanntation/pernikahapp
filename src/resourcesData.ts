import { Resource, CategorySpec } from "./types";

export const CATEGORIES: CategorySpec[] = [
  // Phase 1
  {
    id: "taaruf",
    name: "Ta'aruf Syar'i",
    description:
      "Proses perkenalan suci sesuai syariat Islam demi meminimalisir maksiat sebelum ikatan halal.",
    iconName: "FileCheck",
    phaseId: "phase1",
  },
  {
    id: "choose-partner",
    name: "Choosing the Right Person",
    description:
      "Kriteria memilih jodoh ideal secara matang, menyelaraskan value kehidupan, dan menyikapi red-flags.",
    iconName: "UserCheck",
    phaseId: "phase1",
  },
  {
    id: "personality",
    name: "Personality Check",
    description:
      "Mengenali profil kepribadian diri dan calon pasangan (MBTI, DISC, Enneagram) guna mitigasi gesekan ego.",
    iconName: "Sliders",
    phaseId: "phase1",
  },
  // Phase 2
  {
    id: "fundamentals",
    name: "Marriage Fundamentals",
    description:
      "Pondasi esensial mencakup visi pernikahan, finansial rumah tangga, komunikasi pasutri, dan peran masing-masing.",
    iconName: "Shield",
    phaseId: "phase2",
  },
  {
    id: "fiqh",
    name: "Fiqh Pernikahan",
    description:
      "Kupas tuntas hukum fiqih seputar akad, mahar, hak-kewajiban suami-istri, hingga adab berhubungan menurut Islam.",
    iconName: "BookOpen",
    phaseId: "phase2",
  },
  {
    id: "kua",
    name: "KUA Preparation",
    description:
      "Alur administrasi KUA lengkap, pendaftaran online Simkah, bimbingan pra-nikah (Bimwin), serta syarat dokumen resmi.",
    iconName: "FileText",
    phaseId: "phase2",
  },
  {
    id: "financial-legal",
    name: "Financial & Legal",
    description:
      "Pemetaan harta bawaan, perjanjian pra-nikah (pre-nuptial), pengelolaan anggaran pasutri, serta regulasi hukum perkawinan.",
    iconName: "Scale",
    phaseId: "phase2",
  },
  // Phase 3
  {
    id: "wedding-prep",
    name: "Wedding Preparation",
    description:
      "Rekomendasi catering vendor, dekorasi venue romantis, jasa fotografi, hingga wedding organizer terbaik.",
    iconName: "Sparkles",
    phaseId: "phase3",
  },
  {
    id: "vendor-budget",
    name: "Vendor & Budget Guide",
    description:
      "Panduan simulasi menyusun anggaran pernikahan (budgeting), negosiasi paket vendor, serta tips efisiensi biaya pesta pernikahan.",
    iconName: "Wallet",
    phaseId: "phase3",
  },
  // Phase 4
  {
    id: "love-languages",
    name: "Love Languages",
    description:
      "Memahami 5 bahasa kasih utama: Word of Affirmation, Quality Time, Receiving Gifts, Acts of Service, dan Physical Touch.",
    iconName: "Heart",
    phaseId: "phase4",
  },
  {
    id: "psychology",
    name: "Wedding & Couple Psychology",
    description:
      "Studi emosi pasangan, resolusi konflik pra-nikah, mengatasi kecemasan komitmen (cold feet), dan kesehatan mental.",
    iconName: "Brain",
    phaseId: "phase4",
  },
  {
    id: "parenting",
    name: "Parenting & Childcare",
    description:
      "Kurikulum pengasuhan anak secara positif, psikologi anak, serta bekal menjadi ayah dan ibu yang teladan.",
    iconName: "Baby",
    phaseId: "phase4",
  },
  {
    id: "health-intimacy",
    name: "Health & Intimacy",
    description:
      "Edukasi kesehatan reproduksi, pemeriksaan medis pra-nikah (pre-marital checkup), serta bekal fiqih & sains keintiman halal.",
    iconName: "Activity",
    phaseId: "phase4",
  },
  {
    id: "rumah-tangga",
    name: "Rumah Tangga",
    description:
      "Seni mengelola kehidupan rumah tangga sehari-hari, pembagian kerja domestik, manajemen konflik mertua, dan kebahagiaan harian.",
    iconName: "Home",
    phaseId: "phase4",
  },
];

export const INITIAL_RESOURCES: Resource[] = [
  // ==========================================
  // PHASE 1: MENCARI & BERKENALAN
  // ==========================================

  // TA'ARUF SYAR'I
  {
    id: "taaruf-1",
    title: "Tata Cara Taaruf",
    description: "Bagaimana proses taaruf syar'i?",
    category: "taaruf",
    resourceType: "youtube",
    url: "https://www.youtube.com/watch?v=pYJPoBrlAA4&",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&auto=format&fit=crop&q=80",
    likes: 42,
    creator: "Mawaddah Indonesia",
    createdAt: "2026-01-15T08:00:00Z",
  },
  {
    id: "taaruf-2",
    title: "Biro Jodoh Rumaysho Official Instagram",
    description:
      "Akun edukasi pranikah berbasis syariat, adab-adab khitbah, serta kurasi ceramah fiqih seputar proses menjemput jodoh tanpa melanggar koridor agama.",
    category: "taaruf",
    resourceType: "instagram",
    url: "https://www.instagram.com/birojodohrumaysho",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80",
    likes: 945,
    creator: "@birojodohrumaysho",
    createdAt: "2026-07-09T08:00:00Z",
  },
  {
    id: "taaruf-3",
    title: "Fiqh Ketentuan Ta'aruf Syar'i",
    description: "Edukasi video membahas ta'aruf yang sesuai.",
    category: "taaruf",
    resourceType: "youtube",
    url: "https://www.youtube.com/watch?v=4qH8uNmuLqU",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
    likes: 310,
    creator: "Ustadz Ammi Nur Baits",
    createdAt: "2026-02-12T13:00:00Z",
  },
  {
    id: "taaruf-4",
    title: "Hira CHDR",
    description: "Edukasi kisah taaruf dan membangun pernikahan.",
    category: "taaruf",
    resourceType: "instagram",
    url: "https://www.instagram.com/hirachdr",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=600&auto=format&fit=crop&q=80",
    likes: 712,
    creator: "@hirachdr",
    createdAt: "2026-07-09T16:00:00Z",
  },

  // CHOOSING THE RIGHT PERSON
  {
    id: "choose-1",
    title: "Malu Bertanya Official - Edukasi Pranikah & Jodoh",
    description:
      "Platform microblogging yang membahas cara bertanya taktis ke calon pasangan seputar visi, finansial, dan cara mendeteksi tanda bahaya (red flags).",
    category: "choose-partner",
    resourceType: "instagram",
    url: "https://www.instagram.com/malubertanya.official/",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=600&auto=format&fit=crop&q=80",
    likes: 580,
    creator: "@malubertanya.official",
    createdAt: "2026-07-09T09:15:00Z",
  },
  {
    id: "choose-2",
    title: "Karena Menikah Tak Sebercanda Itu",
    description:
      "Buku karya Ustadz Amar Ar-Risalah yang mengupas realitas pranikah, mendewasakan cara berpikir, serta meluruskan niat agar tidak terjebak dalam romantisme semu sebelum akad.",
    category: "choose-partner",
    resourceType: "book",
    url: "https://www.goodreads.com/en/book/show/61462761-karena-menikah-tak-sebercanda-itu",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80",
    likes: 452,
    creator: "Amar Ar-Risalah",
    createdAt: "2026-07-09T10:00:00Z",
  },
  {
    id: "choose-3",
    title: "Yang Belum Kamu Pelajari tentang Menikah",
    description:
      "Buku panduan mendalam dari Ustadz Amar Ar-Risalah yang membahas kurikulum penting pranikah, seni menyelaraskan visi, dan ilmu-ilmu esensial yang sering luput dari perhatian calon pengantin.",
    category: "choose-partner",
    resourceType: "book",
    url: "https://www.goodreads.com/book/show/215046339-yang-belum-kamu-pelajari-tentang-menikah",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=80",
    likes: 389,
    creator: "Amar Ar-Risalah",
    createdAt: "2026-07-09T10:15:00Z",
  },
  {
    id: "choose-4",
    title: "Nikah Institute - Kriteria & Kesiapan Menuju Akad",
    description:
      "Akun edukasi seputar standarisasi memilih pendamping hidup, mengelola ekspektasi rasional, serta kesiapan mental melepas masa lajang.",
    category: "choose-partner",
    resourceType: "instagram",
    url: "https://www.instagram.com/nikahinstitute/",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80",
    likes: 611,
    creator: "@nikahinstitute",
    createdAt: "2026-07-09T11:20:00Z",
  },

  // PERSONALITY CHECK
  {
    id: "pers-1",
    title: "16Personalities Free Personality Test",
    description:
      "Tes kepribadian MBTI paling populer yang dapat membantu memahami karakter mendasar serta cara berkomunikasi.",
    category: "personality",
    resourceType: "website",
    url: "https://www.16personalities.com/free-personality-test",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=80",
    likes: 411,
    creator: "16Personalities",
    createdAt: "2025-11-20T16:00:00Z",
  },
  {
    id: "pers-2",
    title: "Screening Kesiapan Menikah",
    description: "Apakah Kamu Sudah Siap Menikah?",
    category: "personality",
    resourceType: "website",
    url: "https://form.qalboo.app/siapnikah",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=80",
    likes: 215,
    creator: "Qalboo",
    createdAt: "2026-01-10T11:00:00Z",
  },

  // ==========================================
  // PHASE 2: PEMANTAPAN ILMU
  // ==========================================

  // MARRIAGE FUNDAMENTALS
  {
    id: "fund-2",
    title: "Pre-Marriage Talk Official Instagram",
    description:
      "Ruang diskusi digital seputar pondasi esensial perkawinan: pemetaan finansial bersama, manajemen ekspektasi, dan seni berkomunikasi tanpa drama.",
    category: "fundamentals",
    resourceType: "instagram",
    url: "https://www.instagram.com/premarriagetalk/",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
    likes: 812,
    creator: "@premarriagetalk",
    createdAt: "2026-07-09T13:00:00Z",
  },
  {
    id: "fund-3",
    title: "Naseeha Project - Islamic Family Building",
    description:
      "Platform global/lokal edukatif yang fokus membangun kesadaran pemuda muslim akan hakikat tanggung jawab peran suami/istri secara syar'i.",
    category: "fundamentals",
    resourceType: "instagram",
    url: "https://www.instagram.com/naseehaproject",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    likes: 690,
    creator: "@naseehaproject",
    createdAt: "2026-07-09T14:15:00Z",
  },

  // FIQH PERNIKAHAN
  {
    id: "fiqh-1",
    title:
      "BUKU MAHKOTA PENGANTIN - BINGKISAN MEWAH UNTUK SUAMI ISTRI (PUSTAKA AT-TAZKIA)",
    description:
      "Membahas ilmu pernikahan secara komprehensif, dari memilih pasangan hingga adab berumah tangga.",
    category: "fiqh",
    resourceType: "book",
    url: "https://yufidstore.com/products/buku-mahkota-pengantin-cetakan-34-pustaka-at-tazkia?srsltid=AfmBOorROjlmPEHcMX4noIqlNze3F3TGaT3T1pLgREnGc83kULxOHful",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    likes: 320,
    creator: "Majdi bin Manshur bin Sayyid asy-Syuri",
    createdAt: "2026-01-05T04:20:00Z",
  },
  {
    id: "fiqh-2",
    title: "Sekolah Pranikah Nurul Ashri (SPN)",
    description:
      "Rutin menyelenggarakan kajian fikih nikah terstruktur, adab rumah tangga, dan pemantapan pranikah syar'i.",
    category: "fiqh",
    resourceType: "instagram",
    url: "https://www.instagram.com/spn.nurulashri/",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop&q=80",
    likes: 412,
    creator: "@spn.nurulashri",
    createdAt: "2026-07-09T15:30:00Z",
  },
  {
    id: "fiqh-3",
    title: "BUKU PANDUAN LENGKAP NIKAH DARI A SAMPAI Z (PUSTAKA IBNU KATSIR)",
    description:
      "Buku panduan membahas lengkap: memilih pasangan, khitbah, syarat nikah, walimah islami, hak dan kewajiban suami–istri, adab berumah tangga, hingga teladan orang-orang shalih.",
    category: "fiqh",
    resourceType: "book",
    url: "https://yufidstore.com/products/buku-panduan-lengkap-nikah-dari-a-sampai-z-ibnu-katsir?srsltid=AfmBOooPc3FIix69Etm_5_Td0mGrgXBUb5BDmTlEXy24VS1Vk0-tUKLi",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    likes: 245,
    creator: "Abu Hafsh Usamah bin Kamal bin Abdir Razzaq",
    createdAt: "2026-01-15T09:00:00Z",
  },

  // KUA PREPARATION
  {
    id: "kua-1",
    title: "Simkah Gen 4: Pendaftaran Nikah Online Resmi Kemenag",
    description:
      "Situs portal digital resmi Kementerian Agama RI untuk mendaftarkan jadwal akad, unggah berkas KTP/N1-N4, dan konfirmasi jadwal.",
    category: "kua",
    resourceType: "website",
    url: "https://simkah4.kemenag.go.id",
    thumbnailUrl: "",
    likes: 271,
    creator: "Kementerian Agama RI",
    createdAt: "2026-04-01T07:50:00Z",
  },

  // FINANCIAL & LEGAL
  {
    id: "financial-legal-1",
    title: "Manajemen Keuangan Rumah Tangga",
    description:
      "Pembahasan mengenai cara manajemen keuangan rumah tangga menurut Islam.",
    category: "financial-legal",
    resourceType: "youtube",
    url: "https://www.youtube.com/watch?v=k0JtHUnNvoM",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80",
    likes: 192,
    creator: "Ustadz Ammi Nur Baits",
    createdAt: "2026-05-10T09:15:00Z",
  },
  {
    id: "financial-legal-2",
    title: "Cara Mengatur Keuangan Keluarga Tanpa Drama",
    description:
      "Pembahasan mengenai cara mengatur keuangan dalam keluarga—dari pembagian peran suami-istri, tips budgeting, cara cerdas mengelola pengeluaran supaya tetap bisa nabung tanpa drama.",
    category: "financial-legal",
    resourceType: "youtube",
    url: "https://www.youtube.com/watch?v=hbYVtzt_uqo",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80",
    likes: 245,
    creator: "Boss Mama Society",
    createdAt: "2026-03-05T10:15:00Z",
  },

  // ==========================================
  // PHASE 3: PERSIAPAN WEDDING
  // ==========================================

  // WEDDING PREPARATION
  {
    id: "wedding-1",
    title: "Daftar Catering Pernikahan Legendaris & Kredibel",
    description: "Kompilasi opsi vendor catering.",
    category: "wedding-prep",
    resourceType: "website",
    url: "https://www.bridestory.com/id/all-countries/all-cities/catering",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&auto=format&fit=crop&q=80",
    likes: 154,
    creator: "Bridestory Blog",
    createdAt: "2026-05-01T11:20:00Z",
  },

  // VENDOR & BUDGET GUIDE
  {
    id: "vendor-budget-1",
    title: "Interactive Wedding Budgeting Sheet (Spreadsheet)",
    description:
      "Unduh file Google Sheets siap pakai untuk menghitung simulasi DP katering, booking gedung, cetak undangan, dan suvenir pernikahan agar terhindar dari tumpukan hutang.",
    category: "vendor-budget",
    resourceType: "website",
    url: "https://www.bridestory.com/blog/interactive-wedding-budgeting-sheet",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&auto=format&fit=crop&q=80",
    likes: 215,
    creator: "Bridestory Smart Planning",
    createdAt: "2026-05-20T08:00:00Z",
  },

  // ==========================================
  // PHASE 4: KEHIDUPAN SETELAH NIKAH
  // ==========================================

  // LOVE LANGUAGES
  {
    id: "love-1",
    title: "Official 5 Love Languages Quiz",
    description:
      "Situs web gratis resmi dari Gary Chapman untuk menguji dan mengetahui apa bahasa kasih utama Anda dan pasangan.",
    category: "love-languages",
    resourceType: "website",
    url: "https://5lovelanguages.com/quizzes/love-language",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80",
    likes: 560,
    creator: "Gary Chapman",
    createdAt: "2025-12-01T12:00:00Z",
  },

  // WEDDING & COUPLE PSYCHOLOGY
  {
    id: "psych-1",
    title: "Konseling Couple Pre-Marriage / Marriage",
    description:
      "Konseling dengan Psikolog yang dilakukan antara pasangan, baik yang sudah menikah maupun belum menikah secara tatap muka ataupun online dengan durasi 60 menit/sesi.",
    category: "psychology",
    resourceType: "course",
    url: "https://www.ibunda.id/konseling/couple",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1527137341206-1a2ab86131f9?w=600&auto=format&fit=crop&q=80",
    likes: 194,
    creator: "Ibunda.id",
    createdAt: "2026-03-24T08:12:00Z",
  },

  // PARENTING & CHILDCARE
  {
    id: "parenting-1",
    title: "Mendidik Anak Dalam Islam ft Karina Hakman",
    description:
      "Sudut pandang soal scientific parenting yang ternyata sangat selaras dengan prinsip-prinsip Islam.",
    category: "parenting",
    resourceType: "book",
    url: "www.youtube.com/watch?v=9W7Y1Mj8rFI",
    thumbnailUrl:
      "https://unsplash.com/photos/person-holding-blue-and-red-paper-TJxotQTUr8o?w=600&auto=format&fit=crop&q=80",
    likes: 95,
    creator: "Boss Mama Society",
    createdAt: "2026-04-12T05:00:00Z",
  },

  // HEALTH & INTIMACY
  {
    id: "health-intimacy-1",
    title: "Pre-marital Check Up Wajib Pengantin",
    description: "Pedoman persiapan pemeriksaan kesehatan calon pengantin.",
    category: "health-intimacy",
    resourceType: "website",
    url: "https://www.halodoc.com/kesehatan/cek-pra-nikah?srsltid=AfmBOopQuCrXOe2rCvmqwvnWk3sLFETmkApYK7vbUu0TgOlY_27FB-LB",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=80",
    likes: 184,
    creator: "Tim Halodoc Medis",
    createdAt: "2026-05-22T04:40:00Z",
  },
  {
    id: "health-intimacy-2",
    title: "Fiqih Kontemporer Hubungan Intim Suami Istri",
    description: "Prinsip-prinsip hubungan intim sesuai dengan ajaran Islam.",
    category: "health-intimacy",
    resourceType: "book",
    url: "https://www.muslimafiyahpublishing.com/produk-detail/24",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=80",
    likes: 184,
    creator: "dr. Raehanul Bahraen, M.Sc.,Sp.PK",
    createdAt: "2026-05-22T04:40:00Z",
  },
  {
    id: "health-intimacy-3",
    title: "Buku Saku Fiqih Hubungan Intim (Pustaka Ibnu Umar)",
    description:
      "Buku yang wajib dibaca oleh suami-istri untuk melanggengkan hubungan ikatan pernikahan.",
    category: "health-intimacy",
    resourceType: "book",
    url: "https://yufidstore.com/products/buku-saku-fiqih-hubungan-intim-pustaka-ibnu-umar?srsltid=AfmBOooXxHm6-1BtjTxEFRlOV--UHL1vfQxkRuiHKOvzKm1JuYyE6q7P",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=80",
    likes: 184,
    creator: "Syaikh Abu Malik Kamal bin as-Sayyid Salim",
    createdAt: "2026-05-22T04:40:00Z",
  },

  // RUMAH TANGGA
  {
    id: "rumah-tangga-1",
    title: "Manajemen Konflik dalam Rumah Tangga",
    description:
      "Video pembahasan tentang manajemen konflik dalam rumah tangga.",
    category: "rumah-tangga",
    resourceType: "youtube",
    url: "https://www.youtube.com/watch?v=EuTAr1TE040",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80",
    likes: 228,
    creator: "Kajian Ustadz Salim A. Fillah",
    createdAt: "2026-05-25T14:10:00Z",
  },
];
