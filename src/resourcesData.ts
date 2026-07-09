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
    title: "Panduan Praktis Ta'aruf Syar'i Tanpa Pacaran",
    description:
      "E-book langkah demi langkah menyusun CV ta'aruf, mengajukan proposal, pendampingan atau mediator hukum, hingga nadhor.",
    category: "taaruf",
    resourceType: "website",
    url: "https://taarufindonesia.com/panduan-taaruf",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&auto=format&fit=crop&q=80",
    likes: 42,
    creator: "Rumah Ta'aruf Indonesia",
    createdAt: "2026-01-15T08:00:00Z",
  },
  {
    id: "taaruf-2",
    title: "Kupas Tuntas Alur Ta'aruf & Khitbah Yang Benar",
    description:
      "Kajian video esensial menjelaskan perbedaan ta'aruf, pacaran, dan khitbah (lamaran) serta bagaimana adab berkunjung ke rumah calon.",
    category: "taaruf",
    resourceType: "youtube",
    url: "https://www.youtube.com/watch?v=q6Ew58K-6bA",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
    likes: 128,
    creator: "Ustadz Adi Hidayat Official",
    createdAt: "2026-02-10T14:30:00Z",
  },
  {
    id: "taaruf-3",
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
    id: "taaruf-4",
    title: "Fiqih Khitbah & Nadhor: Adab Meminang Sesuai Sunnah",
    description:
      "Buku rujukan utama membedah batasan interaksi, apa saja yang boleh dilihat saat nadhor, serta batasan hukum khitbah.",
    category: "taaruf",
    resourceType: "book",
    url: "https://www.gramedia.com/products/fiqih-khitbah-nadhor",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    likes: 198,
    creator: "Syaikh Musthafa Al-Adawi",
    createdAt: "2026-01-20T09:00:00Z",
  },
  {
    id: "taaruf-5",
    title: "Kajian Lengkap Syarat & Ketentuan Ta'aruf Syar'i",
    description:
      "Seri edukasi video interaktif membahas peran penting perantara (mediator) dan cara menghindari jebakan pacaran terselubung.",
    category: "taaruf",
    resourceType: "youtube",
    url: "https://www.youtube.com/watch?v=KajianTaarufYufid",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
    likes: 310,
    creator: "Yufid.TV - Pengajian Ceramah Islam",
    createdAt: "2026-02-12T13:00:00Z",
  },
  {
    id: "taaruf-6",
    title: "Hira CHDR - Mindset & Trauma Relationship",
    description:
      "Edukasi mendalam seputar regulasi emosi pasutri, mengenali attachment style, menyembuhkan luka masa lalu (inner child), dan menjaga kesehatan mental hubungan.",
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
    title: "Sebelum Memutuskan Menikah: 10 Pertanyaan Krusial Calon Pasangan",
    description:
      "Pertanyaan wajib seputar ekspektasi karier, tempat tinggal setelah menikah, pembagian peran domestik, hingga hubungan dengan mertua.",
    category: "choose-partner",
    resourceType: "instagram",
    url: "https://www.instagram.com/p/Co9_weddingrules",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80",
    likes: 312,
    creator: "@analisawidyaningrum",
    createdAt: "2026-02-28T09:00:00Z",
  },
  {
    id: "choose-2",
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
    id: "choose-3",
    title: "Karena Menikah Tak Sebercanda Itu",
    description:
      "Buku karya Ustadz Amar Ar-Risalah yang mengupas realitas pranikah, mendewasakan cara berpikir, serta meluruskan niat agar tidak terjebak dalam romantisme semu sebelum akad.",
    category: "choose-partner",
    resourceType: "book",
    url: "https://www.gramedia.com/products/karena-menikah-tak-sebercanda-itu",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80",
    likes: 452,
    creator: "Amar Ar-Risalah",
    createdAt: "2026-07-09T10:00:00Z",
  },
  {
    id: "choose-4",
    title: "Yang Belum Kamu Pelajari tentang Menikah",
    description:
      "Buku panduan mendalam dari Ustadz Amar Ar-Risalah yang membahas kurikulum penting pranikah, seni menyelaraskan visi, dan ilmu-ilmu esensial yang sering luput dari perhatian calon pengantin.",
    category: "choose-partner",
    resourceType: "book",
    url: "https://www.gramedia.com/products/yang-belum-kamu-pelajari-tentang-menikah",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=80",
    likes: 389,
    creator: "Amar Ar-Risalah",
    createdAt: "2026-07-09T10:15:00Z",
  },
  {
    id: "choose-5",
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
  {
    id: "choose-6",
    title: "Mencari Belahan Jiwa: Seni Memilih Pasangan Hidup",
    description:
      "Buku best seller yang menyeimbangkan antara idealisme syariat dengan realitas psikologi sosial dalam memilih pasangan.",
    category: "choose-partner",
    resourceType: "book",
    url: "https://www.gramedia.com/products/mencari-belahan-jiwa-salim",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=80",
    likes: 412,
    creator: "Salim A. Fillah",
    createdAt: "2026-01-18T10:00:00Z",
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
    title: "The Enneagram in Love and Work",
    description:
      "Buku legendaris mengupas bagaimana 9 tipe kepribadian Enneagram berinteraksi, berkonflik, dan saling melengkapi dalam hubungan pernikahan.",
    category: "personality",
    resourceType: "book",
    url: "https://www.amazon.com/Enneagram-Love-Work-Relationships-Intimate/dp/0062507214",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=80",
    likes: 215,
    creator: "Helen Palmer",
    createdAt: "2026-01-10T11:00:00Z",
  },

  // ==========================================
  // PHASE 2: PEMANTAPAN ILMU
  // ==========================================

  // MARRIAGE FUNDAMENTALS
  {
    id: "fund-1",
    title: "Satu Persen: Kesiapan Finansial Pernikahan",
    description:
      "Video interaktif membahas pentingnya pembagian pos keuangan, dana darurat rumah tangga, serta asuransi keluarga muda.",
    category: "fundamentals",
    resourceType: "youtube",
    url: "https://www.youtube.com/watch?v=F0vD60kId88",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80",
    likes: 245,
    creator: "Satu Persen - Indonesian Life School",
    createdAt: "2026-03-05T10:15:00Z",
  },
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
  {
    id: "fund-4",
    title: "The 7 Principles for Making Marriage Work",
    description:
      "Rekomendasi buku legendaris karya Dr. John Gottman yang wajib dibaca calon pengantin mengenai relasi emosi jangka panjang.",
    category: "fundamentals",
    resourceType: "book",
    url: "https://www.amazon.com/Seven-Principles-Making-Marriage-Work/dp/0553447718",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=80",
    likes: 189,
    creator: "John Gottman, Ph.D.",
    createdAt: "2026-01-20T11:00:00Z",
  },

  // FIQH PERNIKAHAN
  {
    id: "fiqh-1",
    title: "Fiqh Sunnah Wanita & Pernikahan - Fiqh Nikah Islam",
    description:
      "Penjelasan lengkap syarat sah nikah, rukun akad, wali nasab, dan mahar menurut empat madzhab ulama fikih.",
    category: "fiqh",
    resourceType: "book",
    url: "https://rumaysho.com/category/fiqih-dan-muamalah/fiqih-nikah",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    likes: 320,
    creator: "Ustadz Muhammad Abduh Tuasikal",
    createdAt: "2026-01-05T04:20:00Z",
  },
  {
    id: "fiqh-2",
    title: "Sekolah Pranikah Nurul Ashri (SPN)",
    description:
      "Akun resmi berbasis masjid komunitas yang rutin menyelenggarakan kajian fikih nikah terstruktur, adab rumah tangga, dan pemantapan pranikah syar'i.",
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
    title: "Fikih Pernikahan Berdasarkan Empat Madzhab",
    description:
      "Buku rujukan otoritatif komprehensif mengupas hukum sah akad, perwalian darurat, saksi, hingga variasi mahar kontemporer.",
    category: "fiqh",
    resourceType: "book",
    url: "https://www.gramedia.com/products/fikih-pernikahan-4-madzhab",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    likes: 245,
    creator: "Syaikh Abdul Rahman Al-Jaziri",
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
    thumbnailUrl:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80",
    likes: 271,
    creator: "Kementerian Agama RI",
    createdAt: "2026-04-01T07:50:00Z",
  },

  // FINANCIAL & LEGAL
  {
    id: "financial-legal-1",
    title: "Hukumonline: Panduan Pemisahan Harta & Perjanjian Pranikah",
    description:
      "Artikel kredibel kupas tuntas landasan hukum perlindungan aset bersama, pemisahan utang piutang, dan cara pembuatan Prenuptial Agreement di Notaris.",
    category: "financial-legal",
    resourceType: "website",
    url: "https://www.hukumonline.com/klinik/a/perjanjian-kawin-pisahnya-harta-lt5bcf56bf9310d",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80",
    likes: 192,
    creator: "Hukumonline Indonesia",
    createdAt: "2026-05-10T09:15:00Z",
  },

  // ==========================================
  // PHASE 3: PERSIAPAN WEDDING
  // ==========================================

  // WEDDING PREPARATION
  {
    id: "wedding-1",
    title: "Daftar Catering Pernikahan Legendaris & Kredibel",
    description:
      "Kompilasi ulasan menu buffet, kebersihan gubukan makanan, kelancaran logistik, serta daftar harga paket dari vendor top Jakarta & Bandung.",
    category: "wedding-prep",
    resourceType: "website",
    url: "https://www.bridestory.com/indonesia/catering",
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
    title: "Kelas Online Pra-Nikah: Menyelami Psikologi Pernikahan",
    description:
      "Kursus interaktif berfokus pada resolusi konflik rumah tangga secara empatik, kesehatan mental istri pasca-melahirkan, dan manajemen stres.",
    category: "psychology",
    resourceType: "course",
    url: "https://menjadimanusia.id/programs",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1527137341206-1a2ab86131f9?w=600&auto=format&fit=crop&q=80",
    likes: 194,
    creator: "Menjadi Manusia Co.",
    createdAt: "2026-03-24T08:12:00Z",
  },

  // PARENTING & CHILDCARE
  {
    id: "parent-1",
    title: "Kurikulum Rumah Main Anak: Panduan Belajar Asyik di Rumah",
    description:
      "Buku panduan aktivitas stimulasi motorik dan sensorik anak sejak usia dini, wajib untuk pasangan sebelum punya buah hati.",
    category: "parenting",
    resourceType: "book",
    url: "https://www.gramedia.com/products/kurikulum-rumah-main-anak",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1471286174241-e72c842185c7?w=600&auto=format&fit=crop&q=80",
    likes: 95,
    creator: "Julia Sarah Rangkuti",
    createdAt: "2026-04-12T05:00:00Z",
  },

  // HEALTH & INTIMACY
  {
    id: "health-intimacy-1",
    title: "Urutan Tes Kesehatan / Pre-marital Check Up Wajib Pengantin",
    description:
      "Pedoman persiapan fisik: cek golongan darah, screening penyakit menular, imunisasi Tetanus Toksoid (TT) calon pengantin wanita, dan rujukan ke Puskesmas gratis.",
    category: "health-intimacy",
    resourceType: "website",
    url: "https://www.halodoc.com/artikel/catat-ini-tes-kesehatan-yang-perlu-dilakukan-sebelum-menikah",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=80",
    likes: 184,
    creator: "Tim Halodoc Medis",
    createdAt: "2026-05-22T04:40:00Z",
  },

  // RUMAH TANGGA
  {
    id: "rumah-tangga-1",
    title: "Seni Mengelola Konflik Dengan Mertua & Ipar",
    description:
      "Video tausiyah terstruktur menyeimbangkan peran antara berbakti kepada orang tua dengan menjaga privasi rumah tangga yang mandiri.",
    category: "rumah-tangga",
    resourceType: "youtube",
    url: "https://www.youtube.com/watch?v=q6Ew58K-6bA",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80",
    likes: 228,
    creator: "Kajian Salim A. Fillah",
    createdAt: "2026-05-25T14:10:00Z",
  },
];
