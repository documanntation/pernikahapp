import React, { useState, useEffect } from 'react';
import { 
  addResource, 
  deleteResource, 
  deleteUserSubmission, 
  approveUserSubmission, 
  fetchResources, 
  fetchUserSubmissions 
} from '../firebase';
import { CATEGORIES } from '../resourcesData';
import { ResourceType, Resource, UserSubmission } from '../types';
import { 
  Database, 
  Check, 
  Sparkles, 
  Image as ImageIcon, 
  Link2, 
  Lock, 
  Trash2, 
  CheckCircle, 
  PlusCircle, 
  Settings2, 
  X, 
  ExternalLink 
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { TranslationBundle } from '../locales/translations';

const PRESET_THUMBNAILS = [
  { name: "Cincin & Akad", url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&auto=format&fit=crop&q=80" },
  { name: "Dekorasi Venue", url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&auto=format&fit=crop&q=80" },
  { name: "Buku Kajian", url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=80" },
  { name: "Makan & Katering", url: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&auto=format&fit=crop&q=80" },
  { name: "Psikologi Pasutri", url: "https://images.unsplash.com/photo-1527137341206-1a2ab86131f9?w=600&auto=format&fit=crop&q=80" },
  { name: "Konsultasi / KUA", url: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80" },
];

interface AdminPanelProps {
  onResourceAdded: () => void;
  onClose: () => void;
}

export default function AdminPanel({ onResourceAdded, onClose }: AdminPanelProps) {
  const { t } = useLanguage();
  
  // Passcode authentication states
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Nav Tabs inside admin panel: 'publish' | 'manage'
  const [activeSubTab, setActiveSubTab] = useState<'publish' | 'manage'>('publish');

  // Form Field States
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('taaruf');
  const [resourceType, setResourceType] = useState<ResourceType>('youtube');
  const [url, setUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [creator, setCreator] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Administrative lists states
  const [adminResources, setAdminResources] = useState<Resource[]>([]);
  const [adminSubmissions, setAdminSubmissions] = useState<UserSubmission[]>([]);
  const [listLoading, setListLoading] = useState(false);

  // Elegant, sandbox-compatible in-app action/toast states
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [deleteSubConfirmId, setDeleteSubConfirmId] = useState<string | null>(null);
  const [inlineAlert, setInlineAlert] = useState<{ message: string; type: 'success' | 'error' | null }>({ message: '', type: null });

  const triggerInlineAlert = (message: string, type: 'success' | 'error') => {
    setInlineAlert({ message, type });
    setTimeout(() => {
      setInlineAlert({ message: '', type: null });
    }, 4500);
  };

  // Passcode submit handler
  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'admiNikah') {
      setIsAuthenticated(true);
      setPasscodeError('');
    } else {
      setPasscodeError(t('adminPasscodeError') || 'Kode rahasia salah! Silakan coba lagi.');
    }
  };

  // Sync data across admin views
  const refreshAdminLists = async () => {
    setListLoading(true);
    try {
      const resData = await fetchResources();
      const subData = await fetchUserSubmissions();
      setAdminResources(resData);
      setAdminSubmissions(subData);
    } catch (err) {
      console.error("Failed to load admin lists:", err);
    } finally {
      setListLoading(false);
    }
  };

  // Load lists once authenticated or tab switches
  useEffect(() => {
    if (isAuthenticated) {
      refreshAdminLists();
    }
  }, [isAuthenticated]);

  // Form submission for adding structured curated resources
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !url.trim()) {
      triggerInlineAlert(t('proposalEmptyWarning') || 'Harap isi semua kolom wajib!', 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      await addResource({
        title,
        description,
        category,
        resourceType,
        url,
        thumbnailUrl: thumbnailUrl.trim() || undefined,
        creator: creator.trim() || undefined
      });
      setSuccess(true);
      setTitle('');
      setDescription('');
      setUrl('');
      setThumbnailUrl('');
      setCreator('');
      
      // Sync parent app and local manage views
      onResourceAdded();
      refreshAdminLists();
      
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      triggerInlineAlert(t('adminErrorMsg') || 'Gagal menambahkan materi.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Administrative Delete resource
  const handleDeleteResource = async (id: string) => {
    try {
      await deleteResource(id);
      setDeleteConfirmId(null);
      triggerInlineAlert("Materi berhasil dihapus secara permanen dari basis data.", 'success');
      onResourceAdded();
      refreshAdminLists();
    } catch (err) {
      console.error("Gagal menghapus resource:", err);
      triggerInlineAlert("Gagal menghapus materi. Silakan coba lagi.", 'error');
    }
  };

  // Administrative Delete user submission
  const handleDeleteSubmission = async (id: string) => {
    try {
      await deleteUserSubmission(id);
      setDeleteSubConfirmId(null);
      triggerInlineAlert("Usulan atau request berhasil ditolak / dihapus dari database.", 'success');
      refreshAdminLists();
    } catch (err) {
      console.error("Gagal menghapus usulan:", err);
      triggerInlineAlert("Gagal menghapus usulan.", 'error');
    }
  };

  // Administrative ACC / Approve user submission
  const handleApproveSubmission = async (id: string) => {
    try {
      await approveUserSubmission(id);
      triggerInlineAlert("Usulan berhasil disetujui (ACC) dan langsung terbit di halaman beranda!", 'success');
      onResourceAdded(); // Sync main homepage
      refreshAdminLists(); // Sync current table
    } catch (err) {
      console.error("Gagal menyetujui usulan:", err);
      triggerInlineAlert("Gagal menyetujui usulan.", 'error');
    }
  };

  const getCategoryName = (catId: string) => {
    const translationKey = `cat_name_${catId}` as keyof TranslationBundle;
    const translatedName = t(translationKey);
    if (translatedName && translatedName !== translationKey) return translatedName;
    const found = CATEGORIES.find(c => c.id === catId);
    return found ? found.name : catId;
  };

  const selectThumbnailPreset = (presetUrl: string) => {
    setThumbnailUrl(presetUrl);
  };

  // === PASSCODE GATE VIEW ===
  if (!isAuthenticated) {
    return (
      <div className="bg-[#fcfbfa] border-b border-brand-beige-dark/50 shadow-xs mb-8">
        <div className="max-w-md mx-auto px-4 py-12 text-center">
          <div className="w-14 h-14 rounded-full bg-brand-burgundy text-white flex items-center justify-center mx-auto mb-4 shadow-md">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="serif-heading text-lg font-bold text-brand-slate mb-2">
            {t('adminPasscodeTitle') || "Akses Panel Admin Terbatas"}
          </h3>
          <p className="text-xs text-[#6b7280] mb-6">
            Masukkan kode rahasia khusus pengelola PernikahApp untuk mengelola database dan memoderasi usulan.
          </p>
          
          <form onSubmit={handlePasscodeSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setPasscodeError('');
                }}
                placeholder={t('adminPasscodePlaceholder') || "Masukkan kode rahasia (admiNikah)..."}
                className="w-full text-center px-4 py-2.5 bg-white border border-brand-beige-dark/60 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue/30 focus:outline-hidden font-mono tracking-wider font-bold shadow-xs text-brand-slate"
                required
              />
              {passcodeError && (
                <p className="text-brand-red font-bold text-[11px] mt-2 block">
                  ⚠️ {passcodeError}
                </p>
              )}
            </div>
            
            <div className="flex space-x-3 justify-center">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-zinc-300 text-xs font-bold text-[#6b7280] hover:bg-zinc-100 transition cursor-pointer"
              >
                {t('btnCancel') || "Batal"}
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-brand-red hover:bg-brand-burgundy text-white text-xs font-bold tracking-wide transition shadow-sm cursor-pointer animate-pulse"
              >
                {t('adminPasscodeSubmit') || "Verifikasi Kode"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // === AUTHENTICATED PANEL VIEW ===
  return (
    <div className="bg-[#fcfbfa] border-b border-brand-beige-dark/50 shadow-xs mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Banner header of panel */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-brand-beige-dark/40 pb-5 mb-6 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center text-white">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="serif-heading text-xl font-bold text-brand-slate">
                  {t('adminTitle')}
                </h2>
                <span className="bg-emerald-100 text-emerald-800 text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-wider uppercase">
                  Verified Curator
                </span>
              </div>
              <p className="text-xs text-[#6b7280]">
                {t('adminDesc')}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-full border border-zinc-300 text-xs font-bold text-[#6b7280] hover:bg-zinc-100 transition cursor-pointer flex items-center space-x-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>{t('adminHideBtn')}</span>
            </button>
          </div>
        </div>

        {/* Tab Selector bar inside Admin */}
        <div className="flex border-b border-brand-beige-dark/40 mb-6 space-x-2">
          <button
            onClick={() => setActiveSubTab('publish')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition flex items-center space-x-1.5 cursor-pointer ${
              activeSubTab === 'publish'
                ? 'border-brand-red text-brand-red'
                : 'border-transparent text-zinc-500 hover:text-brand-slate'
            }`}
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Tambah Resource Baru</span>
          </button>
          <button
            onClick={() => {
              setActiveSubTab('manage');
              refreshAdminLists();
            }}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition flex items-center space-x-1.5 cursor-pointer ${
              activeSubTab === 'manage'
                ? 'border-brand-red text-brand-red'
                : 'border-transparent text-zinc-500 hover:text-brand-slate'
            }`}
          >
            <Settings2 className="w-3.5 h-3.5" />
            <span>Kelola Database & Usulan ({adminSubmissions.filter(s => s.status !== 'approved').length} Baru)</span>
          </button>
        </div>

        {inlineAlert.message && (
          <div className={`mb-6 p-4 rounded-xl text-xs font-bold flex items-center space-x-2 border transition-all animate-fadeIn ${
            inlineAlert.type === 'success' 
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
              : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            <Sparkles className="w-4 h-4 flex-shrink-0 text-amber-500 animate-pulse" />
            <span>{inlineAlert.message}</span>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-bold flex items-center space-x-2">
            <Check className="w-4 h-4" />
            <span>{t('adminSuccessMsg')}</span>
          </div>
        )}

        {/* ========================================== */}
        {/* VIEW A: PUBLISH NEW MATERIALS FORM         */}
        {/* ========================================== */}
        {activeSubTab === 'publish' && (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Info Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#4b5563] mb-1.5 uppercase tracking-wider">{t('adminFormTitle')}</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={t('adminFormTitlePlaceholder')}
                  className="w-full px-4 py-2 bg-white border border-brand-beige-dark rounded-lg text-xs focus:ring-2 focus:ring-brand-blue/30 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4b5563] mb-1.5 uppercase tracking-wider">{t('adminFormDesc')}</label>
                <textarea
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={t('adminFormDescPlaceholder')}
                  className="w-full px-4 py-2 bg-white border border-brand-beige-dark rounded-lg text-xs focus:ring-2 focus:ring-brand-blue/30 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#4b5563] mb-1.5 uppercase tracking-wider">{t('adminFormCategory')}</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-brand-beige-dark rounded-lg text-xs focus:outline-hidden text-brand-slate font-medium"
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat.id} value={cat.id}>{getCategoryName(cat.id)}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4b5563] mb-1.5 uppercase tracking-wider">{t('adminFormMediaType')}</label>
                  <select
                    value={resourceType}
                    onChange={(e) => setResourceType(e.target.value as ResourceType)}
                    className="w-full px-3 py-2 bg-white border border-brand-beige-dark rounded-lg text-xs focus:outline-hidden text-brand-slate font-medium"
                  >
                    <option value="youtube">YouTube</option>
                    <option value="instagram">Instagram</option>
                    <option value="book">Ebook / Buku</option>
                    <option value="course">Kelas Online</option>
                    <option value="website">Situs Web</option>
                    <option value="other">Lainnya / Rekomendasi</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Media Links & Visual Thumbnails */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#4b5563] mb-1.5 uppercase tracking-wider">{t('adminFormLink')}</label>
                <div className="relative">
                  <Link2 className="absolute left-3 top-2.5 w-4 h-4 text-brand-beige-dark" />
                  <input
                    type="url"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder={t('adminFormLinkPlaceholder')}
                    className="w-full pl-9 pr-4 py-2 bg-white border border-brand-beige-dark rounded-lg text-xs focus:outline-hidden focus:ring-2 focus:ring-brand-blue/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#4b5563] mb-1.5 uppercase tracking-wider">{t('adminFormCreator')}</label>
                  <input
                    type="text"
                    value={creator}
                    onChange={(e) => setCreator(e.target.value)}
                    placeholder={t('adminFormCreatorPlaceholder')}
                    className="w-full px-4 py-2 bg-white border border-brand-beige-dark rounded-lg text-xs focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4b5563] mb-1.5 uppercase tracking-wider">{t('adminFormThumbnail')}</label>
                  <div className="relative">
                    <ImageIcon className="absolute left-3 top-2.5 w-4 h-4 text-brand-beige-dark" />
                    <input
                      type="url"
                      value={thumbnailUrl}
                      onChange={(e) => setThumbnailUrl(e.target.value)}
                      placeholder={t('adminFormThumbnailPlaceholder')}
                      className="w-full pl-9 pr-4 py-2 bg-white border border-brand-beige-dark rounded-lg text-xs focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Presets Thumbnails suggestion */}
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{t('adminFormPresetsLabel')}</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PRESET_THUMBNAILS.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => selectThumbnailPreset(p.url)}
                      className="group relative h-12 rounded-lg overflow-hidden border border-brand-beige-dark/40 text-left hover:border-brand-blue transition-all cursor-pointer"
                    >
                      <img src={p.url} className="w-full h-full object-cover opacity-80 group-hover:opacity-100" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-1">
                        <span className="text-[8px] font-bold text-white text-center leading-tight">{p.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Card Preview */}
              <div className="bg-[#f5f3ef] border border-brand-beige-dark/50 p-4 rounded-xl flex items-center space-x-4">
                <div className="w-20 h-16 rounded-md bg-[#e3dfd5] overflow-hidden flex-shrink-0">
                  {thumbnailUrl ? (
                    <img src={thumbnailUrl} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                  )}
                </div>
                <div className="text-[11px] text-[#4b5563]">
                  <p className="font-bold text-brand-slate line-clamp-1">{title || t('adminFormPreviewTitle')}</p>
                  <p className="line-clamp-1">{description || t('adminFormPreviewDesc')}</p>
                  <p className="font-mono text-[9px] text-[#6b7280]">Tipe: {resourceType} | Kategori: {getCategoryName(category)}</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-lg bg-brand-blue hover:bg-blue-700 text-white text-xs font-bold tracking-wide transition shadow-sm cursor-pointer"
                >
                  {isSubmitting ? t('adminFormSubmittingBtn') : t('adminFormSubmitBtn')}
                </button>
              </div>
            </div>
          </form>
        )}

        {/* ========================================== */}
        {/* VIEW B: MANAGE DATABASE & CHRONOLOGY MOD   */}
        {/* ========================================== */}
        {activeSubTab === 'manage' && (
          <div className="space-y-8">
            {listLoading ? (
              <div className="py-20 text-center">
                <div className="w-9 h-9 border-2 border-brand-red border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                <p className="text-xs font-bold text-[#9ca3af] uppercase tracking-widest">Sinkronisasi Database Pengelola...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* 1. Main Curated Catalog List in Database (Left side: 5 cols) */}
                <div className="lg:col-span-5 bg-white border border-brand-beige-dark/50 p-5 rounded-2xl">
                  <h3 className="serif-heading text-sm font-extrabold text-brand-slate uppercase tracking-wider mb-4 flex items-center justify-between">
                    <span>Materi Aktif di Katalog ({adminResources.length})</span>
                    <span className="text-[10px] bg-brand-sky text-zinc-600 px-2 py-0.5 rounded-full font-mono font-bold">
                      Katalog
                    </span>
                  </h3>
                  
                  <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                    {adminResources.map((res) => (
                      <div 
                        key={res.id} 
                        className="p-3 bg-[#fdfcfb] hover:bg-brand-beige-light/15 border border-brand-beige-dark/40 rounded-xl flex items-start justify-between gap-3 text-xs"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-brand-slate line-clamp-1">{res.title}</p>
                          <p className="text-[10px] text-zinc-500 line-clamp-1">{res.description}</p>
                          <div className="flex gap-2 mt-1.5 text-[9px] font-mono text-zinc-400">
                            <span className="uppercase text-brand-blue font-extrabold">{res.resourceType}</span>
                            <span>•</span>
                            <span className="truncate max-w-[120px] font-sans font-semibold text-zinc-600">{getCategoryName(res.category)}</span>
                          </div>
                        </div>
                        {deleteConfirmId === res.id ? (
                          <div className="flex items-center space-x-1.5 flex-shrink-0 animate-fadeIn bg-red-50 border border-red-200 p-1.5 rounded-lg">
                            <span className="text-[10px] text-brand-red font-bold">Hapus?</span>
                            <button
                              onClick={() => handleDeleteResource(res.id)}
                              className="px-2 py-0.5 bg-brand-red hover:bg-[#a71d2a] text-white rounded-md text-[9px] font-extrabold cursor-pointer transition uppercase"
                            >
                              Ya
                            </button>
                            <button
                              onClick={() => setDeleteConfirmId(null)}
                              className="px-2 py-0.5 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 rounded-md text-[9px] font-extrabold cursor-pointer transition uppercase"
                            >
                              No
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeleteConfirmId(res.id)}
                            className="text-brand-red hover:bg-[#fff5f5] p-2 rounded-lg border border-transparent hover:border-red-100 transition flex-shrink-0 cursor-pointer"
                            title="Hapus Dari Katalog"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    ))}
                    {adminResources.length === 0 && (
                      <p className="text-zinc-400 text-xs text-center py-10 italic">Tidak ada materi ditemukan.</p>
                    )}
                  </div>
                </div>

                {/* 2. User Proposed Recommendations & Requests (Right side: 7 cols) */}
                <div className="lg:col-span-7 bg-white border border-brand-beige-dark/50 p-5 rounded-2xl">
                  <h3 className="serif-heading text-sm font-extrabold text-brand-slate uppercase tracking-wider mb-4 flex items-center justify-between">
                    <span>Moderasi Usulan & Request Masuk ({adminSubmissions.length})</span>
                    <span className="text-[10px] bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full font-bold">
                      Moderasi
                    </span>
                  </h3>

                  <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
                    {adminSubmissions.map((sub) => {
                      const isPending = sub.status !== 'approved';
                      return (
                        <div 
                          key={sub.id} 
                          className={`p-4 rounded-xl border transition ${
                            isPending 
                              ? 'bg-amber-50/20 border-amber-200/60 hover:bg-amber-50/45' 
                              : 'bg-emerald-50/10 border-emerald-100'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4 mb-2 text-xs">
                            <div className="min-w-0 flex-1">
                              <span className={`inline-block px-2 py-0.5 rounded-sm text-[9px] font-extrabold uppercase mb-1.5 tracking-wider ${
                                sub.isRequest 
                                  ? 'bg-purple-100 text-purple-800' 
                                  : 'bg-indigo-100 text-indigo-800'
                              }`}>
                                {sub.isRequest ? "💡 REQUEST TEMA" : "📝 REKOMENDASI MATERI"}
                              </span>
                              
                              <h4 className="font-extrabold text-zinc-950 text-[13px] leading-tight">
                                {sub.title}
                              </h4>
                              <p className="text-zinc-500 font-sans text-xs mt-1 leading-relaxed">
                                {sub.description}
                              </p>
                            </div>
                            
                            {/* Moderation Status badge */}
                            <div>
                              {isPending ? (
                                <span className="bg-amber-100 border border-amber-200 text-amber-800 text-[10px] px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap">
                                  Menunggu ACC
                                </span>
                              ) : (
                                <span className="bg-emerald-100 border border-emerald-200 text-emerald-800 text-[10px] px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap flex items-center space-x-1">
                                  <Check className="w-3 h-3" />
                                  <span>Disetujui</span>
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Request Meta details */}
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-zinc-500 font-sans pb-3 mb-3 border-b border-zinc-100 italic">
                            <span>Oleh: <strong className="text-zinc-700 not-italic font-semibold">{sub.submittedBy}</strong></span>
                            <span>•</span>
                            <span>Kategori: <strong className="text-zinc-700 not-italic font-semibold">{getCategoryName(sub.category)}</strong></span>
                            {sub.url && (
                              <>
                                <span>•</span>
                                <a 
                                  href={sub.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="text-brand-blue hover:underline inline-flex items-center space-x-0.5 not-italic font-bold"
                                >
                                  <span>Lihat Tautan</span>
                                  <ExternalLink className="w-2.5 h-2.5" />
                                </a>
                              </>
                            )}
                          </div>

                          {/* Control action triggers */}
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-mono text-zinc-400">
                              Diusulkan: {new Date(sub.createdAt).toLocaleDateString()}
                            </span>
                            
                            <div className="flex items-center space-x-2">
                              {/* If pending, let curator ACC (approve) it */}
                              {isPending && (
                                <button
                                  onClick={() => handleApproveSubmission(sub.id)}
                                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold leading-none flex items-center space-x-1 shadow-xs cursor-pointer transform active:scale-95 transition"
                                  title="Approve / ACC Usulan"
                                >
                                  <CheckCircle className="w-3.5 h-3.5" />
                                  <span>Setujui (ACC)</span>
                                </button>
                              )}
                              
                              {/* Reject/Delete usulan */}
                              {deleteSubConfirmId === sub.id ? (
                                <div className="flex items-center space-x-1.5 animate-fadeIn bg-red-50 border border-red-100 p-1.5 rounded-lg">
                                  <span className="text-[10px] text-brand-red font-bold hidden sm:inline">Konfirmasi Hapus?</span>
                                  <button
                                    onClick={() => handleDeleteSubmission(sub.id)}
                                    className="px-2.5 py-1 bg-brand-red hover:bg-[#a71d2a] text-white text-[10px] font-black rounded-md cursor-pointer transition uppercase"
                                  >
                                    Ya, Hapus
                                  </button>
                                  <button
                                    onClick={() => setDeleteSubConfirmId(null)}
                                    className="px-2.5 py-1 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 text-[10px] font-black rounded-md cursor-pointer transition uppercase"
                                  >
                                    Batal
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => setDeleteSubConfirmId(sub.id)}
                                  className="px-3 py-1.5 rounded-lg border border-red-200 text-brand-red hover:bg-red-50 text-xs font-bold leading-none flex items-center space-x-1 cursor-pointer transition"
                                  title="Hapus / Tolak Usulan"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                  <span>{isPending ? "Tolak" : "Hapus Record"}</span>
                                </button>
                              )}
                            </div>
                          </div>

                        </div>
                      );
                    })}
                    {adminSubmissions.length === 0 && (
                      <p className="text-zinc-400 text-xs text-center py-10 italic">Tidak ada usulan atau request masuk.</p>
                    )}
                  </div>
                </div>

              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
