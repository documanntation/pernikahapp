import React, { useState } from 'react';
import { Sparkles, ClipboardCheck, Users, Book, Download, Mail, Award, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { TranslationBundle } from '../locales/translations';

export default function ComingSoonFeatures() {
  const { t } = useLanguage();

  // Quiz states
  const [readinessScore, setReadinessScore] = useState<number | null>(null);
  const [q1, setQ1] = useState(0); // 0-10
  const [q2, setQ2] = useState(0); // 0-10
  const [q3, setQ3] = useState(0); // 0-10
  const [isCalculated, setIsCalculated] = useState(false);

  // Email state for e-book
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Match Criteria State
  const [criteria, setCriteria] = useState([
    { id: 1, selected: false },
    { id: 2, selected: false },
    { id: 3, selected: false },
    { id: 4, selected: false },
    { id: 5, selected: false },
  ]);

  const criteriaLabelsMap: Record<number, keyof TranslationBundle> = {
    1: 'matcherLabel1',
    2: 'matcherLabel2',
    3: 'matcherLabel3',
    4: 'matcherLabel4',
    5: 'matcherLabel5',
  };

  const handleToggleCriteria = (id: number) => {
    setCriteria(prev => prev.map(c => c.id === id ? { ...c, selected: !c.selected } : c));
  };

  const calculateReadiness = () => {
    const total = q1 + q2 + q3;
    const percentage = Math.round((total / 30) * 100);
    setReadinessScore(percentage);
    setIsCalculated(true);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmailInput('');
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center">
        <span className="px-4 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-bold text-brand-blue uppercase tracking-widest inline-flex items-center space-x-1.5">
          <Sparkles className="w-3.5 h-3.5 animate-spin text-brand-blue" />
          <span>{t('sandboxBadge')}</span>
        </span>
        <h1 className="serif-heading text-4xl font-extrabold text-brand-red mt-3 mb-2">
          {t('interactiveHubTitle')}
        </h1>
        <p className="text-sm text-[#52525b] max-w-xl mx-auto">
          {t('interactiveHubDesc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* ======================================= */}
        {/* MODULE 1: READINESS CALCULATOR (COMING SOON PROTO) */}
        {/* ======================================= */}
        <div className="bg-white border border-brand-beige-dark/50 rounded-2xl p-6 shadow-2xs flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-brand-red text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-xs">
            {t('comingSoonProBadge')}
          </div>
          
          <div>
            <div className="flex items-center space-x-2.5 mb-5 border-b border-[#f1f0ec] pb-3">
              <ClipboardCheck className="w-5.5 h-5.5 text-brand-red" />
              <h2 className="serif-heading text-lg font-bold text-brand-slate">
                {t('readinessAnalyzerTitle')}
              </h2>
            </div>
            <p className="text-xs text-[#52525b] mb-6 leading-relaxed">
              {t('readinessAnalyzerDesc')}
            </p>

            {/* Simulated interactive Quiz */}
            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between items-center text-xs text-[#4b5563] font-bold mb-1">
                  <span>{t('readinessLabelMental')}</span>
                  <span className="text-brand-red">{q1} / 10</span>
                </div>
                <input 
                  type="range" min="0" max="10" value={q1} onChange={(e)=>setQ1(Number(e.target.value))}
                  className="w-full accent-brand-red cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs text-[#4b5563] font-bold mb-1">
                  <span>{t('readinessLabelFinancial')}</span>
                  <span className="text-brand-red">{q2} / 10</span>
                </div>
                <input 
                  type="range" min="0" max="10" value={q2} onChange={(e)=>setQ2(Number(e.target.value))}
                  className="w-full accent-brand-red cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs text-[#4b5563] font-bold mb-1">
                  <span>{t('readinessLabelVision')}</span>
                  <span className="text-brand-red">{q3} / 10</span>
                </div>
                <input 
                  type="range" min="0" max="10" value={q3} onChange={(e)=>setQ3(Number(e.target.value))}
                  className="w-full accent-brand-red cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              id="btn-calculate-readiness"
              onClick={calculateReadiness}
              className="w-full py-2.5 rounded-lg text-xs font-bold text-white bg-brand-red hover:bg-brand-burgundy transition shadow-sm mb-4"
            >
              {t('btnCalculateReadiness')}
            </button>

            <AnimatePresence>
              {isCalculated && readinessScore !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-[#fcfbfa] border border-brand-beige-dark/50 p-4 rounded-xl text-center"
                >
                  <p className="text-xs text-[#6b7280] font-semibold">{t('scoreAnalysisLabel')}</p>
                  <div className="text-3xl font-black text-brand-blue serif-heading my-1">{readinessScore}%</div>
                  
                  {/* Progress bar */}
                  <div className="w-full h-2 bg-[#eae7e1] rounded-full overflow-hidden mb-3">
                    <div className="h-full bg-brand-blue" style={{ width: `${readinessScore}%` }}></div>
                  </div>

                  <p className="text-[10px] text-zinc-500 italic">
                    {readinessScore >= 80 ? t('analysisExcellent') : 
                     readinessScore >= 50 ? t('analysisGood') :
                     t('analysisNeedsStudy')}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ======================================= */}
        {/* MODULE 2: COMPATIBILITY CRITERIA CHECK (COMING SOON PROTO) */}
        {/* ======================================= */}
        <div className="bg-white border border-brand-beige-dark/50 rounded-2xl p-6 shadow-2xs flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-brand-blue text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-xs">
            {t('comingSoonProBadge')}
          </div>

          <div>
            <div className="flex items-center space-x-2.5 mb-5 border-b border-[#f1f0ec] pb-3">
              <Users className="w-5.5 h-5.5 text-brand-blue" />
              <h2 className="serif-heading text-lg font-bold text-brand-slate">
                {t('valueMatcherTitle')}
              </h2>
            </div>
            <p className="text-xs text-[#52525b] mb-4 leading-relaxed">
              {t('valueMatcherDesc')}
            </p>

            {/* Interactive check items */}
            <div className="space-y-2 mb-4">
              {criteria.map((c) => {
                const label = t(criteriaLabelsMap[c.id]);
                return (
                  <button
                    key={c.id}
                    onClick={() => handleToggleCriteria(c.id)}
                    className={`w-full text-left p-3 rounded-lg border text-xs font-semibold flex items-center justify-between transition-all ${
                      c.selected 
                        ? 'bg-brand-blue/5 border-brand-blue/40 text-brand-blue' 
                        : 'bg-[#fcfbfa] border-brand-beige-dark/30 hover:bg-zinc-50 text-zinc-600'
                    }`}
                  >
                    <span>{label}</span>
                    <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center ${
                      c.selected ? 'bg-brand-blue border-brand-blue text-white' : 'border-zinc-300'
                    }`}>
                      {c.selected && <span className="text-[10px] font-extrabold">✓</span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="bg-brand-beige-light/25 border border-brand-beige-dark/40 p-3.5 rounded-xl text-center">
              <p className="text-[10px] font-bold text-brand-slate uppercase tracking-wider flex items-center justify-center space-x-1">
                <Award className="w-3.5 h-3.5 text-brand-gold" />
                <span>{t('matcherCheckedCount', { count: criteria.filter(c=>c.selected).length, total: criteria.length })}</span>
              </p>
              <p className="text-[9px] text-zinc-500 mt-1">
                {t('matcherFooterDesc')}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ======================================= */}
      {/* MODULE 3: E-BOOK DOWNLOAD LIST (COMING SOON FORM) */}
      {/* ======================================= */}
      <div className="bg-[#f5f3ef] border border-brand-beige-dark rounded-2xl p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute top-4 right-4 bg-brand-gold text-brand-slate text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-xs">
          {t('exclusivePreOrderBadge')}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center space-x-2">
              <Book className="w-6 h-6 text-brand-red" />
              <h3 className="serif-heading text-xl sm:text-2xl font-bold text-brand-red">
                {t('ebookTitle')}
              </h3>
            </div>
            
            <p className="text-xs text-[#4b5563] leading-relaxed">
              {t('ebookDesc')}
            </p>

            <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider text-brand-slate">
              <span className="bg-white/80 border border-brand-beige-dark/60 px-2.5 py-1 rounded-md">{t('ebookBullet1')}</span>
              <span className="bg-white/80 border border-brand-beige-dark/60 px-2.5 py-1 rounded-md">{t('ebookBullet2')}</span>
              <span className="bg-white/80 border border-brand-beige-dark/60 px-2.5 py-1 rounded-md">{t('ebookBullet3')}</span>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="bg-white border border-brand-beige-dark/60 p-6 rounded-xl shadow-xs">
              <h4 className="font-bold text-brand-slate text-xs mb-2">{t('ebookPromoTitle')}</h4>
              
              {isSubscribed ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-center py-4 bg-emerald-50 border border-emerald-100 rounded-lg"
                >
                  <Trophy className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-xs font-bold text-emerald-800">{t('preorderSuccessTitle')}</p>
                  <p className="text-[10px] text-emerald-700 mt-1">{t('preorderSuccessDesc')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-2.5 top-2.5 w-4 h-4 text-brand-beige-dark" />
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder={t('ebookEmailPlaceholder')}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-brand-sky border border-brand-beige-dark/60 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-brand-blue"
                    />
                  </div>
                  <button
                    type="submit"
                    id="btn-preorder-ebook"
                    className="w-full py-2 bg-brand-blue hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition-all flex items-center justify-center space-x-1 shadow-xs cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{t('btnPreorderEbook')}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
