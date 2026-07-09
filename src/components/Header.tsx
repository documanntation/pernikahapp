import React from "react";
import { Heart, Landmark, Layers, HelpCircle, ShieldCheck } from "lucide-react";
import { isFirebaseReady } from "../firebase";
import { useLanguage } from "../contexts/LanguageContext";

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  showAdmin: boolean;
  setShowAdmin: (show: boolean) => void;
}

export default function Header({
  currentTab,
  setCurrentTab,
  showAdmin,
  setShowAdmin,
}: HeaderProps) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-[#fcfbfa]/90 backdrop-blur-md border-b border-brand-beige-dark/40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Brand / PernikahApp */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setCurrentTab("home")}
          >
            <div className="w-11 h-11 rounded-full bg-brand-red flex items-center justify-center text-white shadow-md transform hover:rotate-12 transition-transform duration-300">
              <Heart className="w-6 h-6 fill-current animate-pulse" />
            </div>
            <div>
              <div className="flex items-baseline space-x-1">
                <span className="script-accent text-2xl font-bold tracking-wide text-brand-red">
                  {t("appName")}
                </span>
                <span className="script-accent text-2xl text-brand-blue leading-none">
                  {t("appSubtitle")}
                </span>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-[#6b7280] font-semibold -mt-1 font-sans">
                your companion for the sacred union
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            <button
              id="nav-home"
              onClick={() => {
                setCurrentTab("home");
                setShowAdmin(false);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                currentTab === "home" && !showAdmin
                  ? "bg-brand-red text-white shadow-sm"
                  : "text-brand-slate hover:bg-brand-beige-light/30"
              }`}
            >
              {t("navHome")}
            </button>
            <button
              id="nav-about"
              onClick={() => {
                setCurrentTab("about");
                setShowAdmin(false);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                currentTab === "about" && !showAdmin
                  ? "bg-brand-red text-white shadow-sm"
                  : "text-brand-slate hover:bg-brand-beige-light/30"
              }`}
            >
              {t("navAboutUs")}
            </button>
            <button
              id="nav-req-rec"
              onClick={() => {
                setCurrentTab("reqrec");
                setShowAdmin(false);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                currentTab === "reqrec" && !showAdmin
                  ? "bg-brand-red text-white shadow-sm"
                  : "text-brand-slate hover:bg-brand-beige-light/30"
              }`}
            >
              {t("navReqRec")}
            </button>
            <button
              id="nav-coming-soon"
              onClick={() => {
                setCurrentTab("frameworks");
                setShowAdmin(false);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                currentTab === "frameworks" && !showAdmin
                  ? "bg-brand-red text-white shadow-sm"
                  : "text-brand-slate hover:bg-brand-beige-light/30"
              }`}
            >
              {t("navInteractiveHub")}{" "}
              <span className="ml-1 text-[9px] px-1.5 py-0.5 rounded-full bg-brand-blue text-white scale-90">
                {t("navSoonBadge")}
              </span>
            </button>
          </nav>

          {/* Database Admin Mode Toggle & Firebase Connection Status + Lang Switch */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            {/* IN-EN Language Switcher Toggle */}
            <button
              id="btn-lang-switch"
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full text-xs font-extrabold bg-brand-sky border border-brand-beige-dark/45 text-brand-slate hover:bg-brand-blue/10 hover:text-brand-blue hover:border-brand-blue/35 transition cursor-pointer flex items-center space-x-1"
              title="Ganti Bahasa / Switch Language"
            >
              <span>🌐</span>
              <span>{language}</span>
            </button>

            <button
              id="btn-admin-panel"
              onClick={() => setShowAdmin(!showAdmin)}
              className={`px-3 py-1.5 rounded-full text-[11px] lg:text-xs font-semibold tracking-wide border transition-all duration-300 flex items-center space-x-1.5 ${
                showAdmin
                  ? "bg-brand-blue text-white border-brand-blue shadow-xs"
                  : "bg-transparent text-brand-blue border-brand-blue/30 hover:bg-brand-blue/10"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{t("adminPanelBtn")}</span>
            </button>
          </div>
        </div>

        {/* Mobile Submenu Navigation */}
        <div className="md:hidden flex justify-center py-2 border-t border-brand-beige-dark/20 space-x-1 overflow-x-auto pb-3">
          <button
            id="mob-nav-home"
            onClick={() => {
              setCurrentTab("home");
              setShowAdmin(false);
            }}
            className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase shrink-0 ${
              currentTab === "home" && !showAdmin
                ? "bg-brand-red text-white"
                : "text-brand-slate"
            }`}
          >
            {t("navHome")}
          </button>
          <button
            id="mob-nav-about"
            onClick={() => {
              setCurrentTab("about");
              setShowAdmin(false);
            }}
            className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase shrink-0 ${
              currentTab === "about" && !showAdmin
                ? "bg-brand-red text-white"
                : "text-brand-slate"
            }`}
          >
            {t("navAboutUs")}
          </button>
          <button
            id="mob-nav-reqrec"
            onClick={() => {
              setCurrentTab("reqrec");
              setShowAdmin(false);
            }}
            className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase shrink-0 ${
              currentTab === "reqrec" && !showAdmin
                ? "bg-brand-red text-white"
                : "text-brand-slate"
            }`}
          >
            {t("navReqRec")}
          </button>
          <button
            id="mob-nav-frameworks"
            onClick={() => {
              setCurrentTab("frameworks");
              setShowAdmin(false);
            }}
            className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase shrink-0 ${
              currentTab === "frameworks" && !showAdmin
                ? "bg-brand-red text-white"
                : "text-brand-slate"
            }`}
          >
            {t("navInteractiveHub")}
          </button>
        </div>
      </div>
    </header>
  );
}
