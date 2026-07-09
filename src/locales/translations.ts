export interface TranslationBundle {
  // Common
  appName: string;
  appSubtitle: string;
  btnCancel: string;
  btnSave: string;
  btnEdit: string;
  btnBackToHome: string;
  loading: string;
  success: string;
  error: string;

  // Header
  navHome: string;
  navAboutUs: string;
  navReqRec: string;
  navInteractiveHub: string;
  navSoonBadge: string;
  adminPanelBtn: string;
  liveFirestore: string;
  connected: string;
  notConnected: string;

  // Hero section
  heroSubtitle: string;
  heroTitle: string;
  heroDescription: string;
  heroCtaPropose: string;
  heroCtaExplore: string;

  // Sidebar Filters
  sidebarTitle: string;
  sidebarAll: string;
  filterTypeLabel: string;
  filterTypeAll: string;
  searchPlaceholder: string;
  activeFilterLabel: string;
  activeFilterAll: string;
  matsFound: string;
  matsNotFound: string;
  matsNotFoundDesc: string;
  resetFilterBtn: string;
  focusAreaLabel: string;

  // About Us Page
  aboutHeaderTitle: string;
  aboutHeaderPromo: string;
  aboutHeaderDesc: string;
  aboutTitle: string;
  aboutSectionP1: string;
  aboutSectionP2: string;
  weddingPlanTitle: string;
  weddingPlanDesc: string;
  marriagePlanTitle: string;
  marriagePlanDesc: string;
  valueCurationTitle: string;
  valueCurationDesc: string;
  valueAccessTitle: string;
  valueAccessDesc: string;
  valueInvolvementTitle: string;
  valueInvolvementDesc: string;
  quoteText: string;
  quoteAuthor: string;

  // Interactive Hub
  sandboxBadge: string;
  interactiveHubTitle: string;
  interactiveHubDesc: string;
  comingSoonProBadge: string;
  exclusivePreOrderBadge: string;

  readinessAnalyzerTitle: string;
  readinessAnalyzerDesc: string;
  readinessLabelMental: string;
  readinessLabelFinancial: string;
  readinessLabelVision: string;
  btnCalculateReadiness: string;
  scoreAnalysisLabel: string;
  analysisExcellent: string;
  analysisGood: string;
  analysisNeedsStudy: string;

  valueMatcherTitle: string;
  valueMatcherDesc: string;
  matcherLabel1: string;
  matcherLabel2: string;
  matcherLabel3: string;
  matcherLabel4: string;
  matcherLabel5: string;
  matcherCheckedCount: string;
  matcherFooterDesc: string;

  ebookTitle: string;
  ebookDesc: string;
  ebookBullet1: string;
  ebookBullet2: string;
  ebookBullet3: string;
  ebookPromoTitle: string;
  ebookEmailPlaceholder: string;
  btnPreorderEbook: string;
  preorderSuccessTitle: string;
  preorderSuccessDesc: string;

  // Req Rec Hub
  reqRecTitle: string;
  reqRecDesc: string;
  proposalFormTitle: string;
  proposalTypeRequest: string;
  proposalTypeRecommend: string;
  labelInputTitleRequest: string;
  labelInputTitleRecommend: string;
  placeholderInputTitleRequest: string;
  placeholderInputTitleRecommend: string;
  labelInputCategory: string;
  labelInputMediaType: string;
  labelInputUrl: string;
  labelInputDescRequest: string;
  labelInputDescRecommend: string;
  placeholderInputDescRequest: string;
  placeholderInputDescRecommend: string;
  labelInputSubmitter: string;
  placeholderInputSubmitter: string;
  btnSubmitProposal: string;
  proposalSuccessRequest: string;
  proposalSuccessRecommend: string;
  proposalError: string;
  proposalEmptyWarning: string;
  toastResourceLiked: string;

  // Req Rec Feed
  feedFilterAll: string;
  feedFilterRequests: string;
  feedFilterRecommendations: string;
  feedSearchPlaceholder: string;
  feedEmptyTitle: string;
  feedEmptyDesc: string;
  feedCategoryLabel: string;
  feedEditBadge: string;
  feedUpdatedLabel: string;
  feedUpvoteBtn: string;
  feedUpvoteWarning: string;
  feedVisitLink: string;
  feedFormTitleLabel: string;
  feedFormDescLabel: string;
  feedFormLinkLabel: string;

  // Admin Panel
  adminTitle: string;
  adminDesc: string;
  adminHideBtn: string;
  adminSuccessMsg: string;
  adminErrorMsg: string;
  adminFormTitle: string;
  adminFormTitlePlaceholder: string;
  adminFormDesc: string;
  adminFormDescPlaceholder: string;
  adminFormCategory: string;
  adminFormMediaType: string;
  adminFormLink: string;
  adminFormLinkPlaceholder: string;
  adminFormCreator: string;
  adminFormCreatorPlaceholder: string;
  adminFormThumbnail: string;
  adminFormThumbnailPlaceholder: string;
  adminFormPresetsLabel: string;
  adminFormPreviewLabel: string;
  adminFormPreviewTitle: string;
  adminFormPreviewDesc: string;
  adminFormSubmitBtn: string;
  adminFormSubmittingBtn: string;
  adminPasscodeTitle?: string;
  adminPasscodePlaceholder?: string;
  adminPasscodeError?: string;
  adminPasscodeSubmit?: string;

  // Footer
  footerDesc: string;
  footerQuickLinks: string;
  footerQuickLibrary: string;
  footerQuickPhilosophy: string;
  footerQuickSubmit: string;
  footerQuickReady: string;
  footerInfraStatus: string;
  footerFirestoreDb: string;
  footerSandboxDemo: string;
  footerDeployHost: string;
  footerOpsText: string;
  footerCopyright: string;
  footerPartnerLinkSimkah: string;
  footerPartnerLinkEdukasi: string;
  footerPartnerLinkBridestory: string;

  // Dynamic Category Names and Descriptions
  cat_name_taaruf: string;
  cat_desc_taaruf: string;
  cat_name_fundamentals: string;
  cat_desc_fundamentals: string;
  cat_name_choose_partner: string;
  cat_desc_choose_partner: string;
  cat_name_love_languages: string;
  cat_desc_love_languages: string;
  cat_name_personality: string;
  cat_desc_personality: string;
  cat_name_parenting: string;
  cat_desc_parenting: string;
  cat_name_wedding_prep: string;
  cat_desc_wedding_prep: string;
  cat_name_fiqh: string;
  cat_desc_fiqh: string;
  cat_name_psychology: string;
  cat_desc_psychology: string;
  cat_name_kua: string;
  cat_desc_kua: string;

  // Phase titles
  phase1_title: string;
  phase2_title: string;
  phase3_title: string;
  phase4_title: string;

  // New Categories
  "cat_name_financial-legal": string;
  "cat_desc_financial-legal": string;
  "cat_name_vendor-budget": string;
  "cat_desc_vendor-budget": string;
  "cat_name_health-intimacy": string;
  "cat_desc_health-intimacy": string;
  "cat_name_rumah-tangga": string;
  "cat_desc_rumah-tangga": string;

  cat_name_financial_legal: string;
  cat_desc_financial_legal: string;
  cat_name_vendor_budget: string;
  cat_desc_vendor_budget: string;
  cat_name_health_intimacy: string;
  cat_desc_health_intimacy: string;
  cat_name_rumah_tangga: string;
  cat_desc_rumah_tangga: string;
}

