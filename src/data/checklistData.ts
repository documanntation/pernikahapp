export interface ChecklistItem {
  id: string;
  tab: 'timeline' | 'lamaran' | 'prewedding' | 'pengajian' | 'akad' | 'resepsi' | 'kit';
  category: string;
  milestone: string; // e.g. '12-11 Bulan', 'Juli 2026', 'Hari-H'
  nameIN: string;
  nameEN: string;
  isCustom?: boolean;
}

export const DEFAULT_CHECKLIST_ITEMS: ChecklistItem[] = [
  // ==========================================
  // TAB 1: TIMELINE UTAMA (TIMELINE)
  // ==========================================
  {
    id: 't-1',
    tab: 'timeline',
    category: 'Budgeting',
    milestone: '12-11 Bulan Sebelumnya',
    nameIN: 'Memformulasikan rincian alokasi anggaran (budgeting) tiap pos vendor pernikahan secara realistis.',
    nameEN: 'Formulate a realistic budget allocation across all wedding vendor categories.'
  },
  {
    id: 't-2',
    tab: 'timeline',
    category: 'Tanggal',
    milestone: '12-11 Bulan Sebelumnya',
    nameIN: 'Menyeleksi dan menetapkan tanggal akad serta resepsi pernikahan secara matang bersama keluarga.',
    nameEN: 'Decide and lock in the solemnization and reception dates after consulting both families.'
  },
  {
    id: 't-3',
    tab: 'timeline',
    category: 'Tamu',
    milestone: '12-11 Bulan Sebelumnya',
    nameIN: 'Mengestimasikan kuota undangan & jumlah tamu yang akan hadir demi menentukan ukuran venue.',
    nameEN: 'Estimate the guest counts and invitation quota to gauge the appropriate venue capacity.'
  },
  {
    id: 't-4',
    tab: 'timeline',
    category: 'Venue',
    milestone: '12-11 Bulan Sebelumnya',
    nameIN: 'Menghubungi, memesan lokasi acara (venue) pilihan, serta melunasi uang muka (DP) awal.',
    nameEN: 'Contact, reserve the desired wedding venue, and clear the initial down payment.'
  },
  {
    id: 't-5',
    tab: 'timeline',
    category: 'Konsep',
    milestone: '10-9 Bulan Sebelumnya',
    nameIN: 'Mengonsep tema/gaya pernikahan (modern, adat tradisional, atau kombinasi)',
    nameEN: 'Formulate the wedding theme/aesthetic (modern, traditional, or fusion).'
  },
  {
    id: 't-6',
    tab: 'timeline',
    category: 'Vendor',
    milestone: '10-9 Bulan Sebelumnya',
    nameIN: 'Mengompilasi kurasi portofolio vendor pernikahan & mencari referensi terbaik.',
    nameEN: 'Compile a curated list of wedding vendors and seek trustworthy reviews.'
  },
  {
    id: 't-7',
    tab: 'timeline',
    category: 'Busana Wanita',
    milestone: '10-9 Bulan Sebelumnya',
    nameIN: 'Menentukan desain, corak kain, dan model gaun pengantin wanita impian.',
    nameEN: 'Determine the custom design, fabric patterns, and cut of the dream wedding gown.'
  },
  {
    id: 't-8',
    tab: 'timeline',
    category: 'Aksesori',
    milestone: '10-9 Bulan Sebelumnya',
    nameIN: 'Menyeleksi jenis perhiasan & kelengkapan aksesori pernikahan pendukung.',
    nameEN: 'Select auxiliary jewelry pieces and supporting wedding accessories.'
  },
  {
    id: 't-9',
    tab: 'timeline',
    category: 'Dekorasi',
    milestone: '8-7 Bulan Sebelumnya',
    nameIN: 'Berdiskusi dengan vendor dekorasi terkait sketsa/layout pelaminan & tata ruang.',
    nameEN: 'Request and discuss the 2D/3D layout sketches of the stage with your decorator.'
  },
  {
    id: 't-10',
    tab: 'timeline',
    category: 'Dokumentasi',
    milestone: '8-7 Bulan Sebelumnya',
    nameIN: 'Mengontrak jasa dokumentasi profesional (vendor foto dan video liputan).',
    nameEN: 'Secure professional documentation services (photography & videography).'
  },
  {
    id: 't-11',
    tab: 'timeline',
    category: 'Kue',
    milestone: '8-7 Bulan Sebelumnya',
    nameIN: 'Melakukan sesi uji rasa (cake tasting) & memesan kue pernikahan bertingkat.',
    nameEN: 'Schedule a cake tasting session and place an order for the wedding cake.'
  },
  {
    id: 't-12',
    tab: 'timeline',
    category: 'Busana Pria',
    milestone: '8-7 Bulan Sebelumnya',
    nameIN: 'Menentukan bahan, ukuran, dan memesan jas formal/beskap untuk pengantin pria.',
    nameEN: 'Order and custom-measure the formal suit or traditional beskap for the groom.'
  },
  {
    id: 't-13',
    tab: 'timeline',
    category: 'Cincin',
    milestone: '6-5 Bulan Sebelumnya',
    nameIN: 'Memilih dan memesan sepasang cincin pernikahan bertuliskan inisial nama.',
    nameEN: 'Pick out and custom-order the wedding ring bands with custom engravings.'
  },
  {
    id: 't-14',
    tab: 'timeline',
    category: 'Tamu',
    milestone: '6-5 Bulan Sebelumnya',
    nameIN: 'Memfinalisasi rincian daftar nama tamu undangan secara detail di spreadsheet.',
    nameEN: 'Finalize the detailed names and contacts of invitees in a digital spreadsheet.'
  },
  {
    id: 't-15',
    tab: 'timeline',
    category: 'Suvenir',
    milestone: '6-5 Bulan Sebelumnya',
    nameIN: 'Mengurasi jenis suvenir pernikahan (souvenir) unik yang bermanfaat untuk para tamu.',
    nameEN: 'Curate and order unique, useful wedding souvenirs for guests.'
  },
  {
    id: 't-16',
    tab: 'timeline',
    category: 'Panitia',
    milestone: '6-5 Bulan Sebelumnya',
    nameIN: 'Membentuk susunan panitia keluarga & menunjuk koordinator utama tiap pos.',
    nameEN: 'Form a family-run wedding committee and assign lead coordinators.'
  },
  {
    id: 't-17',
    tab: 'timeline',
    category: 'KUA',
    milestone: '4-3 Bulan Sebelumnya',
    nameIN: 'Menyiapkan berkas administrasi & menghubungi catatan sipil / Kantor Urusan Agama (KUA).',
    nameEN: 'Contact KUA/Civil Registry and prepare mandatory marriage documentation files.'
  },
  {
    id: 't-18',
    tab: 'timeline',
    category: 'Kesehatan',
    milestone: '4-3 Bulan Sebelumnya',
    nameIN: 'Melakukan skrining kesehatan pra-nikah (pre-marital medical checkup) komprehensif.',
    nameEN: 'Undergo a comprehensive pre-marital medical checkup with your partner.'
  },
  {
    id: 't-19',
    tab: 'timeline',
    category: 'Undangan',
    milestone: '4-3 Bulan Sebelumnya',
    nameIN: 'Menyusun naskah visual & mencetak/membuat kartu undangan fisik serta digital.',
    nameEN: 'Design, write copy, and order printed and paperless digital invitations.'
  },
  {
    id: 't-20',
    tab: 'timeline',
    category: 'Seserahan',
    milestone: '4-3 Bulan Sebelumnya',
    nameIN: 'Memulai perburuan barang hantaran dan perlengkapan nampan seserahan adat.',
    nameEN: 'Begin purchasing components for the traditional dowry trays (seserahan).'
  },
  {
    id: 't-21',
    tab: 'timeline',
    category: 'Makeup',
    milestone: '2 Bulan Sebelumnya',
    nameIN: 'Menjadwalkan uji coba rias wajah (makeup trial) dan tata rambut (hairdo).',
    nameEN: 'Schedule hair-styling and makeup trial run with your primary artist.'
  },
  {
    id: 't-22',
    tab: 'timeline',
    category: 'Pre-Wedding',
    milestone: '2 Bulan Sebelumnya',
    nameIN: 'Mengeksekusi sesi pemotretan pre-wedding bertema indoor atau outdoor.',
    nameEN: 'Execute the scheduled pre-wedding outdoor/studio photo and video shoot.'
  },
  {
    id: 't-23',
    tab: 'timeline',
    category: 'Busana Wanita',
    milestone: '2 Bulan Sebelumnya',
    nameIN: 'Melakukan fitting gaun pengantin tahap akhir untuk penyesuaian tubuh.',
    nameEN: 'Attend the final fitting of the bridal dress to ensure perfect posture-fit.'
  },
  {
    id: 't-24',
    tab: 'timeline',
    category: 'Busana Pria',
    milestone: '2 Bulan Sebelumnya',
    nameIN: 'Mengambil jas pria yang telah selesai diproduksi dan dicuci kering.',
    nameEN: "Pick up the groom's finished suit and store it safely in a garment bag."
  },
  {
    id: 't-25',
    tab: 'timeline',
    category: 'Bunga',
    milestone: '2 Bulan Sebelumnya',
    nameIN: 'Menentukan rangkaian bunga segar pengantin (hand bouquet) yang serasi.',
    nameEN: 'Decide the palette and flowers for the bridal hand bouquet.'
  },
  {
    id: 't-26',
    tab: 'timeline',
    category: 'Undangan',
    milestone: '1 Bulan Sebelumnya',
    nameIN: 'Mengambil cetak kartu undangan & mulai menyebarkannya ke sanak saudara.',
    nameEN: 'Retrieve printed wedding invitations and start mailing/hand-delivering them.'
  },
  {
    id: 't-27',
    tab: 'timeline',
    category: 'Vendor',
    milestone: '1 Bulan Sebelumnya',
    nameIN: 'Melakukan koordinasi ulang (re-check) akhir terkait kuota & rundown dengan seluruh vendor.',
    nameEN: 'Conduct a comprehensive final re-check with all booked wedding vendors.'
  },
  {
    id: 't-28',
    tab: 'timeline',
    category: 'Gladi Resik',
    milestone: '7 Hari Sebelumnya',
    nameIN: 'Menggelar gladi resik acara (technical meeting) di venue bersama panitia & WO.',
    nameEN: 'Conduct the final technical meeting and rehearsal run-through at the venue.'
  },
  {
    id: 't-29',
    tab: 'timeline',
    category: 'Kesehatan',
    milestone: '7 Hari Sebelumnya',
    nameIN: 'Meluangkan waktu khusus untuk rileksasi, pijat, atau me-time guna meminimalisir stres.',
    nameEN: 'Set aside personal time to rest, enjoy a spa day, and relieve high stress.'
  },
  {
    id: 't-30',
    tab: 'timeline',
    category: 'Kesehatan',
    milestone: '7 Hari Sebelumnya',
    nameIN: 'Mengonsumsi multivitamin tambahan, suplemen stamina, & memperbanyak tidur.',
    nameEN: 'Take health supplements, boost immunity, and maintain 8 hours of sleep.'
  },
  {
    id: 't-31',
    tab: 'timeline',
    category: 'Perawatan',
    milestone: '1 Hari Sebelumnya',
    nameIN: 'Menyelesaikan rangkaian perawatan fisik pre-wedding lengkap (lulur, spa, & kuku).',
    nameEN: 'Complete final-stage pre-wedding pampering treatments (facial, scrub, manicure).'
  },
  {
    id: 't-32',
    tab: 'timeline',
    category: 'Kesehatan',
    milestone: '1 Hari Sebelumnya',
    nameIN: 'Mengurangi aktivitas berat, mengonsumsi makanan higienis, dan tidur lebih awal.',
    nameEN: 'Decompress, eat clean meals, avoid strenuous activity, and sleep early.'
  },

  // ==========================================
  // TAB 2: LAMARAN TRADISIONAL (LAMARAN)
  // ==========================================
  {
    id: 'l-1',
    tab: 'lamaran',
    category: 'Venue',
    milestone: 'Juli 2026',
    nameIN: 'Mensurvei kapasitas area & menentukan lokasi lamaran (rumah/restoran/gedung).',
    nameEN: 'Survey room capacity and lock in the location (home, restaurant, or hall).'
  },
  {
    id: 'l-2',
    tab: 'lamaran',
    category: 'Venue',
    milestone: 'Juli 2026',
    nameIN: 'Mengaudit ketersediaan daya tampung listrik lokasi demi kestabilan pencahayaan & sound.',
    nameEN: 'Audit the venue electrical load capacity for decoration lights and PA systems.'
  },
  {
    id: 'l-3',
    tab: 'lamaran',
    category: 'Venue',
    milestone: 'Juli 2026',
    nameIN: 'Memastikan kualitas & ketersediaan mikrofon serta sound system internal di lokasi.',
    nameEN: 'Confirm availability of high-quality microphones and internal sound systems.'
  },
  {
    id: 'l-4',
    tab: 'lamaran',
    category: 'Hair & Makeup',
    milestone: 'Juli 2026',
    nameIN: 'Memesan MUA & hair stylist profesional berpengalaman khusus untuk lamaran.',
    nameEN: 'Book a professional engagement-specialist makeup artist & hair stylist.'
  },
  {
    id: 'l-5',
    tab: 'lamaran',
    category: 'Undangan',
    milestone: 'Juli 2026',
    nameIN: 'Membicarakan kesepakatan jumlah tamu keluarga dekat & penentuan tanggal acara.',
    nameEN: 'Discuss and agree on close family guest size and set the firm engagement date.'
  },
  {
    id: 'l-6',
    tab: 'lamaran',
    category: 'Wedding Planner',
    milestone: 'Juli 2026',
    nameIN: 'Mengkaji opsi perlunya bantuan Wedding Organizer (WO) skala kecil untuk koordinasi hari-H.',
    nameEN: 'Evaluate the necessity of a micro Wedding Organizer team to coordinate the day.'
  },
  {
    id: 'l-7',
    tab: 'lamaran',
    category: 'Venue',
    milestone: 'Agustus 2026',
    nameIN: 'Mengunci pemesanan (booking) lokasi lamaran terpilih dengan melunasi DP.',
    nameEN: 'Lock in the selected engagement venue and settle the booking deposit.'
  },
  {
    id: 'l-8',
    tab: 'lamaran',
    category: 'Aksesori Pernikahan',
    milestone: 'Agustus 2026',
    nameIN: 'Mengonsep tema hantaran lamaran / seserahan adat (warna, hiasan, wadah).',
    nameEN: 'Formulate the theme and color scheme for traditional engagement gift trays.'
  },
  {
    id: 'l-9',
    tab: 'lamaran',
    category: 'Aksesori Pernikahan',
    milestone: 'Agustus 2026',
    nameIN: 'Menentukan kuantitas box hantaran seserahan yang akan dihias & diserahkan.',
    nameEN: 'Determine the exact number of gift trays to be decorated and exchanged.'
  },
  {
    id: 'l-10',
    tab: 'lamaran',
    category: 'Aksesori Pernikahan',
    milestone: 'Agustus 2026',
    nameIN: 'Menyewa/membeli box hantaran berkaca akrilik estetik & kelengkapan hiasannya.',
    nameEN: 'Rent or purchase modern acrylic gift boxes and decorative dry floral fillings.'
  },
  {
    id: 'l-11',
    tab: 'lamaran',
    category: 'Wedding Planner',
    milestone: 'Agustus 2026',
    nameIN: 'Mensurvei reputasi tim Wedding Organizer untuk penyelarasan acara lamaran.',
    nameEN: 'Survey and vet reputable Wedding Organizers who manage intimate ceremonies.'
  },
  {
    id: 'l-12',
    tab: 'lamaran',
    category: 'Katering',
    milestone: 'September 2026',
    nameIN: 'Menentukan menu katering & melakukan pembayaran awal vendor katering lamaran.',
    nameEN: 'Decide the catering menu and pay the deposit for the engagement feast.'
  },
  {
    id: 'l-13',
    tab: 'lamaran',
    category: 'Katering',
    milestone: 'September 2026',
    nameIN: 'Megoordinasikan ketersediaan meja buffet, gubukan, dan pencantuman daftar menu hidangan.',
    nameEN: 'Coordinate tables, food stall layouts, and print the designated menu sheets.'
  },
  {
    id: 'l-14',
    tab: 'lamaran',
    category: 'Dekorasi & Pencahayaan',
    milestone: 'September 2026',
    nameIN: 'Bandingkan pricelist dekorator lamaran & sesuaikan berdasarkan layout venue.',
    nameEN: 'Compare pricing and sketches of engagement decorators matching the floor plan.'
  },
  {
    id: 'l-15',
    tab: 'lamaran',
    category: 'Dekorasi & Pencahayaan',
    milestone: 'September 2026',
    nameIN: 'Pastikan apakah dekorator menyediakan lampu sorot pencahayaan memadai sesuai daya listrik.',
    nameEN: 'Verify if decorator-provided spotlights comply with the venue electrical load.'
  },
  {
    id: 'l-16',
    tab: 'lamaran',
    category: 'Gaun & Busana Pengantin',
    milestone: 'September 2026',
    nameIN: 'Memesan kebaya custom, gaun modern, atau busana lamaran pengantin wanita.',
    nameEN: 'Order or custom-design the engagement dress/kebaya for the bride-to-be.'
  },
  {
    id: 'l-17',
    tab: 'lamaran',
    category: 'Fotografi',
    milestone: 'September 2026',
    nameIN: 'Memesan fotografer profesional berspesialisasi momen lamaran/intimate event.',
    nameEN: 'Hire a professional photographer specializing in small intimate events.'
  },
  {
    id: 'l-18',
    tab: 'lamaran',
    category: 'Videografi',
    milestone: 'September 2026',
    nameIN: 'Memesan videografer untuk mendokumentasikan klip sinematik prosesi lamaran.',
    nameEN: 'Hire a videographer to capture dynamic highlight reels of the ceremony.'
  },
  {
    id: 'l-19',
    tab: 'lamaran',
    category: 'Wedding Planner',
    milestone: 'September 2026',
    nameIN: 'Memfinalisasi kontrak dengan Wedding Organizer untuk kelancaran hari-H.',
    nameEN: 'Settle the service agreement and contract with the Wedding Organizer.'
  },
  {
    id: 'l-20',
    tab: 'lamaran',
    category: 'Dekorasi & Pencahayaan',
    milestone: 'Oktober 2026',
    nameIN: 'Mengunci pemesanan dekorasi lamaran dengan konsep backdrop bunga/daun segar.',
    nameEN: 'Lock in the decorator with the chosen floral backdrop/wood theme.'
  },
  {
    id: 'l-21',
    tab: 'lamaran',
    category: 'Wedding Planner',
    milestone: 'November 2026',
    nameIN: 'Menyusun rincian rundown acara lamaran lalu mendistribusikannya ke seluruh vendor.',
    nameEN: 'Draft a detailed minute-by-minute rundown and send it to all active vendors.'
  },
  {
    id: 'l-22',
    tab: 'lamaran',
    category: 'Busana Pria',
    milestone: 'Desember 2026',
    nameIN: 'Memesan kemeja batik tulis sutra, jas kasual, atau busana pria untuk lamaran.',
    nameEN: 'Purchase or tailor a batik shirt, casual suit, or custom attire for the groom.'
  },
  {
    id: 'l-23',
    tab: 'lamaran',
    category: 'Aksesori Pernikahan',
    milestone: 'Desember 2026',
    nameIN: 'Membeli seluruh kebutuhan isi box seserahan (skincare, kosmetik, baju, dll).',
    nameEN: 'Buy all the items to populate the gift trays (personal care, apparel, etc.).'
  },
  {
    id: 'l-24',
    tab: 'lamaran',
    category: 'Entertainment (MC)',
    milestone: 'Desember 2026',
    nameIN: 'Memesan MC yang pandai memimpin jalannya tata laksana adat lamaran kekeluargaan.',
    nameEN: 'Book an experienced MC fluent in local custom engagement guidelines.'
  },
  {
    id: 'l-25',
    tab: 'lamaran',
    category: 'Undangan',
    milestone: 'Desember 2026',
    nameIN: 'Membuat desain kartu undangan acara lamaran (fisik atau e-invitation digital).',
    nameEN: 'Design the invitation template for the engagement (digital or physical).'
  },
  {
    id: 'l-26',
    tab: 'lamaran',
    category: 'Suvenir & Hadiah',
    milestone: 'Februari 2027',
    nameIN: 'Menentukan jumlah hampers katering / bingkisan untuk dibagikan kepada keluarga pria.',
    nameEN: 'Determine the quantity of feedback hampers/souvenirs for the groom’s family.'
  },
  {
    id: 'l-27',
    tab: 'lamaran',
    category: 'Entertainment (MC)',
    milestone: 'Februari 2027',
    nameIN: 'Menyerahkan salinan rundown & poin-poin penting sambutan perwakilan keluarga kepada MC.',
    nameEN: 'Hand over the rundown and family representative names to the MC.'
  },
  {
    id: 'l-28',
    tab: 'lamaran',
    category: 'Entertainment (Musik)',
    milestone: 'Februari 2027',
    nameIN: 'Menyeleksi daftar lagu latar belakang instrumental pengisi kehangatan acara lamaran.',
    nameEN: 'Curate a soothing background playlist of romantic acoustic/instrumentals.'
  },
  {
    id: 'l-29',
    tab: 'lamaran',
    category: 'Katering',
    milestone: 'Maret 2027',
    nameIN: 'Memilih menu hidangan prasmanan final & camilan gubuk (stall) pendukung.',
    nameEN: 'Settle on the final buffet dishes and side food stalls.'
  },
  {
    id: 'l-30',
    tab: 'lamaran',
    category: 'Katering',
    milestone: 'Maret 2027',
    nameIN: 'Menjadwalkan tes food tasting katering lamaran bersama perwakilan keluarga dekat.',
    nameEN: 'Schedule food tasting sessions with parents or key family members.'
  },
  {
    id: 'l-31',
    tab: 'lamaran',
    category: 'Hair & Makeup',
    milestone: 'Maret 2027',
    nameIN: 'Melakukan uji riasan (makeup trial) agar selaras dengan skema warna kebaya lamaran.',
    nameEN: 'Perform a makeup trial session to match the kebaya color scheme.'
  },
  {
    id: 'l-32',
    tab: 'lamaran',
    category: 'Suvenir & Hadiah',
    milestone: 'Maret 2027',
    nameIN: 'Memesan pembuatan suvenir lamaran yang berbobot ringkas & bermanfaat.',
    nameEN: 'Order the finalized souvenirs or packaged boxes from the vendor.'
  },
  {
    id: 'l-33',
    tab: 'lamaran',
    category: 'Entertainment (Musik)',
    milestone: 'Maret 2027',
    nameIN: 'Memesan akustik musik lengkap dengan sound system mumpuni (genset bila butuh).',
    nameEN: 'Book an acoustic group with sound hardware and power supplies if needed.'
  },
  {
    id: 'l-34',
    tab: 'lamaran',
    category: 'Gaun & Busana Pengantin',
    milestone: 'Mei 2027',
    nameIN: 'Melakukan fitting kebaya lamaran wanita tahap akhir untuk penyesuaian tubuh.',
    nameEN: 'Attend the final fitting of the bridal engagement dress/kebaya.'
  },
  {
    id: 'l-35',
    tab: 'lamaran',
    category: 'Gaun & Busana Pengantin',
    milestone: 'Mei 2027',
    nameIN: 'Memastikan apakah penjahit/vendor menyediakan manekin pajang jika busana ingin difoto detail.',
    nameEN: 'Confirm if garment hangers/mannequins are supplied for detail photos.'
  },
  {
    id: 'l-36',
    tab: 'lamaran',
    category: 'Busana Pria',
    milestone: 'Mei 2027',
    nameIN: 'Melakukan fitting kemeja batik tulis/jas formal pria tahap akhir.',
    nameEN: 'Attend the final fitting of the groom’s engagement suit/batik.'
  },
  {
    id: 'l-37',
    tab: 'lamaran',
    category: 'Undangan',
    milestone: 'Mei 2027',
    nameIN: 'Menyebarkan undangan digital lamaran ke kerabat dekat & sanak keluarga.',
    nameEN: 'Distribute digital e-invitations to relative WhatsApp groups.'
  },

  // ==========================================
  // TAB 3: PRE-WEDDING PHOTO/VIDEO (PREWEDDING)
  // ==========================================
  {
    id: 'p-1',
    tab: 'prewedding',
    category: 'Gaun & Busana Pengantin',
    milestone: 'Agustus 2026',
    nameIN: 'Menyewa atau merancang khusus konsep busana yang serasi untuk sesi pre-wedding.',
    nameEN: 'Rent or draft a cohesive outfit concept matching the pre-wedding aesthetic.'
  },
  {
    id: 'p-2',
    tab: 'prewedding',
    category: 'Fotografi',
    milestone: 'Agustus 2026',
    nameIN: 'Menentukan lokasi studio foto estetik atau spot outdoor impian untuk pemotretan.',
    nameEN: 'Determine the specific studio rental or outdoor location for the shoot.'
  },
  {
    id: 'p-3',
    tab: 'prewedding',
    category: 'Fotografi',
    milestone: 'Agustus 2026',
    nameIN: 'Memesan fotografer bertalenta khusus dalam potret romantis/visual mood pre-wedding.',
    nameEN: 'Lock in a talented photographer whose portfolio aligns with your style.'
  },
  {
    id: 'p-4',
    tab: 'prewedding',
    category: 'Videografi',
    milestone: 'Agustus 2026',
    nameIN: 'Memesan videografer untuk merekam klip pre-wedding sinematik & klip Save-the-Date.',
    nameEN: 'Book a videographer for cinematic pre-wedding clips & Save-The-Date reels.'
  },
  {
    id: 'p-5',
    tab: 'prewedding',
    category: 'Hair & Makeup',
    milestone: 'September 2026',
    nameIN: 'Memesan jasa Makeup Artist (MUA) tepercaya yang andal merias wajah bertema outdoor.',
    nameEN: 'Book a skilled makeup artist who handles touch-ups for outdoor sets.'
  },
  {
    id: 'p-6',
    tab: 'prewedding',
    category: 'Busana Pria',
    milestone: 'Oktober 2026',
    nameIN: 'Sewa atau siapkan setelan jas kasual, celana chino, & kemeja serasi untuk pengantin pria.',
    nameEN: 'Rent or prepare smart casual suits, chinos, and shirts for the groom.'
  },

  // ==========================================
  // TAB 4: PENGAJIAN (PENGAJIAN)
  // ==========================================
  {
    id: 'g-1',
    tab: 'pengajian',
    category: 'Venue',
    milestone: 'Juli 2026',
    nameIN: 'Mensurvei kediaman pribadi atau masjid terdekat sebagai tempat pelaksanaan pengajian.',
    nameEN: 'Survey the family residence or community mosque for the prayer session.'
  },
  {
    id: 'g-2',
    tab: 'pengajian',
    category: 'Venue',
    milestone: 'Juli 2026',
    nameIN: 'Memesan dekorasi panggung minimalis khidmat bernuansa Islami / serba putih.',
    nameEN: 'Settle on a clean, serene, all-white Islamic-themed backdrop decoration.'
  },
  {
    id: 'g-3',
    tab: 'pengajian',
    category: 'Venue',
    milestone: 'Juli 2026',
    nameIN: 'Menguji ketersediaan daya tampung listrik rumah untuk lampu tambahan & sound.',
    nameEN: 'Test the domestic power meter load to handle auxiliary lighting and microphones.'
  },
  {
    id: 'g-4',
    tab: 'pengajian',
    category: 'Venue',
    milestone: 'Juli 2026',
    nameIN: 'Memastikan fungsionalitas pengeras suara (sound system) agar pembacaan ayat terdengar jernih.',
    nameEN: 'Confirm microphones and audio monitors reproduce prayer audios crisply.'
  },
  {
    id: 'g-5',
    tab: 'pengajian',
    category: 'Hair & Makeup',
    milestone: 'Juli 2026',
    nameIN: 'Menjadwalkan penata rias (MUA) untuk merias wajah secara anggun, kalem, dan natural.',
    nameEN: 'Book a makeup artist to create a soft, natural, modest look.'
  },
  {
    id: 'g-6',
    tab: 'pengajian',
    category: 'Undangan',
    milestone: 'Juli 2026',
    nameIN: 'Tentukan kuota & jumlah jamaah, tetangga, serta sanak keluarga dekat yang diundang.',
    nameEN: 'Determine the exact headcounts of neighbors, family members, and attendees.'
  },
  {
    id: 'g-7',
    tab: 'pengajian',
    category: 'Wedding Planner',
    milestone: 'Juli 2026',
    nameIN: 'Tentukan apakah Anda membutuhkan Wedding Organizer (WO) lokal untuk pengajian.',
    nameEN: 'Decide if you require local planner support to oversee guest seating.'
  },
  {
    id: 'g-8',
    tab: 'pengajian',
    category: 'Venue',
    milestone: 'Agustus 2026',
    nameIN: 'Tentukan pembagian tata letak area jamaah pria & wanita agar tertata tertib.',
    nameEN: 'Determine the gender-segregated seating arrangements in the home/hall.'
  },
  {
    id: 'g-9',
    tab: 'pengajian',
    category: 'Suvenir & Hadiah',
    milestone: 'Agustus 2026',
    nameIN: 'Tentukan jumlah suvenir buku doa / sajadah / tasbih yang dibutuhkan.',
    nameEN: 'Calculate the volume of custom prayer books, mats, and rosaries needed.'
  },
  {
    id: 'g-10',
    tab: 'pengajian',
    category: 'Wedding Planner',
    milestone: 'Agustus 2026',
    nameIN: 'Lakukan survei untuk menentukan tim Wedding Organizer yang akan membantu hari-H.',
    nameEN: 'Shortlist and contract a local coordinator with experience in religious events.'
  },
  {
    id: 'g-11',
    tab: 'pengajian',
    category: 'Katering',
    milestone: 'September 2026',
    nameIN: 'Buat jadwal food tasting katering & tentukan menu nasi boks praktis/prasmanan.',
    nameEN: 'Schedule catering tests and decide between boxed rice options and small buffets.'
  },
  {
    id: 'g-12',
    tab: 'pengajian',
    category: 'Dekorasi & Pencahayaan',
    milestone: 'September 2026',
    nameIN: 'Mensurvei & membandingkan penawaran harga dekorator pengajian berkonsep lesehan.',
    nameEN: 'Compare layouts of carpeted, floor-seating backdrops for prayers.'
  },
  {
    id: 'g-13',
    tab: 'pengajian',
    category: 'Dekorasi & Pencahayaan',
    milestone: 'September 2026',
    nameIN: 'Pastikan kesiapan lampu penerangan soft agar suasana foto terkesan hangat dan khidmat.',
    nameEN: 'Verify warm ambient lighting is ready for capturing emotional moments.'
  },
  {
    id: 'g-14',
    tab: 'pengajian',
    category: 'Gaun & Busana Pengantin',
    milestone: 'September 2026',
    nameIN: 'Memesan gamis syar’i, kaftan, atau busana muslimah senada untuk pengantin wanita.',
    nameEN: 'Order or tailor an elegant, modest dress or custom abaya for the bride.'
  },
  {
    id: 'g-15',
    tab: 'pengajian',
    category: 'Fotografi',
    milestone: 'September 2026',
    nameIN: 'Pesan fotografer berpengalaman mendokumentasikan keharuan saat prosesi sungkeman.',
    nameEN: 'Book a photographer skilled in capturing candid, tearful parent sungkeman.'
  },
  {
    id: 'g-16',
    tab: 'pengajian',
    category: 'Videografi',
    milestone: 'September 2026',
    nameIN: 'Pesan videografer untuk mendokumentasikan lantunan selawat & doa restu nikah.',
    nameEN: 'Book a videographer to record the prayers and parent emotional speech clips.'
  },
  {
    id: 'g-17',
    tab: 'pengajian',
    category: 'Wedding Planner',
    milestone: 'September 2026',
    nameIN: 'Pesan jasa tim Wedding Organizer pelaksana pengajian keluarga secara matang.',
    nameEN: 'Finalize the coordinator service agreement for the pre-wedding prayer.'
  },
  {
    id: 'g-18',
    tab: 'pengajian',
    category: 'Dekorasi & Pencahayaan',
    milestone: 'Oktober 2026',
    nameIN: 'Pesan dekorator & sewa karpet/alas duduk lesehan tebal berkualitas tinggi.',
    nameEN: 'Confirm decorator booking and carpet rentals for seating guests comfortably.'
  },
  {
    id: 'g-19',
    tab: 'pengajian',
    category: 'Wedding Planner',
    milestone: 'November 2026',
    nameIN: 'Buat & bagikan rundown pengajian beserta lembar teks izin nikah kepada keluarga.',
    nameEN: 'Draft the timeline and print parents’ blessing and permission script sheets.'
  },
  {
    id: 'g-20',
    tab: 'pengajian',
    category: 'Busana Pria',
    milestone: 'Desember 2026',
    nameIN: 'Pesan busana gamis pria, baju koko premium, atau kurta untuk pengantin pria.',
    nameEN: 'Order premium custom koko shirts, kurtas, or clean white garments for the groom.'
  },
  {
    id: 'g-21',
    tab: 'pengajian',
    category: 'Wedding Planner',
    milestone: 'Desember 2026',
    nameIN: 'Pesan/undang tim selawat, pembaca Al-Quran (Qori), atau penceramah terkemuka.',
    nameEN: 'Invite or hire a Qori reciter, prayer guides, or a small religious music band.'
  },
  {
    id: 'g-22',
    tab: 'pengajian',
    category: 'Suvenir & Hadiah',
    milestone: 'Desember 2026',
    nameIN: 'Pesan suvenir pengajian berupa sajadah lipat, tasbih digital, atau mukena.',
    nameEN: 'Place orders for prayer rugs, digital rosaries, or packaged tasbih favors.'
  },
  {
    id: 'g-23',
    tab: 'pengajian',
    category: 'Entertainment (MC)',
    milestone: 'Desember 2026',
    nameIN: 'Pesan MC yang cakap memandu susunan acara keagamaan & prosesi sungkeman.',
    nameEN: 'Book a professional MC experienced in handling quiet, solemn religious flows.'
  },
  {
    id: 'g-24',
    tab: 'pengajian',
    category: 'Undangan',
    milestone: 'Desember 2026',
    nameIN: 'Buat desain grafis undangan khusus acara pengajian keluarga & jamaah masjid.',
    nameEN: 'Draft the graphical layouts for the private family prayer invites.'
  },
  {
    id: 'g-25',
    tab: 'pengajian',
    category: 'Undangan',
    milestone: 'Desember 2026',
    nameIN: 'Pesan buku yasin atau buku panduan doa selawat kustom berukir nama pengantin.',
    nameEN: 'Settle order details for custom printed prayer books or booklet pamphlets.'
  },
  {
    id: 'g-26',
    tab: 'pengajian',
    category: 'Katering',
    milestone: 'Maret 2027',
    nameIN: 'Pesan vendor katering tepercaya untuk menyiapkan prasmanan hidangan keluarga.',
    nameEN: 'Settle contract with the catering vendor to serve guests right after prayers.'
  },
  {
    id: 'g-27',
    tab: 'pengajian',
    category: 'Katering',
    milestone: 'Maret 2027',
    nameIN: 'Pilih varian menu makanan prasmanan khas nusantara/tradisional kesukaan keluarga.',
    nameEN: 'Select traditional buffet flavors and Indonesian dishes liked by parents.'
  },
  {
    id: 'g-28',
    tab: 'pengajian',
    category: 'Entertainment (MC)',
    milestone: 'Maret 2027',
    nameIN: 'Berikan draf teks silsilah keluarga & teks doa sungkeman kepada MC pengajian.',
    nameEN: 'Submit family representative names and the sungkeman script draft to your MC.'
  },
  {
    id: 'g-29',
    tab: 'pengajian',
    category: 'Gaun & Busana Pengantin',
    milestone: 'Mei 2027',
    nameIN: 'Lakukan fitting terakhir busana gamis/kaftan pengajian wanita.',
    nameEN: 'Perform the final fitting of the bride’s custom white dress or kaftan.'
  },
  {
    id: 'g-30',
    tab: 'pengajian',
    category: 'Gaun & Busana Pengantin',
    milestone: 'Mei 2027',
    nameIN: 'Pastikan kesiapan gantungan baju estetis & manekin jika dibutuhkan fotografer.',
    nameEN: 'Confirm clean hangers and mannequin gear are packed for pre-shoot photography.'
  },
  {
    id: 'g-31',
    tab: 'pengajian',
    category: 'Busana Pria',
    milestone: 'Mei 2027',
    nameIN: 'Lakukan fitting terakhir baju koko/gamis muslim pria.',
    nameEN: 'Perform the final fitting of the groom’s white koko/suit.'
  },
  {
    id: 'g-32',
    tab: 'pengajian',
    category: 'Undangan',
    milestone: 'Mei 2027',
    nameIN: 'Kirimkan lembar undangan pengajian ke para tetangga & jamaah selawat.',
    nameEN: 'Deliver physical or WhatsApp invitations to local prayer group attendees.'
  },

  // ==========================================
  // TAB 5: AKAD NIKAH (AKAD)
  // ==========================================
  {
    id: 'a-1',
    tab: 'akad',
    category: 'Venue',
    milestone: 'Juli 2026',
    nameIN: 'Cari & pilih masjid raya, gedung serbaguna, atau spot outdoor sakral untuk akad.',
    nameEN: 'Locate and inspect the mosque, civil hall, or romantic outdoor spot for the vow.'
  },
  {
    id: 'a-2',
    tab: 'akad',
    category: 'Venue',
    milestone: 'Juli 2026',
    nameIN: 'Cek cadangan kapasitas listrik & kemungkinan sewa generator genset di lokasi akad.',
    nameEN: 'Verify electric capabilities and outline generator/genset needs at the venue.'
  },
  {
    id: 'a-3',
    tab: 'akad',
    category: 'Venue',
    milestone: 'Juli 2026',
    nameIN: 'Cek fungsionalitas & kejernihan sound system masjid demi kelancaran lafal ijab.',
    nameEN: 'Test mosque acoustics and microphones to guarantee clear vowel recordings.'
  },
  {
    id: 'a-4',
    tab: 'akad',
    category: 'Katering',
    milestone: 'Juli 2026',
    nameIN: 'Pesan vendor katering penyedia paket prasmanan pasca-akad nikah.',
    nameEN: 'Reserve the catering service provider for the post-ceremony luncheon buffet.'
  },
  {
    id: 'a-5',
    tab: 'akad',
    category: 'Hair & Makeup',
    milestone: 'Juli 2026',
    nameIN: 'Pesan MUA khusus pengantin tradisional (Paes/Adat Jawa-Sunda dll) yang berlisensi.',
    nameEN: 'Secure a licensed traditional makeup artist for specialized bridal styling.'
  },
  {
    id: 'a-6',
    tab: 'akad',
    category: 'Hair & Makeup',
    milestone: 'Juli 2026',
    nameIN: 'Siapkan & pesan penata rias (MUA) tambahan khusus merias keluarga besar.',
    nameEN: 'Arrange supporting makeup services for immediate parents and closest aunts.'
  },
  {
    id: 'a-7',
    tab: 'akad',
    category: 'Wedding Planner',
    milestone: 'Juli 2026',
    nameIN: 'Atur rapat perdana dengan wedding planner/WO untuk merancang draf dasar acara.',
    nameEN: 'Schedule an introductory meeting with the planners to map out the ceremony draft.'
  },
  {
    id: 'a-8',
    tab: 'akad',
    category: 'Undangan',
    milestone: 'Juli 2026',
    nameIN: 'Tentukan kuota saksi akad, pejabat KUA, serta tamu undangan intim yang hadir.',
    nameEN: 'Establish guest lists containing close family, witnesses, and KUA officers.'
  },
  {
    id: 'a-9',
    tab: 'akad',
    category: 'Venue',
    milestone: 'Agustus 2026',
    nameIN: 'Pesan & bayar uang muka sewa masjid / lokasi akad nikah yang disepakati.',
    nameEN: 'Secure the booking and deposit for the mosque or designated vows venue.'
  },
  {
    id: 'a-10',
    tab: 'akad',
    category: 'Venue',
    milestone: 'Agustus 2026',
    nameIN: 'Siapkan dokumen administrasi KUA (N1-N4, surat rekomendasi, fotokopi data diri).',
    nameEN: 'Gather and prepare civil KUA paperwork (N1-N4, recommendation notes, IDs).'
  },
  {
    id: 'a-11',
    tab: 'akad',
    category: 'Wedding Planner',
    milestone: 'Agustus 2026',
    nameIN: 'Pesan tim pembawa adat / cucuk lampah adat jika bernuansa upacara tradisional.',
    nameEN: 'Book traditional guides or adat master-performers for cultural processions.'
  },
  {
    id: 'a-12',
    tab: 'akad',
    category: 'Dekorasi & Pencahayaan',
    milestone: 'Agustus 2026',
    nameIN: 'Lakukan survei & bandingkan rancangan dekorasi pelaminan minimalis-sakral.',
    nameEN: 'Compare layouts of minimalistic, elegant backdrop designs for the altar.'
  },
  {
    id: 'a-13',
    tab: 'akad',
    category: 'Dekorasi & Pencahayaan',
    milestone: 'Agustus 2026',
    nameIN: 'Pastikan kesiapan sewa lampu sorot meja akad utama & pencahayaan sekitar.',
    nameEN: 'Ensure soft spotlighting is arranged for the main solemnization signing table.'
  },
  {
    id: 'a-14',
    tab: 'akad',
    category: 'Fotografi',
    milestone: 'Agustus 2026',
    nameIN: 'Tentukan & kunci jasa fotografer yang peka menangkap momen sakral lafal ijab kabul.',
    nameEN: 'Select and hire a photographer skilled in documentative ceremony shoots.'
  },
  {
    id: 'a-15',
    tab: 'akad',
    category: 'Videografi',
    milestone: 'Agustus 2026',
    nameIN: 'Tentukan jasa videografi profesional untuk merekam klip akad beresolusi tinggi.',
    nameEN: 'Hire videographer specialized in recording vows in high-definition quality.'
  },
  {
    id: 'a-16',
    tab: 'akad',
    category: 'Videografi',
    milestone: 'Agustus 2026',
    nameIN: 'Tentukan opsi penambahan paket live streaming agar kerabat jauh bisa menonton online.',
    nameEN: 'Optionally request a live-broadcast setup for distant relatives to watch.'
  },
  {
    id: 'a-17',
    tab: 'akad',
    category: 'Wedding Planner',
    milestone: 'Agustus 2026',
    nameIN: 'Pesan jasa koordinator Wedding Planner (paket hari-H / Day-of Organizer).',
    nameEN: 'Hire a dedicated Day-of Wedding Coordinator to manage operational details.'
  },
  {
    id: 'a-18',
    tab: 'akad',
    category: 'Dekorasi & Pencahayaan',
    milestone: 'September 2026',
    nameIN: 'Mengunci pemesanan dekorator akad nikah beserta layout meja akad utama.',
    nameEN: 'Book the wedding decorator and lock in the main altar setup.'
  },
  {
    id: 'a-19',
    tab: 'akad',
    category: 'Bunga',
    milestone: 'September 2026',
    nameIN: 'Pesan pasokan bunga segar melati / mawar untuk kelengkapan riasan rambut pengantin.',
    nameEN: 'Order fresh jasmine/rose strands required for traditional hair decoration.'
  },
  {
    id: 'a-20',
    tab: 'akad',
    category: 'Gaun & Busana Pengantin',
    milestone: 'September 2026',
    nameIN: 'Pesan pengerjaan kebaya akad kustom bertema putih suci ke desainer pilihan.',
    nameEN: 'Order a custom-tailored pristine white bridal kebaya from your designer.'
  },
  {
    id: 'a-21',
    tab: 'akad',
    category: 'Gaun & Busana Pengantin',
    milestone: 'September 2026',
    nameIN: 'Siapkan kebaya seragam kain jarik batik untuk ibu & ibu mertua.',
    nameEN: 'Prepare matching traditional fabrics or kebaya outfits for both mothers.'
  },
  {
    id: 'a-22',
    tab: 'akad',
    category: 'Gaun & Busana Pengantin',
    milestone: 'September 2026',
    nameIN: 'Siapkan kain seragam batik / kebaya seragam khusus untuk para bridesmaid.',
    nameEN: 'Distribute color-coordinated kebaya/batik dress fabrics to bridesmaids.'
  },
  {
    id: 'a-23',
    tab: 'akad',
    category: 'Gaun & Busana Pengantin',
    milestone: 'September 2026',
    nameIN: 'Siapkan kain adat / seragam cadangan untuk perwakilan keluarga besar wanita.',
    nameEN: 'Reserve several spare matching garments for extended female relatives.'
  },
  {
    id: 'a-24',
    tab: 'akad',
    category: 'Busana Pria',
    milestone: 'September 2026',
    nameIN: 'Pesan beskap adat pengantin pria lengkap dengan kain jarik senada & blangkon.',
    nameEN: 'Order traditional beskap for the groom, with matching batiks and blangkon.'
  },
  {
    id: 'a-25',
    tab: 'akad',
    category: 'Busana Pria',
    milestone: 'September 2026',
    nameIN: 'Siapkan setelan beskap adat / jas formal senada untuk kedua ayah pengantin.',
    nameEN: 'Coordinate formal suits or traditional beskap coats for both fathers.'
  },
  {
    id: 'a-26',
    tab: 'akad',
    category: 'Busana Pria',
    milestone: 'September 2026',
    nameIN: 'Siapkan seragam jas formal / beskap modern untuk seluruh groomsmen.',
    nameEN: 'Arrange matching suits or matching formal attire for the groomsmen.'
  },
  {
    id: 'a-27',
    tab: 'akad',
    category: 'Busana Pria',
    milestone: 'September 2026',
    nameIN: 'Siapkan set pakaian / jas formal cadangan untuk perwakilan keluarga besar pria.',
    nameEN: 'Set aside spare formal trousers/coats for extended male relatives.'
  },
  {
    id: 'a-28',
    tab: 'akad',
    category: 'Fotografi',
    milestone: 'September 2026',
    nameIN: 'Pesan paket fotografer khusus mendampingi persiapan makeup pagi hingga akad selesai.',
    nameEN: 'Book the photographer to cover morning preparation sessions up to the ceremony.'
  },
  {
    id: 'a-29',
    tab: 'akad',
    category: 'Videografi',
    milestone: 'September 2026',
    nameIN: 'Pesan videografer khusus membuat rangkuman video pendek Same-Day-Edit (SDE).',
    nameEN: 'Secure a videographer to produce a Same-Day-Edit highlight reel.'
  },
  {
    id: 'a-30',
    tab: 'akad',
    category: 'Bunga',
    milestone: 'Desember 2026',
    nameIN: 'Pesan rangkaian bunga segar altar akad & hiasan bunga meja panggung utama.',
    nameEN: 'Book a professional florist to supply altar backdrops and desk blooms.'
  },
  {
    id: 'a-31',
    tab: 'akad',
    category: 'Hair & Makeup',
    milestone: 'Desember 2026',
    nameIN: 'Konfirmasikan kuota MUA tambahan untuk saudara kandung & sepupu keluarga besar.',
    nameEN: 'Re-confirm MUA bookings for siblings, cousins, and key aunts.'
  },
  {
    id: 'a-32',
    tab: 'akad',
    category: 'Hair & Makeup',
    milestone: 'Desember 2026',
    nameIN: 'Siapkan & konfirmasikan booking MUA khusus mendandani seluruh bridesmaid.',
    nameEN: 'Settle makeup session schedules and booking deposits for bridesmaids.'
  },
  {
    id: 'a-33',
    tab: 'akad',
    category: 'Sepatu Pengantin',
    milestone: 'Desember 2026',
    nameIN: 'Pesan/beli sepatu pernikahan kustom berhak nyaman untuk pengantin wanita.',
    nameEN: 'Purchase/tailor orthopedic-padded bridal shoes for the bride.'
  },
  {
    id: 'a-34',
    tab: 'akad',
    category: 'Sepatu Pengantin',
    milestone: 'Desember 2026',
    nameIN: 'Membeli selop adat / sepatu formal kulit hitam mengkilap untuk pengantin pria.',
    nameEN: 'Buy comfortable traditional slip-on selops or oxford shoes for the groom.'
  },
  {
    id: 'a-35',
    tab: 'akad',
    category: 'Undangan',
    milestone: 'Desember 2026',
    nameIN: 'Buat draf visual & selesaikan pemesanan cetak undangan akad nikah.',
    nameEN: 'Settle on the visual design draft and place orders for invitations.'
  },
  {
    id: 'a-36',
    tab: 'akad',
    category: 'Suvenir & Hadiah',
    milestone: 'Desember 2026',
    nameIN: 'Hitung kuantitas suvenir terima kasih khusus untuk para saksi & tamu kehormatan.',
    nameEN: 'Determine the quota of exclusive thank-you tokens for VIPs and witnesses.'
  },
  {
    id: 'a-37',
    tab: 'akad',
    category: 'Suvenir & Hadiah',
    milestone: 'Desember 2026',
    nameIN: 'Tentukan & pesan hampers ucapan terima kasih spesial untuk bridesmaid & groomsmen.',
    nameEN: 'Select and order custom appreciation gift boxes for bridesmaids and groomsmen.'
  },
  {
    id: 'a-38',
    tab: 'akad',
    category: 'Rental',
    milestone: 'Desember 2026',
    nameIN: 'Pesan sewa mobil pengantin (sedan mewah / Alphard) lengkap dengan hiasan pita bunga.',
    nameEN: 'Rent a luxury bridal sedan/Alphard adorned with fresh floral ribbons.'
  },
  {
    id: 'a-39',
    tab: 'akad',
    category: 'Entertainment (MC)',
    milestone: 'Desember 2026',
    nameIN: 'Pesan pembawa acara (MC) spesialis pembaca protokol adat & akad nikah sakral.',
    nameEN: 'Book an expert MC specialized in coordinating KUA registers and adat vows.'
  },
  {
    id: 'a-40',
    tab: 'akad',
    category: 'Perhiasan',
    milestone: 'Januari 2027',
    nameIN: 'Menyiapkan set perhiasan kalung, anting, bros, atau tusuk konde adat akad wanita.',
    nameEN: 'Purchase or rent matching earrings, necklaces, and traditional headpins.'
  },
  {
    id: 'a-41',
    tab: 'akad',
    category: 'Perhiasan',
    milestone: 'Februari 2027',
    nameIN: 'Membeli sepasang cincin kawin bermutu tinggi (emas/platina/palladium).',
    nameEN: 'Purchase the certified metal wedding bands (gold, platinum, or palladium).'
  },
  {
    id: 'a-42',
    tab: 'akad',
    category: 'Perhiasan',
    milestone: 'Februari 2027',
    nameIN: 'Memesan kotak cincin nikah kayu terhias inisial pengantin & bunga kering.',
    nameEN: 'Order an engraved wooden/acrylic box with dried botanical beddings.'
  },
  {
    id: 'a-43',
    tab: 'akad',
    category: 'Suvenir & Hadiah',
    milestone: 'Februari 2027',
    nameIN: 'Pesan pembuatan paket suvenir akad nikah unik berlogo grafir inisial nama.',
    nameEN: 'Order personalized, high-quality souvenirs with embossed monograms.'
  },
  {
    id: 'a-44',
    tab: 'akad',
    category: 'Suvenir & Hadiah',
    milestone: 'Februari 2027',
    nameIN: 'Membuat desain kartu ucapan & label suvenir senada dengan desain undangan.',
    nameEN: 'Draft matching thank-you cards and tags synced with the invite aesthetic.'
  },
  {
    id: 'a-45',
    tab: 'akad',
    category: 'Katering',
    milestone: 'Maret 2027',
    nameIN: 'Memfinalisasi pilihan menu katering akad (menu buffet utama & menu stall gubukan).',
    nameEN: 'Select final buffet courses and live food stalls for post-ceremony dining.'
  },
  {
    id: 'a-46',
    tab: 'akad',
    category: 'Hair & Makeup',
    milestone: 'Maret 2027',
    nameIN: 'Melakukan uji coba makeup (makeup trial) pengantin wanita dengan perias adat.',
    nameEN: 'Attend a professional makeup trial session to verify skin tones.'
  },
  {
    id: 'a-47',
    tab: 'akad',
    category: 'Aksesori Pernikahan',
    milestone: 'Maret 2027',
    nameIN: 'Membeli sepasang kimono satin pengantin untuk sesi foto persiapan makeup (getting-ready).',
    nameEN: 'Buy a bridal satin robe/kimono set for getting-ready photography.'
  },
  {
    id: 'a-48',
    tab: 'akad',
    category: 'Aksesori Pernikahan',
    milestone: 'Maret 2027',
    nameIN: 'Menyiapkan jubah kimono satin seragam untuk dikenakan para bridesmaid pagi hari-H.',
    nameEN: 'Buy matching satin robes for bridesmaids to wear during makeup preparation.'
  },
  {
    id: 'a-49',
    tab: 'akad',
    category: 'Perhiasan',
    milestone: 'Maret 2027',
    nameIN: 'Membeli bingkai mahar estetik, emas batangan, atau uang kuno untuk mahar nikah.',
    nameEN: 'Settle final payment for custom mahar designs, logs, or currency frames.'
  },
  {
    id: 'a-50',
    tab: 'akad',
    category: 'Entertainment (Musik)',
    milestone: 'Maret 2027',
    nameIN: 'Menentukan daftar lagu instrumental syahdu pengiring prosesi masuk meja akad.',
    nameEN: 'Curate a playlist of calming instrumental strings/harp for the entrance.'
  },
  {
    id: 'a-51',
    tab: 'akad',
    category: 'Rental',
    milestone: 'Maret 2027',
    nameIN: 'Memesan sewa genset tambahan & sound system berdaya suara jernih.',
    nameEN: 'Confirm booking of backup diesel generators and power amplification rigs.'
  },
  {
    id: 'a-52',
    tab: 'akad',
    category: 'Katering',
    milestone: 'April 2027',
    nameIN: 'Melakukan jadwal food tasting katering akad bersama perwakilan kedua keluarga.',
    nameEN: 'Schedule food tasting with key family representatives to adjust seasonings.'
  },
  {
    id: 'a-53',
    tab: 'akad',
    category: 'Gaun & Busana Pengantin',
    milestone: 'Mei 2027',
    nameIN: 'Melakukan fitting gaun/kebaya akad wanita tahap akhir bersama desainer.',
    nameEN: 'Perform the final fitting of the bridal vows dress/kebaya at the salon.'
  },
  {
    id: 'a-54',
    tab: 'akad',
    category: 'Gaun & Busana Pengantin',
    milestone: 'Mei 2027',
    nameIN: 'Menyiapkan gantungan baju estetik berukir nama untuk keperluan foto flatlay detail baju.',
    nameEN: 'Ensure engraved premium hangers are ready for product detail photography.'
  },
  {
    id: 'a-55',
    tab: 'akad',
    category: 'Busana Pria',
    milestone: 'Mei 2027',
    nameIN: 'Melakukan fitting beskap adat pria tahap akhir bersama penjahit.',
    nameEN: 'Attend final tailoring check-ups for the groom’s vows beskap/suit.'
  },
  {
    id: 'a-56',
    tab: 'akad',
    category: 'Undangan',
    milestone: 'Mei 2027',
    nameIN: 'Kirimkan lembar undangan fisik & digital akad nikah ke kerabat 3-4 minggu sebelum hari-H.',
    nameEN: 'Distribute physical cards and digital invitations to close family friends.'
  },
  {
    id: 'a-57',
    tab: 'akad',
    category: 'Rental',
    milestone: 'Mei 2027',
    nameIN: 'Membagikan rincian nomor plat mobil iringan konvoi pengantin kepada panitia.',
    nameEN: 'Settle and share wedding convoy vehicle numbers and driver contacts.'
  },
  {
    id: 'a-58',
    tab: 'akad',
    category: 'Rental',
    milestone: 'Mei 2027',
    nameIN: 'Mengunci sewa mobil Alphard/sedan mewah dari vendor rental tepercaya.',
    nameEN: 'Confirm pickup dates and settle down payments for the bridal car rental.'
  },
  {
    id: 'a-59',
    tab: 'akad',
    category: 'Rental',
    milestone: 'Mei 2027',
    nameIN: 'Mengajukan izin pengawalan voorijder polisi jika rute konvoi berpotensi macet padat.',
    nameEN: 'Secure official transit escort permissions for high-congestion routes.'
  },
  {
    id: 'a-60',
    tab: 'akad',
    category: 'Layanan Unik',
    milestone: 'Mei 2027',
    nameIN: 'Menghubungi jasa pawang cuaca / pawang hujan tepercaya jika menggelar akad outdoor.',
    nameEN: 'Arrange rainfall-redirection experts/pawang for outdoor setups.'
  },
  {
    id: 'a-61',
    tab: 'akad',
    category: 'Entertainment (MC)',
    milestone: 'Mei 2027',
    nameIN: 'Menyerahkan draf rundown final & silsilah nama wali nikah serta saksi kepada MC.',
    nameEN: 'Hand over KUA documents, schedules, and witness details to the MC.'
  },

  // ==========================================
  // TAB 6: RESEPSI PERNIKAHAN (RESEPSI)
  // ==========================================
  {
    id: 'r-1',
    tab: 'resepsi',
    category: 'Venue',
    milestone: 'Juli 2026',
    nameIN: 'Mensurvei kelapangan gedung, ballroom hotel, atau taman kapasitas besar sesuai kuota tamu.',
    nameEN: 'Inspect large-capacity hotel ballrooms or estate gardens matching guest size.'
  },
  {
    id: 'r-2',
    tab: 'resepsi',
    category: 'Venue',
    milestone: 'Juli 2026',
    nameIN: 'Cek kesiapan instalasi listrik gedung jika dipasang tambahan mesin AC standing.',
    nameEN: 'Verify electric load capacities of the hall to support extra standing ACs.'
  },
  {
    id: 'r-3',
    tab: 'resepsi',
    category: 'Venue',
    milestone: 'Juli 2026',
    nameIN: 'Cek kenyamanan & sebaran suara sound system di sekeliling ballroom.',
    nameEN: 'Test speaker coverages and monitors surrounding the reception hall.'
  },
  {
    id: 'r-4',
    tab: 'resepsi',
    category: 'Katering',
    milestone: 'Juli 2026',
    nameIN: 'Mensurvei katering skala besar yang andal menyajikan ribuan porsi makanan higienis.',
    nameEN: 'Shortlist reputable grand caterers capable of serving 1000+ guest plates.'
  },
  {
    id: 'r-5',
    tab: 'resepsi',
    category: 'Hair & Makeup',
    milestone: 'Juli 2026',
    nameIN: 'Pesan MUA pengantin wanita bertema modern / kebaya modifikasi khusus malam resepsi.',
    nameEN: 'Book the makeup artist for the glamourous, modern evening reception look.'
  },
  {
    id: 'r-6',
    tab: 'resepsi',
    category: 'Hair & Makeup',
    milestone: 'Juli 2026',
    nameIN: 'Pastikan ketersediaan kuota perias cadangan untuk kerabat dekat & penerima tamu.',
    nameEN: 'Ensure auxiliary MUA slots are locked in for mothers and guest greeting ladies.'
  },
  {
    id: 'r-7',
    tab: 'resepsi',
    category: 'Venue',
    milestone: 'Agustus 2026',
    nameIN: 'Mengunci sewa & membayar DP sewa gedung ballroom / taman resepsi pernikahan.',
    nameEN: 'Lock in the ballroom rental and complete the primary down payment.'
  },
  {
    id: 'r-8',
    tab: 'resepsi',
    category: 'Dekorasi & Pencahayaan',
    milestone: 'Agustus 2026',
    nameIN: 'Pesan vendor dekorasi berpengalaman merancang konsep panggung pelaminan megah.',
    nameEN: 'Contract the decorator to create a grand, scenic stage backdrop.'
  },
  {
    id: 'r-9',
    tab: 'resepsi',
    category: 'Dekorasi & Pencahayaan',
    milestone: 'Agustus 2026',
    nameIN: 'Diskusikan paket sewa lampu par, spot-light sorot pelaminan, & lampu transisi dansa.',
    nameEN: 'Incorporate moving par lights, spotlighting, and ambient dance floor systems.'
  },
  {
    id: 'r-10',
    tab: 'resepsi',
    category: 'Rental',
    milestone: 'Agustus 2026',
    nameIN: 'Pesan sewa tenda sarnafil / tenda transparan ber-AC jika venue berkonsep semi-outdoor.',
    nameEN: 'Reserve marquee tents or clear glass structures with heavy AC units.'
  },
  {
    id: 'r-11',
    tab: 'resepsi',
    category: 'Rental',
    milestone: 'Agustus 2026',
    nameIN: 'Sewa genset genset diesel tambahan berkapasitas minimal 80-100 KVA.',
    nameEN: 'Rent dedicated backup diesel generators of at least 80-100 KVA capacity.'
  },
  {
    id: 'r-12',
    tab: 'resepsi',
    category: 'Dekorasi & Pencahayaan',
    milestone: 'September 2026',
    nameIN: 'Rencanakan layout denah meja buffet katering, panggung utama, photobooth, & meja VIP.',
    nameEN: 'Draft layout configurations including buffet points, photo-booths, and VIP seats.'
  },
  {
    id: 'r-13',
    tab: 'resepsi',
    category: 'Bunga',
    milestone: 'September 2026',
    nameIN: 'Tentukan komposisi bunga segar hiasan pelaminan, pagar jalan masuk (aisle), & area meja.',
    nameEN: 'Select fresh seasonal floral species for the main stage, entrance aisles, and tables.'
  },
  {
    id: 'r-14',
    tab: 'resepsi',
    category: 'Gaun & Busana Pengantin',
    milestone: 'September 2026',
    nameIN: 'Pesan pengerjaan gaun resepsi (ballgown modern / kebaya modifikasi) ke desainer gaun.',
    nameEN: 'Tailor-order a custom luxury evening ballgown or modified modern kebaya.'
  },
  {
    id: 'r-15',
    tab: 'resepsi',
    category: 'Gaun & Busana Pengantin',
    milestone: 'September 2026',
    nameIN: 'Siapkan seragam gaun pesta modern / kebaya resepsi malam untuk ibu & ibu mertua.',
    nameEN: 'Prepare formal evening dresses or traditional modifications for mothers.'
  },
  {
    id: 'r-16',
    tab: 'resepsi',
    category: 'Gaun & Busana Pengantin',
    milestone: 'September 2026',
    nameIN: 'Siapkan seragam gaun pesta khusus yang serasi untuk seluruh bridesmaid.',
    nameEN: 'Distribute designated color-themed evening dress textiles to bridesmaids.'
  },
  {
    id: 'r-17',
    tab: 'resepsi',
    category: 'Gaun & Busana Pengantin',
    milestone: 'September 2026',
    nameIN: 'Siapkan gaun pesta anak-anak (flower girl) jika memakai pendamping cilik pembawa bunga.',
    nameEN: 'Tailor floral/tulle dresses for the kids walking as flower girls.'
  },
  {
    id: 'r-18',
    tab: 'resepsi',
    category: 'Busana Pria',
    milestone: 'September 2026',
    nameIN: 'Pesan setelan tuxedo formal kustom, jas ekor (tailcoat), atau set jas modern pengantin pria.',
    nameEN: 'Tailor a high-quality wedding suit, modern tuxedo, or formal jacket for the groom.'
  },
  {
    id: 'r-19',
    tab: 'resepsi',
    category: 'Busana Pria',
    milestone: 'September 2026',
    nameIN: 'Siapkan setelan jas formal / beskap modern untuk kedua ayah pengantin.',
    nameEN: 'Coordinate tailored formal suits or tuxedos for both fathers.'
  },
  {
    id: 'r-20',
    tab: 'resepsi',
    category: 'Busana Pria',
    milestone: 'September 2026',
    nameIN: 'Siapkan seragam jas formal senada khusus untuk seluruh groomsmen.',
    nameEN: 'Purchase or hire matching suit coats or dress vests for the groomsmen.'
  },
  {
    id: 'r-21',
    tab: 'resepsi',
    category: 'Busana Pria',
    milestone: 'September 2026',
    nameIN: 'Siapkan set setelan jas formal kecil untuk para pageboy (pembawa cincin cilik).',
    nameEN: 'Prepare custom mini-suits or tuxedos for the young ring-bearer boys.'
  },
  {
    id: 'r-22',
    tab: 'resepsi',
    category: 'Bunga',
    milestone: 'Desember 2026',
    nameIN: 'Pesan florist penyedia bunga impor/lokal segar dekorasi panggung resepsi.',
    nameEN: 'Secure florist supplier orders for premium blossoms on the reception stage.'
  },
  {
    id: 'r-23',
    tab: 'resepsi',
    category: 'Hair & Makeup',
    milestone: 'Desember 2026',
    nameIN: 'Pastikan penata rias (MUA) bridesmaid sudah dipesan sesuai kuota jumlah personel.',
    nameEN: 'Confirm bridesmaid hair-styling and makeup artist schedules.'
  },
  {
    id: 'r-24',
    tab: 'resepsi',
    category: 'Sepatu Pengantin',
    milestone: 'Desember 2026',
    nameIN: 'Beli sepatu hak tinggi pesta (heels) yang nyaman & empuk untuk resepsi malam.',
    nameEN: 'Purchase premium, comfort-cushioned high-heels for the long standing evening.'
  },
  {
    id: 'r-25',
    tab: 'resepsi',
    category: 'Sepatu Pengantin',
    milestone: 'Desember 2026',
    nameIN: 'Beli sepatu kulit formal (pantofel) mengkilap untuk pengantin pria.',
    nameEN: 'Buy comfortable glossy leather oxfords or patent leather loafers for the groom.'
  },
  {
    id: 'r-26',
    tab: 'resepsi',
    category: 'Entertainment (MC)',
    milestone: 'Desember 2026',
    nameIN: 'Pesan pembawa acara (MC) spesialis event formal gala dinner / pesta besar.',
    nameEN: 'Book an expert MC fluent in grand galas and high-paced modern reception flows.'
  },
  {
    id: 'r-27',
    tab: 'resepsi',
    category: 'Entertainment (Musik)',
    milestone: 'Desember 2026',
    nameIN: 'Pesan grup band akustik / live chamber music profesional pengisi kemeriahan resepsi.',
    nameEN: 'Book a professional wedding band, string quartet, or chamber music group.'
  },
  {
    id: 'r-28',
    tab: 'resepsi',
    category: 'Rental',
    milestone: 'Desember 2026',
    nameIN: 'Pastikan kapasitas sewa sound system berdaya suara besar (minimal 5.000-10.000 Watt).',
    nameEN: 'Settle on a high-wattage PA system (5,000 to 10,000 Watts output capacity).'
  },
  {
    id: 'r-29',
    tab: 'resepsi',
    category: 'Kue Pengantin',
    milestone: 'Desember 2026',
    nameIN: 'Pesan vendor kue pengantin bertingkat tinggi lengkap dengan miniatur pengantin.',
    nameEN: 'Book a professional tier cake maker with customized topper dolls.'
  },
  {
    id: 'r-30',
    tab: 'resepsi',
    category: 'Perhiasan',
    milestone: 'Januari 2027',
    nameIN: 'Menyiapkan tiara, mahkota berkilau, perhiasan kalung berlian pengantin wanita.',
    nameEN: 'Prepare a sparkling tiara, necklaces, or matching diamond pieces for the bride.'
  },
  {
    id: 'r-31',
    tab: 'resepsi',
    category: 'Perhiasan',
    milestone: 'Februari 2027',
    nameIN: 'Membeli hiasan rambut berkilau (headpiece) ornamen bunga kristal mewah.',
    nameEN: 'Purchase custom crystal hairpins or statement metallic hair accessories.'
  },
  {
    id: 'r-32',
    tab: 'resepsi',
    category: 'Katering',
    milestone: 'Maret 2027',
    nameIN: 'Pilih jenis hidangan prasmanan final & aneka camilan gubuk (stall) pendukung.',
    nameEN: 'Settle the final buffet selections and lock in food stall flavors.'
  },
  {
    id: 'r-33',
    tab: 'resepsi',
    category: 'Hair & Makeup',
    milestone: 'Maret 2027',
    nameIN: 'Lakukan uji coba makeup (makeup trial) pengantin wanita bertema glamor resepsi.',
    nameEN: 'Attend the reception glamourous-style trial run with your MUA.'
  },
  {
    id: 'r-34',
    tab: 'resepsi',
    category: 'Entertainment (Musik)',
    milestone: 'Maret 2027',
    nameIN: 'Menyusun daftar lagu wedding entrance romantis & musik pengiring wedding dance.',
    nameEN: 'Submit selected song codes for the grand entrance and couple waltz dance.'
  },
  {
    id: 'r-35',
    tab: 'resepsi',
    category: 'Kue Pengantin',
    milestone: 'Maret 2027',
    nameIN: 'Memilih citarasa kue utama (cokelat/vanila/red-velvet) & menyepakati desain hiasan.',
    nameEN: 'Select the sponge flavors (chocolate, vanilla, red-velvet) and final design.'
  },
  {
    id: 'r-36',
    tab: 'resepsi',
    category: 'Layanan Unik',
    milestone: 'Maret 2027',
    nameIN: 'Menentukan kuantitas tim penerima tamu (usher/pager ayu) di gerbang loket masuk.',
    nameEN: 'Determine the headcount for registration desk ladies/ushers.'
  },
  {
    id: 'r-37',
    tab: 'resepsi',
    category: 'Rental',
    milestone: 'Maret 2027',
    nameIN: 'Sewa toilet portabel VIP berpendingin udara untuk kenyamanan kru & tamu.',
    nameEN: 'Rent an air-conditioned luxury trailer toilet for outdoor sets.'
  },
  {
    id: 'r-38',
    tab: 'resepsi',
    category: 'Rental',
    milestone: 'Maret 2027',
    nameIN: 'Sewa mesin pendingin AC standing 5 PK tambahan & sewa cooling fan kipas uap air.',
    nameEN: 'Book standing 5HP ACs and heavy water-misting fans to cool guests.'
  },
  {
    id: 'r-39',
    tab: 'resepsi',
    category: 'Rental',
    milestone: 'Maret 2027',
    nameIN: 'Sewa layar monitor LED berukuran raksasa (videotron) sebagai latar panggung dinamis.',
    nameEN: 'Rent massive modular indoor LED video walls (videotrons) for backdrops.'
  },
  {
    id: 'r-40',
    tab: 'resepsi',
    category: 'Katering',
    milestone: 'April 2027',
    nameIN: 'Lakukan food tasting terlengkap katering resepsi di dapur utama vendor.',
    nameEN: 'Complete final food tastings directly with the executive chef.'
  },
  {
    id: 'r-41',
    tab: 'resepsi',
    category: 'Layanan Unik',
    milestone: 'April 2027',
    nameIN: 'Pesan agen jasa tim penerima tamu (usher) profesional berpakaian adat.',
    nameEN: 'Settle service contracts with agencies supplying professional ushers/models.'
  },
  {
    id: 'r-42',
    tab: 'resepsi',
    category: 'Gaun & Busana Pengantin',
    milestone: 'Mei 2027',
    nameIN: 'Lakukan fitting terakhir gaun resepsi / ballgown mewah pengantin wanita.',
    nameEN: 'Perform the final measurements and fitting of the bridal ballgown.'
  },
  {
    id: 'r-43',
    tab: 'resepsi',
    category: 'Gaun & Busana Pengantin',
    milestone: 'Mei 2027',
    nameIN: 'Pastikan vendor menyediakan boneka manekin jika gaun ingin dipajang rapi saat difoto.',
    nameEN: 'Confirm a professional mannequin is ready to hold the dress for pre-shots.'
  },
  {
    id: 'r-44',
    tab: 'resepsi',
    category: 'Busana Pria',
    milestone: 'Mei 2027',
    nameIN: 'Lakukan fitting terakhir setelan jas formal/tuxedo pria di tailor.',
    nameEN: "Perform the final fitting of the groom's reception wedding suit."
  },
  // ==========================================
  // TAB 7: WEDDING PREPARATION DAY-OF KIT (KIT)
  // ==========================================
  {
    id: 'k-1',
    tab: 'kit',
    category: 'Personal Care',
    milestone: 'Hari-H',
    nameIN: 'Deodoran & Body Spray / Parfum cadangan',
    nameEN: 'Deodorant & spare body spray / perfume'
  },
  {
    id: 'k-2',
    tab: 'kit',
    category: 'Personal Care',
    milestone: 'Hari-H',
    nameIN: 'Permen penyegar mulut, obat kumur, atau mint',
    nameEN: 'Breath mints, breath spray, or mouthwash'
  },
  {
    id: 'k-3',
    tab: 'kit',
    category: 'Personal Care',
    milestone: 'Hari-H',
    nameIN: 'Tisu basah, tisu kering, dan kertas minyak wajah',
    nameEN: 'Wet wipes, dry tissues, and blotting paper'
  },
  {
    id: 'k-4',
    tab: 'kit',
    category: 'Personal Care',
    milestone: 'Hari-H',
    nameIN: 'Sisir, hair spray, jepit rambut / bobby pins',
    nameEN: 'Hairbrush/comb, hair spray, or bobby pins'
  },
  {
    id: 'k-5',
    tab: 'kit',
    category: 'Personal Care',
    milestone: 'Hari-H',
    nameIN: 'Hand sanitizer & losion tangan',
    nameEN: 'Hand sanitizer & hand lotion'
  },
  {
    id: 'k-6',
    tab: 'kit',
    category: 'Apparel & Sewing',
    milestone: 'Hari-H',
    nameIN: 'Alat jahit mini (jarum pentul, peniti, benang hitam & putih)',
    nameEN: 'Mini sewing kit (safety pins, needles, black & white threads)'
  },
  {
    id: 'k-7',
    tab: 'kit',
    category: 'Apparel & Sewing',
    milestone: 'Hari-H',
    nameIN: 'Selotip kain bolak-balik / double tape (untuk gaun)',
    nameEN: 'Double-sided fabric tape (for outfit tweaks)'
  },
  {
    id: 'k-8',
    tab: 'kit',
    category: 'Apparel & Sewing',
    milestone: 'Hari-H',
    nameIN: 'Pena penghilang noda baju instan atau tisu basah noda',
    nameEN: 'Stain remover pen or instant stain wipes'
  },
  {
    id: 'k-9',
    tab: 'kit',
    category: 'Apparel & Sewing',
    milestone: 'Hari-H',
    nameIN: 'Lint roller (pembersih serat/bulu pada jas)',
    nameEN: 'Lint roller (to clean suits/tuxedos)'
  },
  {
    id: 'k-10',
    tab: 'kit',
    category: 'Apparel & Sewing',
    milestone: 'Hari-H',
    nameIN: 'Penutup anting cadangan, peniti bros, atau manset cadangan',
    nameEN: 'Spare earring backs, brooch pins, or cufflink sets'
  },
  {
    id: 'k-11',
    tab: 'kit',
    category: 'Medical & First Aid',
    milestone: 'Hari-H',
    nameIN: 'Pereda nyeri & demam (Parasetamol / Ibuprofen)',
    nameEN: 'Pain relievers (Paracetamol / Ibuprofen)'
  },
  {
    id: 'k-12',
    tab: 'kit',
    category: 'Medical & First Aid',
    milestone: 'Hari-H',
    nameIN: 'Obat maag atau antasida (untuk asam lambung naik karena stres)',
    nameEN: 'Stomach medicines or antacids (for stress heartburn)'
  },
  {
    id: 'k-13',
    tab: 'kit',
    category: 'Medical & First Aid',
    milestone: 'Hari-H',
    nameIN: 'Plester luka, pembalut luka kecil, dan plester anti-lecet kaki',
    nameEN: 'Band-aids, medical tape, and blister pads'
  },
  {
    id: 'k-14',
    tab: 'kit',
    category: 'Medical & First Aid',
    milestone: 'Hari-H',
    nameIN: 'Obat tetes mata steril (untuk mata merah/lelah)',
    nameEN: 'Soothing eye drops (for tired or red eyes)'
  },
  {
    id: 'k-15',
    tab: 'kit',
    category: 'Medical & First Aid',
    milestone: 'Hari-H',
    nameIN: 'Obat resep pribadi & suplemen/vitamin stamina',
    nameEN: 'Personal prescription medications & vitamins'
  },
  {
    id: 'k-16',
    tab: 'kit',
    category: 'Documents & Essentials',
    milestone: 'Hari-H',
    nameIN: 'Buku nikah resmi / dokumen pencatatan sipil & KUA',
    nameEN: 'Official marriage books / civil registration & KUA files'
  },
  {
    id: 'k-17',
    tab: 'kit',
    category: 'Documents & Essentials',
    milestone: 'Hari-H',
    nameIN: 'Cincin kawin, wadah/kotak cincin, dan salinan cetak janji nikah',
    nameEN: 'Wedding rings, ring boxes, and printed wedding vows'
  },
  {
    id: 'k-18',
    tab: 'kit',
    category: 'Documents & Essentials',
    milestone: 'Hari-H',
    nameIN: 'Uang tunai cadangan/amplop untuk sisa bayaran vendor & darurat',
    nameEN: 'Cash envelope for vendors or emergency purchases'
  },
  {
    id: 'k-19',
    tab: 'kit',
    category: 'Documents & Essentials',
    milestone: 'Hari-H',
    nameIN: 'Power bank, charger HP, dan kabel pengisi daya panjang',
    nameEN: 'Power bank, phone chargers, and long charging cables'
  }
];
