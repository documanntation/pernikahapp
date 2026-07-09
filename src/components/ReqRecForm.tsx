import React, { useState, useEffect } from 'react';
import { UserSubmission, CategorySpec, ResourceType } from '../types';
import { CATEGORIES } from '../resourcesData';
import { addUserSubmission, fetchUserSubmissions } from '../firebase';
import { PlusCircle, MessageSquare, Lightbulb, User, Link2, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { TranslationBundle } from '../locales/translations';

interface ReqRecFormProps {
  categories: CategorySpec[];
}

export default function ReqRecForm({ categories }: ReqRecFormProps) {
  const { language, t } = useLanguage();
  const [submissions, setSubmissions] = useState<UserSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterType, setFilterType] = useState<'all' | 'requests' | 'recommendations'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Form Field States
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(categories[0]?.id || 'taaruf');
  const [isRequest, setIsRequest] = useState(true); // true = request topic, false = recommend resource
  const [resourceType, setResourceType] = useState<ResourceType>('youtube');
  const [url, setUrl] = useState('');
  const [submittedBy, setSubmittedBy] = useState('');

  // Success Notification
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Load Submissions
  const loadData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchUserSubmissions();
      setSubmissions(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const triggerNotice = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !submittedBy.trim()) {
      triggerNotice(t('proposalEmptyWarning'), "error");
      return;
    }

    try {
      const payload = {
        title,
        description,
        category,
        isRequest,
        submittedBy,
        ...(isRequest ? {} : { resourceType, url })
      };

      const newSub = await addUserSubmission(payload);
      setSubmissions(prev => [newSub, ...prev]);
      
      // Reset form
      setTitle('');
      setDescription('');
      setUrl('');
      setSubmittedBy('');
      
      triggerNotice(isRequest ? t('proposalSuccessRequest') : t('proposalSuccessRecommend'));
    } catch (err) {
      triggerNotice(t('proposalError'), "error");
    }
  };

  // Filter & Search logic
  const filteredSubmissions = submissions.filter(sub => {
    const matchesSearch = sub.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          sub.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sub.submittedBy.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filterType === 'requests') {
      return matchesSearch && sub.isRequest;
    }
    if (filterType === 'recommendations') {
      return matchesSearch && !sub.isRequest;
    }
    return matchesSearch;
  });

  const getCategoryName = (catId: string) => {
    const translationKey = `cat_name_${catId}` as keyof TranslationBundle;
    const translatedName = t(translationKey);
    if (translatedName && translatedName !== translationKey) return translatedName;
    const found = CATEGORIES.find(c => c.id === catId);
    return found ? found.name : catId;
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* Toast popup alerts */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 16 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-lg border text-xs font-bold flex items-center space-x-2 ${
              notification.type === 'error' 
                ? 'bg-rose-50 border-rose-200 text-rose-800' 
                : 'bg-emerald-50 border-emerald-200 text-emerald-800'
            }`}
          >
            <span>{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mb-10">
        <h1 className="serif-heading text-4xl font-extrabold text-brand-red mb-2">
          {t('reqRecTitle')}
        </h1>
        <p className="text-sm text-[#52525b] max-w-xl mx-auto">
          {t('reqRecDesc')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* ======================================= */}
        {/* LEFT COLUMN: CRU CREATION FORM          */}
        {/* ======================================= */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-brand-beige-dark/50 rounded-2xl p-6 shadow-xs sticky top-28">
            <h2 className="serif-heading text-xl font-bold text-brand-slate mb-5 flex items-center space-x-2">
              <PlusCircle className="w-5 h-5 text-brand-red" />
              <span>{t('proposalFormTitle')}</span>
            </h2>

            {/* Selector Request vs recommendation */}
            <div className="grid grid-cols-2 gap-2 mb-6 bg-[#f5f3ef] p-1.5 rounded-xl border border-brand-beige-dark/30">
              <button
                type="button"
                id="toggle-request"
                onClick={() => setIsRequest(true)}
                className={`flex items-center justify-center space-x-1.5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                  isRequest 
                    ? 'bg-brand-red text-white shadow-xs' 
                    : 'text-brand-slate hover:bg-[#eae7e1]'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t('proposalTypeRequest')}</span>
              </button>
              <button
                type="button"
                id="toggle-recommend"
                onClick={() => setIsRequest(false)}
                className={`flex items-center justify-center space-x-1.5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                  !isRequest 
                    ? 'bg-brand-blue text-white shadow-xs' 
                    : 'text-brand-slate hover:bg-[#eae7e1]'
                }`}
              >
                <Lightbulb className="w-4 h-4" />
                <span>{t('proposalTypeRecommend')}</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title Input */}
              <div>
                <label className="block text-xs font-bold text-[#4b5563] mb-1.5 uppercase tracking-wide">
                  {isRequest ? t('labelInputTitleRequest') : t('labelInputTitleRecommend')}
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={isRequest ? t('placeholderInputTitleRequest') : t('placeholderInputTitleRecommend')}
                  className="w-full px-4 py-2.5 text-xs bg-brand-beige-light/15 border border-brand-beige-dark/50 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                />
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="block text-xs font-bold text-[#4b5563] mb-1.5 uppercase tracking-wide">
                  {t('labelInputCategory')}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs bg-brand-beige-light/15 border border-brand-beige-dark/50 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-brand-blue/30"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {getCategoryName(cat.id)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Specific inputs for Recommendation */}
              {!isRequest && (
                <div className="space-y-4 p-4 bg-brand-beige-light/20 rounded-xl border border-brand-beige-dark/30">
                  <div>
                    <label className="block text-xs font-bold text-[#4b5563] mb-1.5 uppercase tracking-wide">
                      {t('labelInputMediaType')}
                    </label>
                    <select
                      value={resourceType}
                      onChange={(e) => setResourceType(e.target.value as ResourceType)}
                      className="w-full px-4 py-2 bg-white border border-brand-beige-dark/50 rounded-lg text-xs focus:outline-hidden"
                    >
                      <option value="youtube">YouTube Video</option>
                      <option value="instagram">Instagram Account / Link</option>
                      <option value="book">Buku Fisik / Ebook</option>
                      <option value="course">Kursus / Kelas Online</option>
                      <option value="website">Situs Berita / Blog</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#4b5563] mb-1.5 uppercase tracking-wide">
                      {t('labelInputUrl')}
                    </label>
                    <div className="relative">
                      <Link2 className="absolute left-3 top-2.5 w-4 h-4 text-brand-beige-dark" />
                      <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://example.com"
                        className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-brand-beige-dark/50 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-brand-blue/30"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Description textarea */}
              <div>
                <label className="block text-xs font-bold text-[#4b5563] mb-1.5 uppercase tracking-wide">
                  {isRequest ? t('labelInputDescRequest') : t('labelInputDescRecommend')}
                </label>
                <textarea
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={isRequest ? t('placeholderInputDescRequest') : t('placeholderInputDescRecommend')}
                  className="w-full px-4 py-2.5 text-xs bg-brand-beige-light/15 border border-brand-beige-dark/50 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-brand-blue/30"
                ></textarea>
              </div>

              {/* Submitter Name */}
              <div>
                <label className="block text-xs font-bold text-[#4b5563] mb-1.5 uppercase tracking-wide">
                  {t('labelInputSubmitter')}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 w-4 h-4 text-brand-beige-dark" />
                  <input
                    type="text"
                    required
                    value={submittedBy}
                    onChange={(e) => setSubmittedBy(e.target.value)}
                    placeholder={t('placeholderInputSubmitter')}
                    className="w-full pl-9 pr-4 py-2 text-xs bg-brand-beige-light/15 border border-brand-beige-dark/50 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-brand-blue/30"
                  />
                </div>
              </div>

              {/* Send Button */}
              <button
                type="submit"
                id="btn-submit-proposal"
                className={`w-full py-3 rounded-lg text-xs font-bold tracking-wide text-white transition-all transform hover:scale-[1.01] cursor-pointer ${
                  isRequest ? 'bg-brand-red hover:bg-brand-burgundy shadow-sm' : 'bg-brand-blue hover:bg-blue-700 shadow-sm'
                }`}
              >
                {t('btnSubmitProposal')} {isRequest ? t('proposalTypeRequest') : t('proposalTypeRecommend')}
              </button>
            </form>
          </div>
        </div>

        {/* ======================================= */}
        {/* RIGHT COLUMN: READ & UPDATE (CRU) FEED */}
        {/* ======================================= */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Filtering Header */}
          <div className="bg-white border border-brand-beige-dark/30 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
            <div className="flex space-x-1.5">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1.5 rounded-md text-[11px] font-bold transition-all ${
                  filterType === 'all' ? 'bg-brand-slate text-white' : 'text-brand-slate hover:bg-brand-beige-light/30'
                }`}
              >
                {t('feedFilterAll')} ({submissions.length})
              </button>
              <button
                onClick={() => setFilterType('requests')}
                className={`px-3 py-1.5 rounded-md text-[11px] font-bold transition-all ${
                  filterType === 'requests' ? 'bg-brand-red text-white' : 'text-brand-red hover:bg-brand-red/10'
                }`}
              >
                {t('feedFilterRequests')} ({submissions.filter(s=>s.isRequest).length})
              </button>
              <button
                onClick={() => setFilterType('recommendations')}
                className={`px-3 py-1.5 rounded-md text-[11px] font-bold transition-all ${
                  filterType === 'recommendations' ? 'bg-brand-blue text-white' : 'text-brand-blue hover:bg-brand-blue/10'
                }`}
              >
                {t('feedFilterRecommendations')} ({submissions.filter(s=>!s.isRequest).length})
              </button>
            </div>

            {/* Micro search */}
            <div className="relative w-full sm:w-48">
              <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-brand-beige-dark" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('feedSearchPlaceholder')}
                className="w-full pl-8 pr-3 py-2 text-[10px] bg-brand-sky border border-brand-beige-dark/50 rounded-md focus:outline-hidden"
              />
            </div>
          </div>

          {/* Submissions List */}
          {isLoading ? (
            <div className="py-20 text-center text-zinc-500 text-xs">
              <span className="animate-spin inline-block w-6 h-6 border-2 border-brand-red border-t-transparent rounded-full mr-2"></span>
              {t('loading')}
            </div>
          ) : filteredSubmissions.length === 0 ? (
            <div className="bg-[#fcfbfa] border border-dashed border-brand-beige-dark/60 rounded-2xl py-20 text-center">
              <MessageSquare className="w-10 h-10 text-brand-beige-dark mx-auto mb-3" />
              <p className="text-sm font-bold text-brand-slate mb-1">{t('feedEmptyTitle')}</p>
              <p className="text-xs text-brand-beige-dark px-10">
                {t('feedEmptyDesc')}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredSubmissions.map((item) => {
                  return (
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.25 }}
                      className={`border border-brand-beige-dark/45 p-5 rounded-2xl shadow-2xs transition-all bg-white hover:border-brand-beige-dark/80`}
                    >
                      {/* Top metadata */}
                      <div className="flex items-center justify-between mb-3 border-b border-[#f1f0ec] pb-2 text-[10px] font-sans">
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                            item.isRequest ? 'bg-brand-red/10 text-brand-red' : 'bg-brand-blue/10 text-brand-blue'
                          }`}>
                            {item.isRequest ? t('proposalTypeRequest') : t('proposalTypeRecommend')}
                          </span>
                          {item.status === 'approved' && (
                            <span className="bg-emerald-100/85 text-emerald-800 border border-emerald-200 text-[8px] sm:text-[9px] px-2 py-0.5 font-extrabold rounded-md flex items-center space-x-0.5">
                              <span>✓ Approved / ACC</span>
                            </span>
                          )}
                          <span className="text-[#9ca3af]">|</span>
                          <span className="text-zinc-500 font-semibold flex items-center">
                            <User className="w-3 h-3 mr-1" /> {item.submittedBy}
                          </span>
                        </div>
                        <span className="text-[#9ca3af] font-mono">
                          {new Date(item.createdAt).toLocaleDateString(language === 'IN' ? 'id-ID' : 'en-US', {day: 'numeric', month: 'short'})}
                        </span>
                      </div>

                      {/* Standard Read View */}
                      <div>
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="serif-heading text-base font-bold text-brand-slate mb-1">
                              {item.title}
                            </h3>
                            <p className="text-[10px] font-bold text-[#4582b4] uppercase tracking-wider mb-2">
                              {t('feedCategoryLabel')} {getCategoryName(item.category)}
                            </p>
                          </div>
                        </div>

                        <p className="text-xs text-zinc-600 leading-relaxed mb-4 whitespace-pre-line">
                          {item.description}
                        </p>

                        {item.url && (
                          <div className="mb-4">
                            <a 
                              href={item.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-[10px] font-bold text-brand-blue underline hover:text-brand-red"
                            >
                              <Link2 className="w-3.5 h-3.5 mr-1" />
                              {t('feedVisitLink')}
                            </a>
                          </div>
                        )}

                        {/* Status Footer */}
                        <div className="flex items-center justify-end pt-2 border-t border-brand-beige-dark/20 text-[10px] text-[#84817a]">
                          {item.updatedAt && (
                            <span className="text-[9px] font-mono italic text-[#9ca3af]">
                              {t('feedUpdatedLabel')} {new Date(item.updatedAt).toLocaleDateString(language === 'IN' ? 'id-ID' : 'en-US')}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
