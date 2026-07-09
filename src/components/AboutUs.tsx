import React from 'react';
import { Heart, ShieldCheck, Flame, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <div className="text-center mb-12">
        <h1 className="serif-heading text-4xl sm:text-5xl font-bold text-brand-red mb-3">
          {t('aboutHeaderTitle')} <span className="script-accent text-5xl text-brand-blue font-light">{t('aboutHeaderPromo')}</span>
        </h1>
        <p className="text-md text-[#4b5563] max-w-xl mx-auto leading-relaxed">
          {t('aboutHeaderDesc')}
        </p>
      </div>

      {/* Philosophy of PernikahApp */}
      <div className="bg-[#f5f3ef] border border-brand-beige-dark/50 rounded-2xl p-6 sm:p-10 mb-12 shadow-xs">
        <div className="flex items-center space-x-3 mb-6">
          <Heart className="w-6 h-6 text-brand-red fill-current" />
          <h2 className="serif-heading text-2xl font-bold text-brand-red">{t('aboutTitle')}</h2>
        </div>
        
        <p className="text-sm text-[#374151] leading-relaxed mb-6">
          {t('aboutSectionP1')}
        </p>

        <p className="text-sm text-[#374151] leading-relaxed mb-6">
          {t('aboutSectionP2')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-5 rounded-xl border border-brand-beige-dark/30 shadow-xs">
            <h3 className="serif-heading text-lg font-semibold text-brand-red mb-2 flex items-center space-x-2">
              <span className="w-1.5 h-6 bg-brand-red rounded-full block"></span>
              <span>{t('weddingPlanTitle')}</span>
            </h3>
            <p className="text-xs text-[#6b7280] leading-relaxed">
              {t('weddingPlanDesc')}
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-brand-beige-dark/30 shadow-xs">
            <h3 className="serif-heading text-lg font-semibold text-brand-blue mb-2 flex items-center space-x-2">
              <span className="w-1.5 h-6 bg-brand-blue rounded-full block"></span>
              <span>{t('marriagePlanTitle')}</span>
            </h3>
            <p className="text-xs text-[#6b7280] leading-relaxed">
              {t('marriagePlanDesc')}
            </p>
          </div>
        </div>
      </div>

      {/* Target and Values */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="text-center p-6 bg-white border border-brand-beige-dark/40 rounded-xl">
          <div className="w-10 h-10 mx-auto rounded-full bg-brand-red/10 flex items-center justify-center mb-4">
            <ShieldCheck className="w-5 h-5 text-brand-red" />
          </div>
          <h4 className="font-semibold text-brand-slate text-sm mb-1">{t('valueCurationTitle')}</h4>
          <p className="text-xs text-[#6b7280]">
            {t('valueCurationDesc')}
          </p>
        </div>

        <div className="text-center p-6 bg-white border border-brand-beige-dark/40 rounded-xl">
          <div className="w-10 h-10 mx-auto rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
            <Flame className="w-5 h-5 text-brand-blue" />
          </div>
          <h4 className="font-semibold text-brand-slate text-sm mb-1">{t('valueAccessTitle')}</h4>
          <p className="text-xs text-[#6b7280]">
            {t('valueAccessDesc')}
          </p>
        </div>

        <div className="text-center p-6 bg-white border border-brand-beige-dark/40 rounded-xl">
          <div className="w-10 h-10 mx-auto rounded-full bg-brand-gold/15 flex items-center justify-center mb-4">
            <Star className="w-4 h-4 text-amber-600 fill-current" />
          </div>
          <h4 className="font-semibold text-brand-slate text-sm mb-1">{t('valueInvolvementTitle')}</h4>
          <p className="text-xs text-[#6b7280]">
            {t('valueInvolvementDesc')}
          </p>
        </div>
      </div>

      {/* Warm Quote */}
      <div className="text-center py-6 border-y border-brand-beige-dark/40">
        <p className="script-accent text-3xl text-brand-red italic mb-1">
          {t('quoteText')}
        </p>
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#9ca3af]">{t('quoteAuthor')}</span>
      </div>
    </div>
  );
}
