'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent_accepted');
    if (!consent) {
      setShowBanner(true);
      // Small delay to allow the CSS transition to trigger after mount
      setTimeout(() => setIsVisible(true), 10);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem('cookie_consent_accepted', 'true');
    // Wait for animation to finish before removing from DOM
    setTimeout(() => setShowBanner(false), 300);
  };

  if (!showBanner) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 text-white p-4 md:p-6 z-[100] transition-all duration-300 ease-in-out transform shadow-[0_-8px_30px_rgb(0,0,0,0.12)] ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm md:text-base text-slate-300 flex-1">
          Deneyiminizi iyileştirmek ve site trafiğini analiz etmek için çerezler kullanıyoruz. Sitemizi kullanarak çerez kullanımını kabul etmiş sayılırsınız.
        </div>
        <button
          onClick={handleAccept}
          className="whitespace-nowrap bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-2.5 px-8 rounded-lg transition-all hover:scale-105 active:scale-95 w-full sm:w-auto shadow-lg shadow-amber-500/20"
        >
          Kabul Et
        </button>
      </div>
    </div>
  );
}