export const translations: Record<"IN" | "EN", TranslationBundle> = {
  IN: {
    appName: "Pernikah",
    appSubtitle: "App",
    btnCancel: "Batal",
    btnSave: "Simpan",
    btnEdit: "Edit",
    btnBackToHome: "Kembali ke Langkah Awal",
    loading: "Memuat...",
    success: "Berhasil!",
    error: "Terjadi kesalahan",

    // Header
    navHome: "Langkah Awal",
    navAboutUs: "Cerita Kami",
    navReqRec: "Usulan",
    navInteractiveHub: "Yakin Siap?",
    navSoonBadge: "Soon",
    adminPanelBtn: "Admin",
    liveFirestore: "Live Firestore",

    connected: "Tersambung",
    notConnected: "Demo Sandbox",

    // Hero section
    heroSubtitle: "Bekalmu untuk Membangun",
    heroTitle: "Ibadah Pernikahan",
    heroDescription:
      "Selamat datang di PernikahApp, pusat katalog referensi untuk melangkah dengan penuh kesiapan dari fase sebelum pernikahan hingga janji suci terucapkan, bahkan setelah menjalani kehidupan setelahnya.",
    heroCtaPropose: "Usulkan Referensi",
    heroCtaExplore: "Mulai Jelajah",

    // Sidebar Filters
    sidebarTitle: "Fase Perencanaan",
    sidebarAll: "Melihat Semua",
    filterTypeLabel: "Tipe:",
    filterTypeAll: "Semua",
    searchPlaceholder:
      "Cari materi, buku, katering, atau nama akun pembicara...",
    activeFilterLabel: "Filter Aktif:",
    activeFilterAll: "Semua Persiapan",
    matsFound: "Ditemukan: {count} Materi",
    matsNotFound: "Materi Tidak Ditemukan",
    matsNotFoundDesc:
      "Coba gunakan kata kunci pencarian alternatif atau setel ulang opsi filter Anda.",
    resetFilterBtn: "Atur Ulang Filter",
    focusAreaLabel: "Fokus Bahasan: ",

    // About Us Page
    aboutHeaderTitle: "Mempersiapkan Perjalanan Panjang",
    aboutHeaderPromo: "Masa Depan",
    aboutHeaderDesc:
      "PernikahApp hadir sebagai jembatan untuk belajar tentang fondasi keluarga sakinah (Marriage Plan) dan memudahkan persiapan pesta pernikahan (Wedding Reception).",
    aboutTitle: "Tentang PernikahApp",
    aboutSectionP1:
      "Seringkali pasangan yang hendak melangsungkan pernikahan mencurahkan sebagian besar energi mereka hanya untuk hari pernikahan (the Wedding Day). Mereka sibuk merancang gaun, memilih hiasan bunga dekorasi, mencoba sampel katering makanan, dan mencocokkan jadwal juru foto. Namun, mereka kerap kali lupa mempersiapkan bekal sebelum pernikahan untuk kehidupan setelah hari H (the Marriage Life) yang akan berlangsung seumur hidup.",
    aboutSectionP2:
      "PernikahApp didesain sebagai Resource Hub. Kami mengumpulkan & mengkurasi akun-akun edukatif pilihan, buku referensi, video kajian terbaik, hingga checklist persiapan penikahan, YouTube, Instagram serta Web kredibel sebagai sumber rujukan.",
    weddingPlanTitle: "Wedding Plan (Hari H)",
    weddingPlanDesc:
      "Membantu kelancaran persiapan pesta perniakahan serta merangkum berbagai rekomendasi Vendor perniakahan seperti: Catering, Venue premium, Wedding Organizer terpercaya, dan Fotografi ramah di kantong.",
    marriagePlanTitle: "Marriage Plan (Selamanya)",
    marriagePlanDesc:
      "Mengedukasi aspek krusial: perkenalan sebelum berkomitmen, dasar-dasar hukum fiqih, pilar psikologi rumah tangga, pemetaan kecocokan kepribadian, hingga bekal parenting.",
    valueCurationTitle: "Kurasi Terseleksi",
    valueCurationDesc:
      "Setiap rekomendasi akun, buku, dan kursus murni dikurasi demi menjaga kesesuaian kualitas.",
    valueAccessTitle: "Kemudahan Akses",
    valueAccessDesc:
      "Pengguna cukup mengeklik tautan yang kami sediakan untuk langsung menuju Instagram, YouTube, Buku, atau platform edukasi.",
    valueInvolvementTitle: "Keterlibatan Publik",
    valueInvolvementDesc:
      "Kami membuka ruang rekomendasi! Berikan kontribusi referensi Anda melalui menu Request & Recommendation.",
    quoteText:
      '"Tidak ada yang lebih baik bagi dua orang yang saling mencintai daripada pernikahan."',
    quoteAuthor: "- HR. Ibnu Majah No. 1847",

    // Interactive Hub
    sandboxBadge: "Interactive Sandbox",
    interactiveHubTitle: "PernikahApp Interactive Hub",
    interactiveHubDesc:
      "Dapatkan gambaran fitur premium masa depan kami melalui prototipe interaktif di bawah ini! Rancang kesiapan Anda sekarang juga secara interaktif.",
    comingSoonProBadge: "Coming Soon Pro",
    exclusivePreOrderBadge: "Exclusive Pre-Order",

    readinessAnalyzerTitle: "Uji Kesiapan Nikah (Readiness Analyzer)",
    readinessAnalyzerDesc:
      "Sebuah kerangka analisis mandiri mengukur aspek Emosional, Finansial, dan Komunikasi pra-nikah Anda. Geser slider di bawah untuk simulasi kalkulasi instan!",
    readinessLabelMental: "1. Kesiapan Mental & Emosi (0-10):",
    readinessLabelFinancial: "2. Kesiapan Finansial & Kerja (0-10):",
    readinessLabelVision: "3. Kemandirian & Visi Hidup (0-10):",
    btnCalculateReadiness: "Kalkulasi Hasil Kesiapan",
    scoreAnalysisLabel: "Skor Analisis Kesiapan Anda:",
    analysisExcellent: "Hebat! Anda memiliki fondasi yang cukup solid.",
    analysisGood:
      "Bagus, namun Anda perlu lebih mengasah komunikasi dan keterbukaan.",
    analysisNeedsStudy:
      "Sabar, masih banyak referensi di hub ini yang bisa membantu bekal belajar Anda!",

    valueMatcherTitle: "Kriteria Jodoh Ideal (Value Matcher)",
    valueMatcherDesc:
      "Kerangka kerja interaktif menyelaraskan kriteria mutlak calon pendamping berdasarkan keselarasan visi hidup. Tandai poin wajib di bawah yang menurut Anda harus didiskusikan!",
    matcherLabel1: "Kesesuaian Prinsip Keagamaan (Faith)",
    matcherLabel2: "Value Finansial (Saling mandiri & sepakat porsi tabungan)",
    matcherLabel3: "Gaya Komunikasi (Kemampuan penyelesaian pertikaian)",
    matcherLabel4: "Rencana domisili masa depan setelah kualifikasi",
    matcherLabel5: "Visi pengasuhan didikan anak (Parenting model)",
    matcherCheckedCount: "Kesesuaian Tercentang: {count} Dari {total} Pokok",
    matcherFooterDesc:
      "Gunakan hasil centang sebagai pemantik obrolan dengan mediator ta'aruf. Mesin auto-match calon akan hadir!",

    ebookTitle: "E-Book Premium: Gerbang Sakinah Terindah",
    ebookDesc:
      "Materi rangkuman eksklusif setebal 180 halaman menyangkut seluruh kurikulum PernikahApp, dikemas dengan narasi santai, komparasi riset, checklist katering, kalkulator hantaran, dan direktori lengkap administrasi KUA.",
    ebookBullet1: "✓ 10 Checklist Praktis",
    ebookBullet2: "✓ Format Form CV Ta'aruf",
    ebookBullet3: "✓ Alur Birokrasi KUA",
    ebookPromoTitle: "Dapatkan info rilis & Salinan Pertama!",
    ebookEmailPlaceholder: "Masukkan alamat email Anda",
    btnPreorderEbook: "Amankan Draft E-Book",
    preorderSuccessTitle: "Pre-Order Sukses terdaftar!",
    preorderSuccessDesc: "Kami akan mengabari Anda segera setelah peluncuran.",

    // Req Rec Hub
    reqRecTitle: "Topic Request & Recommendation Hub",
    reqRecDesc:
      "Bagikan rekomendasi sumber daya berkualitas yang Anda miliki, atau kirimkan topik/materi kajian baru yang sangat ingin Anda bahas bersama tim ahli!",
    proposalFormTitle: "Formulir Usulan Baru",
    proposalTypeRequest: "Request Topik",
    proposalTypeRecommend: "Rekomendasikan",
    labelInputTitleRequest: "Topik yang Diinginkan *",
    labelInputTitleRecommend: "Judul Sumber Daya / Akun / Buku *",
    placeholderInputTitleRequest:
      "Contoh: Mengatasi konflik mertua di awal pernikahan",
    placeholderInputTitleRecommend:
      "Contoh: Buku Fiqih Sunnah Wanita Terbitan Gema Insani",
    labelInputCategory: "Kategori Utama *",
    labelInputMediaType: "Media / Jenis Sumber Daya *",
    labelInputUrl: "Tautan / Link URL Rekomendasi",
    labelInputDescRequest: "Detail Deskripsi Permintaan Bahan Kajian *",
    labelInputDescRecommend:
      "Informasi Alasan Mengapa Kamu Merekomendasikannya *",
    placeholderInputDescRequest:
      "Tuliskan rincian apa saja sub-topik yang ingin dicarikan referensinya...",
    placeholderInputDescRecommend:
      "Beri ulasan singkat isi dari buku/akun ini serta fadhilah atau kelebihannya agar bermanfaat bagi orang lain...",
    labelInputSubmitter: "Nama Pengirim (Bisa inisial/anonim) *",
    placeholderInputSubmitter: "Nama Anda",
    btnSubmitProposal: "Kirim Usulan",
    proposalSuccessRequest: "Berhasil mengirimkan request topik!",
    proposalSuccessRecommend: "Terima kasih atas rekomendasi sumber daya Anda!",
    proposalError: "Terjadi kesalahan sistem saat mengirim data.",
    proposalEmptyWarning: "Mohon lengkapi semua field wajib!",
    toastResourceLiked:
      "Suka dengan rekomendasi ini! Suara dukungan dikoordinasikan ke database.",

    // Req Rec Feed
    feedFilterAll: "Semua",
    feedFilterRequests: "Requests",
    feedFilterRecommendations: "Rekomendasi",
    feedSearchPlaceholder: "Cari usulan...",
    feedEmptyTitle: "Belum Ada Usulan",
    feedEmptyDesc:
      "Jadilah kontributor pertama yang merequest topik atau merekomendasikan literatur bermutu!",
    feedCategoryLabel: "Kategori:",
    feedEditBadge: "Edit",
    feedUpdatedLabel: "Diperbarui:",
    feedUpvoteBtn: "Upvote",
    feedUpvoteWarning: "Anda telah memberikan suara untuk usulan ini!",
    feedVisitLink: "Kunjungi Tautan Rekomendasi",
    feedFormTitleLabel: "Judul Posting",
    feedFormDescLabel: "Penjelasan / Alasan",
    feedFormLinkLabel: "Link URL",

    // Admin Panel
    adminTitle: "Database Admin Panel (CMS PernikahApp)",
    adminDesc:
      "Fungsi khusus untuk simulasi tim kurator dan Admin. Data yang dimasukkan langsung tersimpan di Cloud Firestore / Local DB.",
    adminHideBtn: "Sembunyikan Panel",
    adminSuccessMsg:
      "Resource baru berhasil dipublikasikan! Silakan lihat di bagian Langkah Awal sesuai Kategori.",
    adminErrorMsg: "Gagal menambahkan resource.",
    adminFormTitle: "Judul Resource Baru *",
    adminFormTitlePlaceholder:
      "Contoh: Kajian Menikah Berkah - Ustadz Abdul Somad",
    adminFormDesc: "Deskripsi / Ulasan Singkat Pembuat *",
    adminFormDescPlaceholder:
      "Rincian singkat materi, isi ulasan, fadhilah relasi...",
    adminFormCategory: "Kategori *",
    adminFormMediaType: "Jenis Media *",
    adminFormLink: "Tautan Langsung (Lembaga/Link Video) *",
    adminFormLinkPlaceholder: "https://example.com/materi-pilihan",
    adminFormCreator: "Pembuat / Akun Edukasi",
    adminFormCreatorPlaceholder: "Contoh: @salimafillah atau Kemenag",
    adminFormThumbnail: "URL Thumbnail Gambar",
    adminFormThumbnailPlaceholder: "https://images.unsplash.com/...",
    adminFormPresetsLabel: "Rekomendasi Thumbnail Cepat (Klik untuk memilih):",
    adminFormPreviewLabel: "Preview Card",
    adminFormPreviewTitle: "Judul Preview...",
    adminFormPreviewDesc: "Deskripsi Preview...",
    adminFormSubmitBtn: "Publikasikan ke Database Hub",
    adminFormSubmittingBtn: "Mempublikasikan materi...",
    adminPasscodeTitle: "Akses Panel Admin Terbatas",
    adminPasscodePlaceholder: "Masukkan kode rahasia admin...",
    adminPasscodeError: "Kode rahasia salah! Silakan coba lagi.",
    adminPasscodeSubmit: "Verifikasi Kode",

    // Footer
    footerDesc:
      "Pusat katalog referensi terpercaya bagi calon pasangan pengantin untuk membangun pernikahan yang sakinah, mawaddah, wa rahmah.",
    footerQuickLinks: "Navigasi Cepat",
    footerQuickLibrary: "Perpustakaan Kurasi",
    footerQuickPhilosophy: "Misi & Filosofi Kami",
    footerQuickSubmit: "Kirim Rekomendasi / Request",
    footerQuickReady: "Kalkulator Kesiapan Nikah",
    footerInfraStatus: "Status Infrastruktur",
    footerFirestoreDb: "Database Cloud Firestore:",
    footerSandboxDemo: "Demo Sandbox",
    footerDeployHost: "Alamat Penempatan Sementara:",
    footerOpsText:
      "Operasi CRU (Create, Read, Update) aktif di semua mode penyimpanan.",
    footerCopyright:
      "© 2026 PernikahApp. Seluruh hak cipta dilindungi undang-undang.",
    footerPartnerLinkSimkah: "Simkah Kemenag",
    footerPartnerLinkEdukasi: "Edukasi Sunnah",
    footerPartnerLinkBridestory: "Bridestory",

    cat_name_taaruf: "Ta'aruf Syar'i",
    cat_desc_taaruf:
      "Proses perkenalan suci sesuai syariat Islam demi meminimalisir maksiat sebelum ikatan halal.",
    cat_name_fundamentals: "Marriage Fundamentals",
    cat_desc_fundamentals:
      "Pondasi esensial mencakup visi pernikahan, finansial rumah tangga, komunikasi pasutri, dan peran masing-masing.",
    cat_name_choose_partner: "Choosing the Right Person",
    cat_desc_choose_partner:
      "Kriteria memilih jodoh ideal secara matang, menyelaraskan value kehidupan, dan menyikapi red-flags.",
    cat_name_love_languages: "Love Languages",
    cat_desc_love_languages:
      "Memahami 5 bahasa kasih utama: Word of Affirmation, Quality Time, Receiving Gifts, Acts of Service, dan Physical Touch.",
    cat_name_personality: "Personality Check",
    cat_desc_personality:
      "Mengenali profil kepribadian diri dan calon pasangan (MBTI, DISC, Enneagram) guna mitigasi gesekan ego.",
    cat_name_parenting: "Parenting & Childcare",
    cat_desc_parenting:
      "Kurikulum pengasuhan anak secara positif, psikologi anak, serta bekal menjadi ayah dan ibu yang teladan.",
    cat_name_wedding_prep: "Wedding Preparation",
    cat_desc_wedding_prep:
      "Rekomendasi catering vendor, dekorasi venue romantis, jasa fotografi, hingga wedding organizer terbaik.",
    cat_name_fiqh: "Fiqh Pernikahan",
    cat_desc_fiqh:
      "Kupas tuntas hukum fiqih seputar akad, mahar, hak-kewajiban suami-istri, hingga adab berhubungan menurut Islam.",
    cat_name_psychology: "Wedding & Couple Psychology",
    cat_desc_psychology:
      "Studi emosi pasangan, resolusi konflik pra-nikah, mengatasi kecemasan komitmen (cold feet), dan kesehatan mental.",
    cat_name_kua: "KUA Preparation",
    cat_desc_kua:
      "Alur administrasi KUA lengkap, pendaftaran online Simkah, bimbingan pra-nikah (Bimwin), serta syarat dokumen resmi.",

    // Phase titles
    phase1_title: "Fase 1: Mencari & Berkenalan",
    phase2_title: "Fase 2: Pemantapan Ilmu",
    phase3_title: "Fase 3: Persiapan Wedding",
    phase4_title: "Fase 4: Kehidupan Setelah Nikah",

    // New Categories (Indonesian)
    "cat_name_financial-legal": "Financial & Legal",
    "cat_desc_financial-legal":
      "Pemetaan harta bawaan, perjanjian pra-nikah (pre-nuptial), pengelolaan anggaran pasutri, serta regulasi hukum perkawinan.",
    "cat_name_vendor-budget": "Vendor & Budget Guide",
    "cat_desc_vendor-budget":
      "Panduan simulasi menyusun anggaran pernikahan (budgeting), negosiasi paket vendor, serta tips efisiensi biaya pesta pernikahan.",
    "cat_name_health-intimacy": "Health & Intimacy",
    "cat_desc_health-intimacy":
      "Edukasi kesehatan reproduksi, pemeriksaan medis pra-nikah (pre-marital checkup), serta bekal fiqih & sains keintiman halal.",
    "cat_name_rumah-tangga": "Rumah Tangga",
    "cat_desc_rumah-tangga":
      "Seni mengelola kehidupan rumah tangga sehari-hari, pembagian kerja domestik, manajemen konflik mertua, dan kebahagiaan harian.",

    cat_name_financial_legal: "Financial & Legal",
    cat_desc_financial_legal:
      "Pemetaan harta bawaan, perjanjian pra-nikah (pre-nuptial), pengelolaan anggaran pasutri, serta regulasi hukum perkawinan.",
    cat_name_vendor_budget: "Vendor & Budget Guide",
    cat_desc_vendor_budget:
      "Panduan simulasi menyusun anggaran pernikahan (budgeting), negosiasi paket vendor, serta tips efisiensi biaya pesta pernikahan.",
    cat_name_health_intimacy: "Health & Intimacy",
    cat_desc_health_intimacy:
      "Edukasi kesehatan reproduksi, pemeriksaan medis pra-nikah (pre-marital checkup), serta bekal fiqih & sains keintiman halal.",
    cat_name_rumah_tangga: "Rumah Tangga",
    cat_desc_rumah_tangga:
      "Seni mengelola kehidupan rumah tangga sehari-hari, pembagian kerja domestik, manajemen konflik mertua, dan kebahagiaan harian.",
  },
  EN: {
    appName: "Pernikah",
    appSubtitle: "App",
    btnCancel: "Cancel",
    btnSave: "Save",
    btnEdit: "Edit",
    btnBackToHome: "Back to First Steps",
    loading: "Loading...",
    success: "Success!",
    error: "An error occurred",

    // Header
    navHome: "First Step",
    navAboutUs: "Our Story",
    navReqRec: "Wishlist",
    navInteractiveHub: "Checklist",
    navSoonBadge: "Soon",
    adminPanelBtn: "Admin",
    liveFirestore: "Live Firestore",
    connected: "Connected",
    notConnected: "Demo Sandbox",

    // Hero section
    heroSubtitle: "Your Foundation for Building",
    heroTitle: "The Sacred Bond of Marriage",
    heroDescription:
      "Welcome to PernikahApp, your curated resource hub designed to guide you with full readiness. From your pre-marital journey to the day you declare your sacred vows, and through every step of your life together after.",
    heroCtaPropose: "Propose Your Reference",
    heroCtaExplore: "Start Exploring",

    // Sidebar Filters
    sidebarTitle: "Planning Phase",
    sidebarAll: "View All",
    filterTypeLabel: "Type:",
    filterTypeAll: "All",
    searchPlaceholder:
      "Search materials, books, catering, or speaker accounts...",
    activeFilterLabel: "Active Filter:",
    activeFilterAll: "All Stages",
    matsFound: "Found: {count} Materials",
    matsNotFound: "Materials Not Found",
    matsNotFoundDesc:
      "Try alternative search keywords or reset your filter settings.",
    resetFilterBtn: "Reset Filters",
    focusAreaLabel: "Focus Topic: ",

    // About Us Page
    aboutHeaderTitle: "Preparing for the Lifelong Journey",
    aboutHeaderPromo: "in The Future",
    aboutHeaderDesc:
      "PernikahApp serves as a bridge to learning the foundations of a peaceful family (Marriage Plan) while simplifying your wedding day prep kit (Wedding Reception).",
    aboutTitle: "About PernikahApp",
    aboutSectionP1:
      "All too often, couples preparing for marriage pour 99% of their energy solely into the Wedding Day. They get caught up in designing the perfect gown, choosing floral arrangements, tasting catering samples, and sync-ing schedules with photographers. Yet, they often overlook gathering the essential knowledge needed for the Lifetime of Marriage that follows the big day.",
    aboutSectionP2:
      "PernikahApp is designed to be your Ultimate Resource Hub. We gather and curate top-tier educational accounts, reference books, insightful video lectures, and wedding checklists, YouTube channels, Instagram profiles, and credible websites as your go-to references.",
    weddingPlanTitle: "Wedding Plan (The Big Day)",
    weddingPlanDesc:
      "Streamlining your KUA administration, official pre-marital guidance, and gathering budget-friendly recommendations for catering vendors, premium venues, credible wedding organizers, and photography.",
    marriagePlanTitle: "Marriage Plan (The Lifetime)",
    marriagePlanDesc:
      "Educating you on crucial aspects: Islamic introductions (Ta'aruf), foundational fiqh laws, family psychology, personality compatibility checks, and essential parenting guides for raising children.",
    valueCurationTitle: "Handpicked Curation",
    valueCurationDesc:
      "Every recommended account, book, and course is purely curated to maintain the highest quality and relevance.",
    valueAccessTitle: "Seamless Access",
    valueAccessDesc:
      "Users can simply click the links provided to head directly to Instagram, YouTube, Books, or other educational platforms.",
    valueInvolvementTitle: "Community-Driven",
    valueInvolvementDesc:
      "We welcome your input! Contribute your favorite references through our Request & Recommendation menu.",
    quoteText:
      '"There is nothing better for two people who love each other than marriage."',
    quoteAuthor: "- HR. Ibnu Majah No. 1847",

    // Interactive Hub
    sandboxBadge: "Interactive Sandbox",
    interactiveHubTitle: "PernikahApp Interactive Hub",
    interactiveHubDesc:
      "Obtain an overview of our future premium features through the interactive prototype below! Analyze your readiness interactively.",
    comingSoonProBadge: "Coming Soon Pro",
    exclusivePreOrderBadge: "Exclusive Pre-Order",

    readinessAnalyzerTitle: "Pre-Marriage Readiness Analyzer",
    readinessAnalyzerDesc:
      "A self-evaluation matrix measuring your pre-marital Emotional, Financial, and Communication preparation. Drag the sliders below for instant simulation!",
    readinessLabelMental: "1. Mental & Emotional Readiness (0-10):",
    readinessLabelFinancial: "2. Financial & Career Readiness (0-10):",
    readinessLabelVision: "3. Independence & Life Vision (0-10):",
    btnCalculateReadiness: "Calculate Readiness Score",
    scoreAnalysisLabel: "Your Readiness Score Result:",
    analysisExcellent:
      "Superb! You possess a highly solid relational foundation.",
    analysisGood:
      "Splendid, but you should continue to refine communication transparency.",
    analysisNeedsStudy:
      "Stay patient, there are many educational guides in this hub to support your growth!",

    valueMatcherTitle: "Ideal Partner Criteria (Value Matcher)",
    valueMatcherDesc:
      "Select key criteria based on life-vision convergence to establish high-compatibility parameters. Tick the mandatory topics below you believe must be discussed!",
    matcherLabel1: "Religious Alignment & Faith Principles",
    matcherLabel2:
      "Financial Compatibility (Savings split & monetary alignment)",
    matcherLabel3: "Communication Styles & Conflict Resolution skills",
    matcherLabel4:
      "Post-marriage Residency plans (Independence vs parent's home)",
    matcherLabel5: "Parenting vision and educational models",
    matcherCheckedCount: "Ticked Alignment: {count} Out of {total} Points",
    matcherFooterDesc:
      "Use these checked points as conversation triggers with your mediator or calon partner. An automated pairing algorithm is heading your way!",

    ebookTitle: "Premium E-Book: Gates to a Blessed Sakinah",
    ebookDesc:
      "An exclusive 180-page summarized handbook spanning the entire PernikahApp curricula, compiled with casual narratives, comparative research, catering checklists, dowry calculator, and administrative KUA guides.",
    ebookBullet1: "✓ 10 Practical Checklists",
    ebookBullet2: "✓ Ta'aruf CV Templates",
    ebookBullet3: "✓ Official KUA Bureaucracy",
    ebookPromoTitle: "Get Launch Alerts & Be First in Line!",
    ebookEmailPlaceholder: "Enter your primary email address",
    btnPreorderEbook: "Secure My Copy",
    preorderSuccessTitle: "Pre-Order Successfully Registered!",
    preorderSuccessDesc: "We will message you immediately on launch date.",

    // Req Rec Hub
    reqRecTitle: "Topic Request & Recommendation Hub",
    reqRecDesc:
      "Share high-quality pre-wedding resources you love, or submit new study topics you would like analyzed by Islamic matrimonial experts!",
    proposalFormTitle: "Submit New Proposal",
    proposalTypeRequest: "Request Topic",
    proposalTypeRecommend: "Recommend Resource",
    labelInputTitleRequest: "Desired Topic *",
    labelInputTitleRecommend: "Name of Resource / Account / Book *",
    placeholderInputTitleRequest:
      "Example: Handling post-marriage boundary conflicts with in-laws",
    placeholderInputTitleRecommend:
      "Example: Fiqh Sunnah for Women published by Gema Insani",
    labelInputCategory: "Primary Category *",
    labelInputMediaType: "Media / Resource Classification *",
    labelInputUrl: "Recommended Destination Link URL",
    labelInputDescRequest: "Study Topic Description & Key Details *",
    labelInputDescRecommend:
      "Key Reasons & Short Review Why You Recommend It *",
    placeholderInputDescRequest:
      "Detail what specific questions or sub-topics you need material on...",
    placeholderInputDescRecommend:
      "Explain key highlights of this book or account and how it helped you study...",
    labelInputSubmitter: "Your Name (Initials or anonymous welcome) *",
    placeholderInputSubmitter: "My Name",
    btnSubmitProposal: "Submit Proposal",
    proposalSuccessRequest: "Matrimonial Topic request submitted successfully!",
    proposalSuccessRecommend:
      "Thank you for sharing your curated wedding reference!",
    proposalError:
      "A cloud indexing error occurred while transferring your input.",
    proposalEmptyWarning: "Please complete all mandatory fields!",
    toastResourceLiked:
      "Glad you liked this recommendation! Your support vote has been synced to the database.",

    // Req Rec Feed
    feedFilterAll: "All",
    feedFilterRequests: "Requests",
    feedFilterRecommendations: "Recommendations",
    feedSearchPlaceholder: "Search inputs...",
    feedEmptyTitle: "No Submissions Yet",
    feedEmptyDesc:
      "Be the founding contributor! Request a topic or recommend a trustworthy planning resource now.",
    feedCategoryLabel: "Category:",
    feedEditBadge: "Edit",
    feedUpdatedLabel: "Updated on:",
    feedUpvoteBtn: "Upvote",
    feedUpvoteWarning:
      "You have already casted a vote for this recommendation!",
    feedVisitLink: "Visit Matrimonial Resource Link",
    feedFormTitleLabel: "Post Title",
    feedFormDescLabel: "Description / Recommendation Reasons",
    feedFormLinkLabel: "Destination URL Link",

    // Admin Panel
    adminTitle: "Database Admin Panel (CMS PernikahApp)",
    adminDesc:
      "CMS operations restricted to curator team simulations. Submissions sync live to Google Cloud Firestore or Local DB storage.",
    adminHideBtn: "Hide Control Panel",
    adminSuccessMsg:
      "Matrimonial resource successfully added into catalog! Check home category view.",
    adminErrorMsg: "Cloud sync failed to record resource.",
    adminFormTitle: "New Curated Resource Title *",
    adminFormTitlePlaceholder:
      "Example: Marriage Blessings and Harmony Lecture - Somad",
    adminFormDesc: "Curator Short Summary & Matrimonial Value *",
    adminFormDescPlaceholder:
      "Summarize focus areas and why it is essential for newlyweds...",
    adminFormCategory: "Target Category *",
    adminFormMediaType: "Media Category *",
    adminFormLink: "Direct Resource Destination Link URL *",
    adminFormLinkPlaceholder: "https://example.com/curated-option",
    adminFormCreator: "Publisher / Educator Account",
    adminFormCreatorPlaceholder:
      "Example: @salimafillah or Ministry of Religious Affairs",
    adminFormThumbnail: "Banner Image URL Link",
    adminFormThumbnailPlaceholder: "https://images.unsplash.com/...",
    adminFormPresetsLabel: "Quick Thumbnail Presets (Click to load):",
    adminFormPreviewLabel: "Responsive Card Preview",
    adminFormPreviewTitle: "Preview Title...",
    adminFormPreviewDesc: "Preview description...",
    adminFormSubmitBtn: "Publish to Matrimonial Database",
    adminFormSubmittingBtn: "Broadcasting curated catalog...",
    adminPasscodeTitle: "Restricted Admin Panel Access",
    adminPasscodePlaceholder: "Enter admin secret code...",
    adminPasscodeError: "Wrong secret code! Please try again.",
    adminPasscodeSubmit: "Verify Code",

    // Footer
    footerDesc:
      "A trusted catalog of resources for couples to build a marriage filled with peace, love, and tranquility.",
    footerQuickLinks: "Quick Navigation",
    footerQuickLibrary: "Curated Directory",
    footerQuickPhilosophy: "Matrimonial Vision",
    footerQuickSubmit: "Submit Proposal",
    footerQuickReady: "Readiness Analyzer",
    footerInfraStatus: "Infrastructure Status",
    footerFirestoreDb: "Cloud Firestore Database:",
    footerSandboxDemo: "Demo Sandbox",
    footerDeployHost: "Active Node Deploy Path:",
    footerOpsText:
      "Durable CRU (Create, Read, Update) processes authenticated across directories.",
    footerCopyright: "© 2026 PernikahApp. All rights reserved globally.",
    footerPartnerLinkSimkah: "Religious Ministry Simkah",
    footerPartnerLinkEdukasi: "Sunnah Education",
    footerPartnerLinkBridestory: "Bridestory Partner",

    cat_name_taaruf: "Ta'aruf Syar'i",
    cat_desc_taaruf:
      "Sacred, halal Islamic introductory process to maintain integrity before the marital contract.",
    cat_name_fundamentals: "Marriage Fundamentals",
    cat_desc_fundamentals:
      "The foundational pillars: marriage vision, conjugal communication, household financials, and mutual responsibilities.",
    cat_name_choose_partner: "Choosing the Right Person",
    cat_desc_choose_partner:
      "Mature indicators to select a lifelong spouse, align core values, and diagnose behavioral warnings.",
    cat_name_love_languages: "Love Languages",
    cat_desc_love_languages:
      "Deepening connection through the 5 love languages: words, quality time, gifts, acts of service, physical presence.",
    cat_name_personality: "Personality Check",
    cat_desc_personality:
      "Evaluating individual temperament indices (MBTI, Enneagram, DISC) to navigate ego clashes and habits.",
    cat_name_parenting: "Parenting & Childcare",
    cat_desc_parenting:
      "An educational syllabus on nursery psychology, secure attachment styles, and becoming stellar parents.",
    cat_name_wedding_prep: "Wedding Preparation",
    cat_desc_wedding_prep:
      "Catering ratings, floral venue setups, photographers, and matrimonial organizer recommendations.",
    cat_name_fiqh: "Fiqh Pernikahan",
    cat_desc_fiqh:
      "Evaluating Islamic jurisprudence: marital contract conditions, dowry rights, and marital etiquette.",
    cat_name_psychology: "Wedding & Couple Psychology",
    cat_desc_psychology:
      "Relational emotional resilience, resolving pre-wedding cold feet, healthy co-dependency boundaries, and mental health.",
    cat_name_kua: "KUA Preparation",
    cat_desc_kua:
      "Official state marriage registry processes, Kemenag online uploading, mandatory courses (Bimwin), and checklist files.",

    // Phase titles
    phase1_title: "Phase 1: Search & Introduction",
    phase2_title: "Phase 2: Deepening Knowledge",
    phase3_title: "Phase 3: Wedding Prep",
    phase4_title: "Phase 4: Married Life",

    // New Categories (English)
    "cat_name_financial-legal": "Financial & Legal",
    "cat_desc_financial-legal":
      "Evaluation of pre-marital assets, pre-nuptial contracts, family budgeting, and marriage laws.",
    "cat_name_vendor-budget": "Vendor & Budget Guide",
    "cat_desc_vendor-budget":
      "Guides to compile your wedding budget, negotiate vendor packages, and practice cost efficiency.",
    "cat_name_health-intimacy": "Health & Intimacy",
    "cat_desc_health-intimacy":
      "Reproductive wellness education, mandatory vaccinations, medical checkups, and halal intimacy tips.",
    "cat_name_rumah-tangga": "Home & Household",
    "cat_desc_rumah-tangga":
      "The art of managing daily household duties, domestic task divisions, parent-in-law boundaries, and family bliss.",

    cat_name_financial_legal: "Financial & Legal",
    cat_desc_financial_legal:
      "Evaluation of pre-marital assets, pre-nuptial contracts, family budgeting, and marriage laws.",
    cat_name_vendor_budget: "Vendor & Budget Guide",
    cat_desc_vendor_budget:
      "Guides to compile your wedding budget, negotiate vendor packages, and practice cost efficiency.",
    cat_name_health_intimacy: "Health & Intimacy",
    cat_desc_health_intimacy:
      "Reproductive wellness education, mandatory vaccinations, medical checkups, and halal intimacy tips.",
    cat_name_rumah_tangga: "Home & Household",
    cat_desc_rumah_tangga:
      "The art of managing daily household duties, domestic task divisions, parent-in-law boundaries, and family bliss.",
  },
};
