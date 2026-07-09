import React, { useState, useEffect } from 'react';
import { CATEGORIES } from './resourcesData';
import { Resource } from './types';
import { fetchResources, likeResource, isFirebaseReady } from './firebase';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import ReqRecForm from './components/ReqRecForm';
import ComingSoonFeatures from './components/ComingSoonFeatures';
import AdminPanel from './components/AdminPanel';
import ResourceCard from './components/ResourceCard';
import CategoryIcon from './components/CategoryIcon';
import WeddingPrepKitChecklist from './components/WeddingPrepKitChecklist';
import { BookOpen, Search, Filter, MessageSquare, Compass, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './contexts/LanguageContext';
import { TranslationBundle } from './locales/translations';

const PHASES = [
  { id: 'phase1', titleKey: 'phase1_title' as const },
  { id: 'phase2', titleKey: 'phase2_title' as const },
  { id: 'phase3', titleKey: 'phase3_title' as const },
  { id: 'phase4', titleKey: 'phase4_title' as const },
];

export default function App() {
  const { t } = useLanguage();
  const [currentTab, setCurrentTab] = useState('home');
  const [showAdmin, setShowAdmin] = useState(false);
  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters state
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMediaType, setSelectedMediaType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Floating notifications
  const [alert, setAlert] = useState<string | null>(null);

  // Load resources
  const loadResourcesList = async () => {
    setIsLoading(true);
    try {
      const data = await fetchResources();
      setResources(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadResourcesList();
  }, []);

  const triggerAlert = (msg: string) => {
    setAlert(msg);
    setTimeout(() => setAlert(null), 3000);
  };

  const handleLikeResource = async (id: string) => {
    try {
      await likeResource(id);
      // Update local state increment
      setResources(prev => prev.map(item => {
        if (item.id === id) {
          return { ...item, likes: item.likes + 1 };
        }
        return item;
      }));
      triggerAlert(t('toastResourceLiked'));
    } catch (err) {
      console.error(err);
    }
  };

  // Helper translations
  const getCategoryName = (catId: string, defaultName: string) => {
    const key = `cat_name_${catId}` as keyof TranslationBundle;
    const translated = t(key);
    return translated && translated !== key ? translated : defaultName;
  };

  const getCategoryDesc = (catId: string, defaultDesc: string) => {
    const key = `cat_desc_${catId}` as keyof TranslationBundle;
    const translated = t(key);
    return translated && translated !== key ? translated : defaultDesc;
  };

  // Filter computation
  const filteredResources = resources.filter(res => {
    const matchesCategory = selectedCategory === 'all' || res.category === selectedCategory;
    const matchesMediaType = selectedMediaType === 'all' || res.resourceType === selectedMediaType;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (res.creator && res.creator.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesMediaType && matchesSearch;
  });

  return (
    <div id="pernikah-app-root" className="min-h-screen bg-[#fdfdfd] flex flex-col font-sans">
      
      {/* Toast alert popup */}
      <AnimatePresence>
        {alert && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50 bg-brand-slate text-white border border-brand-blue/30 px-5 py-3 rounded-xl shadow-lg text-xs font-bold font-sans flex items-center space-x-2"
          >
            <div className="w-2 h-2 rounded-full bg-brand-blue animate-ping"></div>
            <span>{alert}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Top Header */}
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        showAdmin={showAdmin} 
        setShowAdmin={setShowAdmin} 
      />

      {/* Admin Panel CMS Module */}
      <AnimatePresence>
        {showAdmin && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <AdminPanel 
              onResourceAdded={loadResourcesList} 
              onClose={() => setShowAdmin(false)} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {/* ======================================= */}
          {/* TAB 1: BERANDA (HOME / COOPERATIVE HUB) */}
          {/* ======================================= */}
          {currentTab === 'home' && (
            <motion.div
              key="home-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
            >
              {/* Hero Spotlight Section */}
              <div className="relative rounded-3xl overflow-hidden bg-radial from-brand-burgundy to-brand-red py-12 px-6 sm:px-12 text-center text-white shadow-md">
                {/* Decorative mesh */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                
                <h2 className="script-accent text-4xl sm:text-5xl text-brand-beige-dark font-light mb-2">
                  {t('heroSubtitle')}
                </h2>
                <h1 className="serif-heading text-4xl sm:text-6xl font-black tracking-tight mb-4 uppercase text-white">
                  {t('heroTitle')} 
                </h1>
                
                <p className="max-w-xl mx-auto text-xs sm:text-sm text-brand-beige-light/90 leading-relaxed mb-6 font-medium">
                  {t('heroDescription')}
                </p>

                {/* Micro CTA links */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => setCurrentTab('reqrec')}
                    className="px-5 py-2 rounded-xl bg-brand-blue hover:bg-blue-600 font-bold text-xs uppercase tracking-wider text-white transition shadow-sm flex items-center space-x-1.5 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{t('heroCtaPropose')}</span>
                  </button>
                  <button
                    onClick={() => {
                      const el = document.getElementById('catalog-anchor');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 font-bold text-xs uppercase tracking-wider text-white transition flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Compass className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{t('heroCtaExplore')}</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Filtering Row & Sidebar Grid Container */}
              <div id="catalog-anchor" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                
                {/* 1. LEFT SIDEBAR: CATEGORIES SELECTOR */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="bg-[#f5f3ef] border border-brand-beige-dark/50 rounded-2xl p-4 sticky top-28">
                    <h3 className="serif-heading text-sm font-black text-brand-slate uppercase tracking-wider mb-3 flex items-center space-x-2">
                      <Filter className="w-4 h-4 text-brand-red" />
                      <span>{t('sidebarTitle')}</span>
                    </h3>

                    {/* All categories option */}
                    <div className="space-y-4">
                      {/* All categories option */}
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                          selectedCategory === 'all'
                            ? 'bg-brand-red text-white shadow-xs'
                            : 'bg-white border border-brand-beige-dark/30 hover:bg-brand-beige-light/20 text-[#374151]'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <Compass className="w-3.5 h-3.5" />
                          <span>{t('sidebarAll')}</span>
                        </div>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono font-bold ${selectedCategory === 'all' ? 'bg-white/20' : 'bg-brand-sky text-zinc-600'}`}>
                          {resources.length}
                        </span>
                      </button>

                      {PHASES.map((phase) => {
                        const phaseCats = CATEGORIES.filter(cat => cat.phaseId === phase.id);
                        return (
                          <div key={phase.id} className="space-y-1.5 pt-2 border-t border-brand-beige-dark/20">
                            <h4 className="text-[10px] uppercase font-black tracking-wider text-brand-red">
                              {t(phase.titleKey)}
                            </h4>
                            <div className="space-y-1">
                              {phaseCats.map((cat) => {
                                const count = resources.filter(res => res.category === cat.id).length;
                                return (
                                  <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                                      selectedCategory === cat.id
                                        ? 'bg-brand-red text-white shadow-xs'
                                        : 'bg-white border border-brand-beige-dark/30 hover:bg-brand-beige-light/20 text-[#374151]'
                                    }`}
                                  >
                                    <div className="flex items-center space-x-2.5 min-w-0">
                                      <div className="flex-shrink-0">
                                        <CategoryIcon name={cat.iconName} className="w-3.5 h-3.5" />
                                      </div>
                                      <span className="truncate">{getCategoryName(cat.id, cat.name)}</span>
                                    </div>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold font-mono ${selectedCategory === cat.id ? 'bg-white/20' : 'bg-brand-sky text-zinc-600'}`}>
                                      {count}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 2. RIGHT CONTENT: SEARCH BAR, TYPE PILLS & CARDS GRID */}
                <div className="lg:col-span-9 space-y-6">
                  
                  {/* Filtration Area */}
                  <div className="bg-white border border-brand-beige-dark/35 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-3xs">
                    
                    {/* Search Field */}
                    <div className="relative flex-grow">
                      <Search className="absolute left-3 top-2.5 w-4 h-4 text-brand-beige-dark" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t('searchPlaceholder')}
                        className="w-full pl-10 pr-4 py-2 text-xs bg-brand-sky border border-brand-beige-dark/50 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-brand-blue/20"
                      />
                    </div>

                    {/* Media Type Filters */}
                    <div className="flex items-center space-x-1 overflow-x-auto pb-1 md:pb-0 shrink-0">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mr-2">{t('filterTypeLabel')}</span>
                      {['all', 'youtube', 'instagram', 'book', 'course', 'website'].map((type) => (
                        <button
                          key={type}
                          onClick={() => setSelectedMediaType(type)}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase transition-all whitespace-nowrap cursor-pointer ${
                            selectedMediaType === type
                              ? 'bg-brand-blue text-white'
                              : 'bg-brand-sky hover:bg-brand-beige-light/30 text-zinc-700'
                          }`}
                        >
                          {type === 'all' ? t('filterTypeAll') : type}
                        </button>
                      ))}
                    </div>

                  </div>

                  {/* Active Filtering Info Label */}
                  <div className="bg-brand-sky border border-brand-beige-dark/45 px-4 py-3 rounded-xl text-xs flex items-center justify-between">
                    <div>
                      <span className="font-bold text-brand-slate uppercase">{t('activeFilterLabel')}</span>
                      <span className="ml-1.5 font-bold text-brand-red">
                        {selectedCategory === 'all' ? t('activeFilterAll') : getCategoryName(selectedCategory, '')}
                      </span>
                      {selectedMediaType !== 'all' && (
                        <>
                          <span className="mx-1 text-[#a4a095]">•</span>
                          <span className="font-bold text-brand-blue uppercase">{selectedMediaType}</span>
                        </>
                      )}
                      {searchQuery.trim() && (
                        <>
                          <span className="mx-1 text-[#a4a095]">•</span>
                          <span className="italic">"{searchQuery}"</span>
                        </>
                      )}
                    </div>
                    <span className="text-[#6b7280] font-bold font-mono text-[10px]">
                      {t('matsFound').replace('{count}', String(filteredResources.length))}
                    </span>
                  </div>

                  {selectedCategory === 'wedding-prep' && (
                    <WeddingPrepKitChecklist />
                  )}

                  {/* Curated Resources Cards Grid */}
                  {isLoading ? (
                    <div className="py-24 text-center">
                      <div className="w-10 h-10 border-2 border-brand-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-xs font-extrabold text-[#9ca3af] uppercase tracking-wider">{t('loading')}</p>
                    </div>
                  ) : filteredResources.length === 0 ? (
                    <div className="py-20 border-2 border-dashed border-[#eae7e1] rounded-3xl text-center">
                      <BookOpen className="w-12 h-12 text-[#d8d2c6] mx-auto mb-3 stroke-1" />
                      <p className="text-sm font-bold text-brand-slate mb-1">{t('matsNotFound')}</p>
                      <p className="text-xs text-zinc-500">
                        {t('matsNotFoundDesc')}
                      </p>
                      <button
                        onClick={() => {
                          setSelectedCategory('all');
                          setSelectedMediaType('all');
                          setSearchQuery('');
                        }}
                        className="mt-4 px-4 py-2 border border-brand-red/30 text-brand-red text-xs font-bold rounded-lg hover:bg-brand-red/10 transition cursor-pointer"
                      >
                        {t('resetFilterBtn')}
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredResources.map((res) => (
                        <ResourceCard 
                          key={res.id} 
                          resource={res} 
                          categoryName={getCategoryName(res.category, res.category)}
                        />
                      ))}
                    </div>
                  )}

                  {/* Active category explanation box if fully specified */}
                  {selectedCategory !== 'all' && (
                    <div className="bg-brand-beige-light/20 border border-brand-beige-dark/50 p-5 rounded-2xl mt-8">
                      <h4 className="serif-heading font-extrabold text-brand-slate mb-1 text-sm flex items-center space-x-1.5">
                        <Award className="w-4.5 h-4.5 text-brand-gold fill-current" />
                        <span>{t('focusAreaLabel')} {getCategoryName(selectedCategory, '')}</span>
                      </h4>
                      <p className="text-xs text-[#52525b] leading-relaxed font-sans">
                        {getCategoryDesc(selectedCategory, '')}
                      </p>
                    </div>
                  )}
                  
                </div>

              </div>
            </motion.div>
          )}

          {/* ======================================= */}
          {/* TAB 2: TENTANG KAMI                    */}
          {/* ======================================= */}
          {currentTab === 'about' && (
            <motion.div
              key="about-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <AboutUs />
            </motion.div>
          )}

          {/* ======================================= */}
          {/* TAB 3: REQUEST AND RECOMMENDATIONS (CRU) */}
          {/* ======================================= */}
          {currentTab === 'reqrec' && (
            <motion.div
              key="reqrec-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ReqRecForm categories={CATEGORIES} />
            </motion.div>
          )}

          {/* ======================================= */}
          {/* TAB 4: INTERACTIVE HUB (COMING SOON SIM) */}
          {/* ======================================= */}
          {currentTab === 'frameworks' && (
            <motion.div
              key="frameworks-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ComingSoonFeatures />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Premium Footer Area */}
      <footer className="bg-brand-slate border-t border-zinc-800 text-zinc-400 py-12 mt-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-zinc-800">
            
            {/* Column 1 info */}
            <div>
              <div className="flex items-baseline space-x-1 mb-3">
                <span className="serif-heading text-xl font-bold text-white tracking-wide">{t('appName')}</span>
                <span className="script-accent text-2xl text-brand-blue font-medium leading-none">{t('appSubtitle')}</span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {t('footerDesc')}
              </p>
            </div>

            {/* Column 2 navigational shortcuts */}
            <div>
              <h4 className="serif-heading text-sm font-bold text-white mb-4 uppercase tracking-wider">{t('footerQuickLinks')}</h4>
              <ul className="text-xs space-y-2">
                <li><button onClick={() => setCurrentTab('home')} className="hover:text-[#4682b4] transition cursor-pointer">{t('footerQuickLibrary')}</button></li>
                <li><button onClick={() => setCurrentTab('about')} className="hover:text-[#4682b4] transition cursor-pointer">{t('footerQuickPhilosophy')}</button></li>
                <li><button onClick={() => setCurrentTab('reqrec')} className="hover:text-[#4682b4] transition cursor-pointer">{t('footerQuickSubmit')}</button></li>
                <li><button onClick={() => setCurrentTab('frameworks')} className="hover:text-[#4682b4] transition cursor-pointer">{t('footerQuickReady')}</button></li>
              </ul>
            </div>

            {/* Column 3 interactive statistics */}
            <div>
              <h4 className="serif-heading text-sm font-bold text-white mb-4 uppercase tracking-wider">{t('footerInfraStatus')}</h4>
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl space-y-2">
                <div className="flex justify-between items-center text-[10px]">
                  <span>{t('footerFirestoreDb')}</span>
                  <span className={isFirebaseReady ? 'text-emerald-500 font-bold' : 'text-amber-500 font-bold'}>
                    {isFirebaseReady ? t('connected') : t('footerSandboxDemo')}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[10px]">
                  <span>{t('footerDeployHost')}</span>
                  <span className="text-[#a4a095] font-mono font-bold">Cloud Run</span>
                </div>
                <p className="text-[9px] text-[#84817a] mt-2 block leading-relaxed">
                  {t('footerOpsText')}
                </p>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] text-zinc-500">
            <p>{t('footerCopyright')}</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="https://simkah4.kemenag.go.id" target="_blank" rel="noreferrer" className="hover:underline">{t('footerPartnerLinkSimkah')}</a>
              <span>•</span>
              <a href="https://rumaysho.com" target="_blank" rel="noreferrer" className="hover:underline">{t('footerPartnerLinkEdukasi')}</a>
              <span>•</span>
              <a href="https://www.bridestory.com" target="_blank" rel="noreferrer" className="hover:underline">{t('footerPartnerLinkBridestory')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
