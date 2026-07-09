import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  DEFAULT_CHECKLIST_ITEMS, 
  ChecklistItem 
} from '../data/checklistData';
import { 
  Check, 
  Plus, 
  Trash2, 
  RotateCcw, 
  Sparkles, 
  Heart, 
  Calendar, 
  Camera, 
  BookOpen, 
  Award, 
  Compass, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  CheckSquare, 
  Square,
  FileText,
  Bookmark,
  Activity,
  Luggage,
  ListTodo
} from 'lucide-react';

type TabType = 'timeline' | 'lamaran' | 'prewedding' | 'pengajian' | 'akad' | 'resepsi' | 'kit';

export default function WeddingPrepKitChecklist() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>('timeline');
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
  
  // Accordion open/close state for milestones
  const [expandedMilestones, setExpandedMilestones] = useState<Record<string, boolean>>({});
  
  // Custom item creation inputs
  const [newCustomName, setNewCustomName] = useState('');
  const [newCustomCategory, setNewCustomCategory] = useState('Umum');

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const storedChecked = localStorage.getItem('pernikah_checklist_checked');
      const storedCustom = localStorage.getItem('pernikah_checklist_custom');
      
      const parsedChecked = storedChecked ? JSON.parse(storedChecked) : {};
      setCheckedIds(parsedChecked);
      
      const parsedCustom = storedCustom ? JSON.parse(storedCustom) : [];
      setItems([...DEFAULT_CHECKLIST_ITEMS, ...parsedCustom]);
    } catch (e) {
      console.error('Error loading checklist state', e);
      setItems(DEFAULT_CHECKLIST_ITEMS);
    }
  }, []);

  // Sync checklist checked IDs to localStorage
  const saveCheckedState = (newChecked: Record<string, boolean>) => {
    setCheckedIds(newChecked);
    localStorage.setItem('pernikah_checklist_checked', JSON.stringify(newChecked));
  };

  // Sync custom items to localStorage
  const saveCustomItems = (allCurrentItems: ChecklistItem[]) => {
    const customOnly = allCurrentItems.filter(item => item.isCustom);
    localStorage.setItem('pernikah_checklist_custom', JSON.stringify(customOnly));
  };

  // Toggle checked state
  const handleToggleItem = (id: string) => {
    const updated = { ...checkedIds, [id]: !checkedIds[id] };
    saveCheckedState(updated);
  };

  // Add custom item
  const handleAddCustomItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCustomName.trim()) return;

    const newItem: ChecklistItem = {
      id: `custom-${Date.now()}`,
      tab: activeTab,
      category: newCustomCategory.trim() || 'Umum',
      milestone: language === 'IN' ? 'Kustom Pribadi' : 'Custom Personal',
      nameIN: newCustomName.trim(),
      nameEN: newCustomName.trim(),
      isCustom: true
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    saveCustomItems(updatedItems);
    setNewCustomName('');
    
    // Automatically make sure the milestone is expanded
    const milestoneKey = `${activeTab}-${newItem.milestone}`;
    setExpandedMilestones(prev => ({ ...prev, [milestoneKey]: true }));
  };

  // Delete custom item
  const handleDeleteCustomItem = (id: string) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    saveCustomItems(updatedItems);

    // Remove checked state if existed
    if (checkedIds[id]) {
      const updatedChecked = { ...checkedIds };
      delete updatedChecked[id];
      saveCheckedState(updatedChecked);
    }
  };

  // Reset current tab checklist
  const handleResetCurrentTab = () => {
    const confirmMsg = language === 'IN' 
      ? `Apakah Anda yakin ingin mengatur ulang semua checklist untuk tab saat ini?` 
      : `Are you sure you want to reset all checklist progress for the current tab?`;
      
    if (window.confirm(confirmMsg)) {
      const updatedChecked = { ...checkedIds };
      // Uncheck all items belonging to current active tab
      items.forEach(item => {
        if (item.tab === activeTab) {
          delete updatedChecked[item.id];
        }
      });
      saveCheckedState(updatedChecked);

      // Keep only default items for the active tab (delete custom items of this tab)
      const updatedItems = items.filter(item => !(item.tab === activeTab && item.isCustom));
      setItems(updatedItems);
      saveCustomItems(updatedItems);
    }
  };

  // Reset entire app checklist (all tabs)
  const handleResetAll = () => {
    const confirmMsg = language === 'IN'
      ? `Apakah Anda yakin ingin mengatur ulang SELURUH progres checklist dan menghapus semua item kustom di semua fase?`
      : `Are you sure you want to reset your ENTIRE wedding planning progress and remove all custom items across all phases?`;
      
    if (window.confirm(confirmMsg)) {
      setCheckedIds({});
      localStorage.removeItem('pernikah_checklist_checked');
      setItems(DEFAULT_CHECKLIST_ITEMS);
      localStorage.removeItem('pernikah_checklist_custom');
    }
  };

  // Check all visible items in the current filtered view
  const handleCheckAllVisible = (visibleItems: ChecklistItem[]) => {
    const updatedChecked = { ...checkedIds };
    visibleItems.forEach(item => {
      updatedChecked[item.id] = true;
    });
    saveCheckedState(updatedChecked);
  };

  // Uncheck all visible items in the current filtered view
  const handleUncheckAllVisible = (visibleItems: ChecklistItem[]) => {
    const updatedChecked = { ...checkedIds };
    visibleItems.forEach(item => {
      delete updatedChecked[item.id];
    });
    saveCheckedState(updatedChecked);
  };

  // Helper to toggle milestone accordion
  const toggleMilestone = (milestoneKey: string) => {
    setExpandedMilestones(prev => ({
      ...prev,
      [milestoneKey]: !prev[milestoneKey]
    }));
  };

  // Filter and group logic
  const tabItems = items.filter(item => item.tab === activeTab);
  
  const searchFilteredItems = tabItems.filter(item => {
    const name = language === 'IN' ? item.nameIN : item.nameEN;
    const cat = item.category;
    const mile = item.milestone;
    const query = searchQuery.toLowerCase();
    return name.toLowerCase().includes(query) || 
           cat.toLowerCase().includes(query) || 
           mile.toLowerCase().includes(query);
  });

  // Calculate statistics
  const totalInCurrentTab = tabItems.length;
  const checkedInCurrentTab = tabItems.filter(item => checkedIds[item.id]).length;
  const progressPercentTab = totalInCurrentTab > 0 ? Math.round((checkedInCurrentTab / totalInCurrentTab) * 100) : 0;

  const totalAllTabs = items.length;
  const checkedAllTabs = items.filter(item => checkedIds[item.id]).length;
  const progressPercentGlobal = totalAllTabs > 0 ? Math.round((checkedAllTabs / totalAllTabs) * 100) : 0;

  // Group filtered items by milestone
  const groupedByMilestone: Record<string, ChecklistItem[]> = {};
  searchFilteredItems.forEach(item => {
    if (!groupedByMilestone[item.milestone]) {
      groupedByMilestone[item.milestone] = [];
    }
    groupedByMilestone[item.milestone].push(item);
  });

  // We want to sort the milestones chronologically if timeline or keep order
  // For timeline tab, milestones are typically sorted. Let's obtain a unique list in original sequence
  const orderedMilestones: string[] = [];
  tabItems.forEach(item => {
    if (!orderedMilestones.includes(item.milestone)) {
      orderedMilestones.push(item.milestone);
    }
  });

  // Category beautiful badge colors mapping
  const getCategoryColor = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('venue')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (cat.includes('katering') || cat.includes('catering')) return 'bg-amber-100 text-amber-800 border-amber-200';
    if (cat.includes('dekorasi') || cat.includes('decoration')) return 'bg-purple-100 text-purple-800 border-purple-200';
    if (cat.includes('busana') || cat.includes('gaun') || cat.includes('suit')) return 'bg-pink-100 text-pink-800 border-pink-200';
    if (cat.includes('foto') || cat.includes('video') || cat.includes('dokumentasi')) return 'bg-sky-100 text-sky-800 border-sky-200';
    if (cat.includes('kua') || cat.includes('dokumen') || cat.includes('administrasi')) return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    if (cat.includes('budget') || cat.includes('keuangan')) return 'bg-green-100 text-green-800 border-green-200';
    if (cat.includes('kesehatan') || cat.includes('medical')) return 'bg-teal-100 text-teal-800 border-teal-200';
    if (cat.includes('entertainment') || cat.includes('musik') || cat.includes('mc')) return 'bg-indigo-100 text-indigo-800 border-indigo-200';
    if (cat.includes('suvenir') || cat.includes('hampers')) return 'bg-rose-100 text-rose-800 border-rose-200';
    if (cat.includes('cincin') || cat.includes('perhiasan')) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-zinc-100 text-zinc-800 border-zinc-200';
  };

  // Icon mapping for tabs
  const getTabIcon = (tab: TabType) => {
    switch (tab) {
      case 'timeline': return <Calendar className="w-4 h-4" />;
      case 'lamaran': return <Heart className="w-4 h-4" />;
      case 'prewedding': return <Camera className="w-4 h-4" />;
      case 'pengajian': return <BookOpen className="w-4 h-4" />;
      case 'akad': return <FileText className="w-4 h-4" />;
      case 'resepsi': return <Sparkles className="w-4 h-4" />;
      case 'kit': return <Luggage className="w-4 h-4" />;
    }
  };

  return (
    <div id="wedding-master-checklist-hub" className="bg-[#fcfbfa] border border-brand-beige-dark/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
      
      {/* Module Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-beige-dark/30 pb-5">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-brand-red flex items-center justify-center text-white shadow-xs">
            <ListTodo className="w-6 h-6" />
          </div>
          <div>
            <h2 className="serif-heading text-lg sm:text-xl font-black text-brand-slate uppercase tracking-wide flex items-center gap-1.5">
              <span>{language === 'IN' ? 'Master Planner & Checklist Pernikahan' : 'Wedding Master Planner & Checklist'}</span>
              <Sparkles className="w-4 h-4 text-brand-gold animate-bounce" />
            </h2>
            <p className="text-xs text-zinc-500 font-sans">
              {language === 'IN' 
                ? 'Rencanakan rangkaian ibadah terindah Anda secara terarah, interaktif, dan terstruktur rapi.' 
                : 'Plan your sacred union step-by-step with our structured interactive wedding planner.'}
            </p>
          </div>
        </div>

        {/* Global Progress Widget */}
        <div className="bg-brand-sky border border-brand-beige-dark/45 px-5 py-3 rounded-2xl flex items-center space-x-4 shrink-0 shadow-3xs">
          <div className="text-right">
            <div className="text-[10px] font-black uppercase tracking-wider text-zinc-500">
              {language === 'IN' ? 'Kesiapan Total' : 'Overall Progress'}
            </div>
            <div className="text-lg font-black text-brand-red font-mono">
              {checkedAllTabs} / {totalAllTabs} <span className="text-xs text-zinc-400 font-normal">({progressPercentGlobal}%)</span>
            </div>
          </div>
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Circular progress background */}
            <svg className="w-12 h-12 transform -rotate-90">
              <circle cx="24" cy="24" r="20" stroke="#eae7e1" strokeWidth="4" fill="transparent" />
              <circle cx="24" cy="24" r="20" stroke="#7d0000" strokeWidth="4" fill="transparent" 
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * (1 - progressPercentGlobal / 100)}`}
                className="transition-all duration-500 ease-out"
              />
            </svg>
            <span className="absolute text-[10px] font-extrabold text-brand-slate">{progressPercentGlobal}%</span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
        {(['timeline', 'lamaran', 'prewedding', 'pengajian', 'akad', 'resepsi', 'kit'] as TabType[]).map((tab) => {
          const tabLabelIN = 
            tab === 'timeline' ? 'Timeline' :
            tab === 'lamaran' ? 'Lamaran' :
            tab === 'prewedding' ? 'Pre-Wed' :
            tab === 'pengajian' ? 'Pengajian' :
            tab === 'akad' ? 'Akad Nikah' :
            tab === 'resepsi' ? 'Resepsi' : 'Prep Kit';

          const tabLabelEN = 
            tab === 'timeline' ? 'Timeline' :
            tab === 'lamaran' ? 'Engagement' :
            tab === 'prewedding' ? 'Pre-Wed' :
            tab === 'pengajian' ? 'Pre-Wed Prayer' :
            tab === 'akad' ? 'The Vow' :
            tab === 'resepsi' ? 'Reception' : 'Prep Kit';

          const isActive = activeTab === tab;
          const countTotal = items.filter(i => i.tab === tab).length;
          const countDone = items.filter(i => i.tab === tab && checkedIds[i.id]).length;
          const pct = countTotal > 0 ? Math.round((countDone / countTotal) * 100) : 0;

          return (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSearchQuery('');
              }}
              className={`p-3 rounded-xl border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                isActive 
                  ? 'bg-brand-red text-white border-brand-red shadow-xs ring-2 ring-brand-red/10' 
                  : 'bg-white hover:bg-[#fbf9f6] border-brand-beige-dark/35 text-brand-slate'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-1.5 rounded-lg ${isActive ? 'bg-white/10 text-white' : 'bg-brand-sky text-brand-slate'}`}>
                  {getTabIcon(tab)}
                </div>
                <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-brand-sky text-zinc-500'}`}>
                  {pct}%
                </span>
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-wider truncate">
                  {language === 'IN' ? tabLabelIN : tabLabelEN}
                </div>
                <div className={`text-[9px] font-medium mt-0.5 ${isActive ? 'text-brand-beige-light/80' : 'text-zinc-400'}`}>
                  {countDone}/{countTotal} Done
                </div>
              </div>
              {/* Micro bar line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10">
                <div className={`h-full ${isActive ? 'bg-white' : 'bg-brand-blue'}`} style={{ width: `${pct}%` }}></div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Tab Specific Progress & Filter Toolbar */}
      <div className="bg-[#f5f3ef] border border-brand-beige-dark/45 p-4 rounded-2xl space-y-4">
        
        {/* Statistics and action buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="serif-heading text-sm font-black text-brand-slate uppercase flex items-center space-x-1.5">
              <span>{getTabIcon(activeTab)}</span>
              <span>
                {activeTab === 'timeline' && (language === 'IN' ? 'Timeline Utama Langkah-demi-Langkah' : 'Step-by-Step Main Timeline')}
                {activeTab === 'lamaran' && (language === 'IN' ? 'Panduan Acara Lamaran Tradisional' : 'Engagement')}
                {activeTab === 'prewedding' && (language === 'IN' ? 'Prosedur & Pemotretan Pre-Wedding' : 'Preparation')}
                {activeTab === 'pengajian' && (language === 'IN' ? 'Persiapan Pengajian & Doa Bersama' : 'Pre-Wed Prayer')}
                {activeTab === 'akad' && (language === 'IN' ? 'Kelengkapan Akad Nikah (Ijab Kabul)' : 'The Vow')}
                {activeTab === 'resepsi' && (language === 'IN' ? 'Perencanaan Resepsi Pernikahan' : 'Reception')}
                {activeTab === 'kit' && (language === 'IN' ? 'Wedding Preparation Kit (Darurat Hari-H)' : 'Wedding Day Emergency Kit')}
              </span>
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-extrabold uppercase bg-brand-red/10 text-brand-red px-2 py-0.5 rounded-md">
                {checkedInCurrentTab} / {totalInCurrentTab} {language === 'IN' ? 'Terpenuhi' : 'Completed'}
              </span>
              <div className="w-24 h-1.5 bg-[#eae7e1] rounded-full overflow-hidden">
                <div className="h-full bg-brand-red" style={{ width: `${progressPercentTab}%` }}></div>
              </div>
              <span className="text-[10px] font-mono font-bold text-zinc-500">{progressPercentTab}%</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleCheckAllVisible(searchFilteredItems)}
              className="px-2.5 py-1.5 rounded-lg border border-brand-beige-dark/55 bg-white text-[10px] font-extrabold uppercase tracking-wide hover:bg-brand-sky transition cursor-pointer"
            >
              {language === 'IN' ? '☑ Centang Semua' : '☑ Check All'}
            </button>
            <button
              onClick={() => handleUncheckAllVisible(searchFilteredItems)}
              className="px-2.5 py-1.5 rounded-lg border border-brand-beige-dark/55 bg-white text-[10px] font-extrabold uppercase tracking-wide hover:bg-brand-sky transition cursor-pointer"
            >
              {language === 'IN' ? '☐ Kosongkan' : '☐ Uncheck All'}
            </button>
            <button
              onClick={handleResetCurrentTab}
              title="Reset current tab"
              className="p-1.5 rounded-lg border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Search Input Filter */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-brand-beige-dark" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'IN' ? 'Saring berdasarkan nama item, kategori, atau milestone...' : 'Filter by item, category, or milestone...'}
            className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-brand-beige-dark/50 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-brand-blue"
          />
        </div>

      </div>

      {/* Accordion List Content */}
      <div className="space-y-4">
        {orderedMilestones.length === 0 ? (
          <div className="text-center py-10 border border-dashed border-brand-beige-dark/40 rounded-2xl">
            <Bookmark className="w-10 h-10 text-zinc-300 mx-auto mb-2" />
            <p className="text-xs font-bold text-zinc-500">
              {language === 'IN' ? 'Tidak ada item checklist.' : 'No checklist items found.'}
            </p>
          </div>
        ) : (
          orderedMilestones.map((milestone) => {
            const milestoneKey = `${activeTab}-${milestone}`;
            const isExpanded = expandedMilestones[milestoneKey] !== false; // Default expanded
            const milestoneItems = groupedByMilestone[milestone] || [];
            
            if (milestoneItems.length === 0) return null;

            // Stats for this milestone
            const totalMilestone = tabItems.filter(i => i.milestone === milestone).length;
            const checkedMilestone = tabItems.filter(i => i.milestone === milestone && checkedIds[i.id]).length;
            const isCompleted = totalMilestone > 0 && totalMilestone === checkedMilestone;

            return (
              <div 
                key={milestone}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  isCompleted 
                    ? 'border-emerald-200/60 bg-emerald-50/10' 
                    : 'border-brand-beige-dark/30 bg-white'
                }`}
              >
                {/* Milestone Accordion Header */}
                <button
                  onClick={() => toggleMilestone(milestoneKey)}
                  className={`w-full px-5 py-3.5 flex items-center justify-between text-left transition-colors cursor-pointer ${
                    isCompleted 
                      ? 'bg-emerald-50/20 hover:bg-emerald-50/30' 
                      : 'hover:bg-[#fbf9f6]'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${isCompleted ? 'bg-emerald-500 animate-ping' : 'bg-brand-red'}`}></div>
                    <div>
                      <h4 className="serif-heading text-xs sm:text-sm font-extrabold text-brand-slate uppercase tracking-wide flex items-center gap-2">
                        <span>{milestone}</span>
                        {isCompleted && (
                          <span className="bg-emerald-500 text-white text-[9px] px-1.5 py-0.5 rounded-md font-bold flex items-center gap-0.5">
                            <Check className="w-2.5 h-2.5" />
                            {language === 'IN' ? 'Lengkap' : 'Ready'}
                          </span>
                        )}
                      </h4>
                      <p className="text-[10px] text-zinc-400 font-medium">
                        {checkedMilestone} dari {totalMilestone} item diselesaikan ({Math.round((checkedMilestone/totalMilestone)*100)}%)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {/* Tiny Progress Bar */}
                    <div className="w-16 h-1.5 bg-[#eae7e1] rounded-full overflow-hidden hidden xs:block">
                      <div className={`h-full ${isCompleted ? 'bg-emerald-500' : 'bg-brand-red'}`} style={{ width: `${(checkedMilestone/totalMilestone)*100}%` }}></div>
                    </div>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-zinc-400" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
                  </div>
                </button>

                {/* Collapsible item rows */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden border-t border-brand-beige-dark/20"
                    >
                      <div className="divide-y divide-brand-beige-dark/20">
                        {milestoneItems.map((item) => {
                          const isChecked = !!checkedIds[item.id];
                          const itemName = language === 'IN' ? item.nameIN : item.nameEN;

                          return (
                            <div 
                              key={item.id}
                              className={`p-4 flex items-start gap-3 transition-colors ${
                                isChecked ? 'bg-brand-sky/15 text-zinc-400' : 'bg-white hover:bg-brand-sky/10'
                              }`}
                            >
                              {/* Clickable Area for Checklist */}
                              <button
                                onClick={() => handleToggleItem(item.id)}
                                className="mt-0.5 text-brand-slate hover:text-brand-red focus:outline-hidden shrink-0 cursor-pointer"
                              >
                                {isChecked ? (
                                  <CheckCircle2 className="w-5 h-5 text-brand-blue fill-current" />
                                ) : (
                                  <div className="w-5 h-5 rounded-md border border-brand-beige-dark/80 bg-white hover:border-brand-red transition" />
                                )}
                              </button>

                              {/* Item Text & Badges */}
                              <div className="flex-grow min-w-0">
                                <div className="flex flex-wrap items-center gap-1.5 mb-1">
                                  {/* Category Badge */}
                                  <span className={`text-[9px] font-extrabold uppercase border px-2 py-0.5 rounded-md ${getCategoryColor(item.category)}`}>
                                    {item.category}
                                  </span>
                                  {item.isCustom && (
                                    <span className="text-[9px] font-bold uppercase bg-brand-gold/10 text-yellow-700 border border-yellow-200 px-1.5 py-0.5 rounded-md">
                                      {language === 'IN' ? 'Kustom' : 'Custom'}
                                    </span>
                                  )}
                                </div>
                                <p className={`text-xs leading-relaxed font-sans ${isChecked ? 'line-through text-zinc-400 font-medium' : 'text-[#374151] font-semibold'}`}>
                                  {itemName}
                                </p>
                              </div>

                              {/* Custom items deletion */}
                              {item.isCustom && (
                                <button
                                  onClick={() => handleDeleteCustomItem(item.id)}
                                  className="text-zinc-300 hover:text-red-500 hover:bg-red-50 p-1 rounded-lg transition shrink-0 cursor-pointer"
                                  title={language === 'IN' ? 'Hapus' : 'Delete'}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>

      {/* Add Custom Item form & Reset All footer */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-brand-beige-dark/30">
        
        {/* Custom Item Form */}
        <form onSubmit={handleAddCustomItem} className="md:col-span-8 bg-brand-sky/20 border border-brand-beige-dark/35 rounded-2xl p-4 flex flex-col sm:flex-row gap-3">
          <div className="flex-grow space-y-1">
            <label className="text-[10px] font-black uppercase tracking-wider text-zinc-500 block">
              {language === 'IN' ? 'Tambahkan Item Rencana Kustom' : 'Add Custom Planning Item'}
            </label>
            <input
              type="text"
              required
              value={newCustomName}
              onChange={(e) => setNewCustomName(e.target.value)}
              placeholder={language === 'IN' ? 'Contoh: Booking kain khusus di Pasar Baru...' : 'E.g. Book custom fabrics at vendor market...'}
              className="w-full px-3 py-1.5 text-xs bg-white border border-brand-beige-dark/50 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-brand-blue"
            />
          </div>
          <div className="w-full sm:w-36 space-y-1 shrink-0">
            <label className="text-[10px] font-black uppercase tracking-wider text-zinc-500 block">
              {language === 'IN' ? 'Kategori' : 'Category'}
            </label>
            <input
              type="text"
              value={newCustomCategory}
              onChange={(e) => setNewCustomCategory(e.target.value)}
              placeholder={language === 'IN' ? 'Misal: Busana' : 'E.g. Apparel'}
              className="w-full px-3 py-1.5 text-xs bg-white border border-brand-beige-dark/50 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-brand-blue"
            />
          </div>
          <button
            type="submit"
            className="self-end px-4 py-2 bg-brand-blue hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center space-x-1 cursor-pointer w-full sm:w-auto h-9"
          >
            <Plus className="w-4 h-4" />
            <span>{language === 'IN' ? 'Tambah' : 'Add'}</span>
          </button>
        </form>

        {/* Global Reset Option */}
        <div className="md:col-span-4 bg-red-50/10 border border-red-200/40 p-4 rounded-2xl flex flex-col justify-between">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-wider text-red-700 flex items-center space-x-1">
              <span>⚠️</span>
              <span>{language === 'IN' ? 'Zona Bahaya' : 'Danger Zone'}</span>
            </h4>
            <p className="text-[10px] text-zinc-500 leading-relaxed mt-1">
              {language === 'IN' 
                ? 'Atur ulang seluruh progres perencanaan di seluruh tab dan hapus semua data kustom yang tersimpan.' 
                : 'Reset your entire wedding planning progress across all tabs and erase all stored custom items.'}
            </p>
          </div>
          <button
            onClick={handleResetAll}
            className="mt-3 w-full py-1.5 border border-red-200 bg-white hover:bg-red-50 text-red-700 font-extrabold text-[10px] uppercase tracking-wider rounded-xl transition flex items-center justify-center space-x-1.5 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{language === 'IN' ? 'Atur Ulang Seluruh Progres' : 'Reset All Progress'}</span>
          </button>
        </div>

      </div>

    </div>
  );
}
