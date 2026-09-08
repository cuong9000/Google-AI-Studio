/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { VoucherSection } from './components/VoucherSection';
import { BenefitsSection } from './components/BenefitsSection';
import { StepsSection } from './components/StepsSection';
import { FaqSection } from './components/FaqSection';
import { PreFooterCta } from './components/PreFooterCta';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { LoginModal } from './components/LoginModal';
import { DomainCartModal } from './components/DomainCartModal';
import { Toast } from './components/Toast';
import { Layers, UserPlus, LogIn, ShoppingCart, Home } from 'lucide-react';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isDomainCartOpen, setIsDomainCartOpen] = useState(false);
  const [activePromoCode, setActivePromoCode] = useState('CPNEWIDHE70');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3000);
  };

  const handleOpenRegisterWithCode = (code?: string) => {
    if (code) {
      setActivePromoCode(code);
    }
    setIsRegisterOpen(true);
  };

  const handleApplyVoucherToCart = (code: string) => {
    setActivePromoCode(code);
    setIsDomainCartOpen(true);
    showToast(`Đang mở giỏ hàng với mã: ${code}`);
  };

  const handleRegisterSuccess = (email: string) => {
    showToast(`Tài khoản ${email} đã tạo thành công!`);
    setIsRegisterOpen(false);
    setIsDomainCartOpen(true);
  };

  const handleLoginSuccess = (email: string) => {
    showToast(`Chào mừng quay trở lại, ${email}!`);
    setIsLoginOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 relative">
      {/* Top Main Navigation Header */}
      <Header
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenDomainCart={() => setIsDomainCartOpen(true)}
        cartCount={1}
      />

      {/* Main Page Layout Sections */}
      <main className="flex-1">
        {/* Section 1: Hero with 3D UI Browser Window */}
        <HeroSection onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* Section 2: Vouchers & Exclusive Offers */}
        <VoucherSection
          onOpenRegister={handleOpenRegisterWithCode}
          onApplyVoucherToCart={handleApplyVoucherToCart}
          onShowToast={showToast}
        />

        {/* Section 3: Why Choose Tenten (5 Benefits) */}
        <BenefitsSection />

        {/* Section 4: 8-Step Registration & Activation Flow */}
        <StepsSection
          onOpenRegister={() => setIsRegisterOpen(true)}
          onOpenDomainCart={() => setIsDomainCartOpen(true)}
        />

        {/* Section 5: FAQ Accordion */}
        <FaqSection />

        {/* Section 6: Pre-Footer Call to Action Banner */}
        <PreFooterCta onOpenRegister={() => setIsRegisterOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Screen Explorer Floating Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 px-3 py-2 bg-slate-900/90 text-white rounded-2xl shadow-2xl backdrop-blur-md border border-slate-700/60 flex items-center gap-1 sm:gap-2 max-w-[95vw] overflow-x-auto">
        <div className="flex items-center gap-1 px-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 border-r border-slate-700 pr-2.5 mr-1">
          <Layers className="w-3.5 h-3.5 text-[#0062E0]" />
          <span className="hidden sm:inline">Xem màn hình:</span>
        </div>

        <button
          onClick={() => {
            setIsRegisterOpen(false);
            setIsLoginOpen(false);
            setIsDomainCartOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-slate-800 text-xs font-semibold transition-colors shrink-0 text-slate-200"
        >
          <Home className="w-3.5 h-3.5 text-[#0062E0]" />
          <span>Trang chủ ưu đãi</span>
        </button>

        <button
          onClick={() => {
            setIsLoginOpen(false);
            setIsDomainCartOpen(false);
            setIsRegisterOpen(true);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-slate-800 text-xs font-semibold transition-colors shrink-0 text-slate-200"
        >
          <UserPlus className="w-3.5 h-3.5 text-blue-400" />
          <span>Màn hình Đăng ký</span>
        </button>

        <button
          onClick={() => {
            setIsRegisterOpen(false);
            setIsDomainCartOpen(false);
            setIsLoginOpen(true);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-slate-800 text-xs font-semibold transition-colors shrink-0 text-slate-200"
        >
          <LogIn className="w-3.5 h-3.5 text-cyan-400" />
          <span>Màn hình Đăng nhập</span>
        </button>

        <button
          onClick={() => {
            setIsRegisterOpen(false);
            setIsLoginOpen(false);
            setIsDomainCartOpen(true);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0062E0] hover:bg-[#0052CC] text-white text-xs font-bold transition-all shrink-0 shadow-md shadow-blue-600/30"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          <span>Tra cứu &amp; Giỏ hàng</span>
        </button>
      </div>

      {/* Screen Modals */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        initialVoucherCode={activePromoCode}
        onSuccess={handleRegisterSuccess}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
        onLoginSuccess={handleLoginSuccess}
      />

      <DomainCartModal
        isOpen={isDomainCartOpen}
        onClose={() => setIsDomainCartOpen(false)}
        initialPromoCode={activePromoCode}
        onShowToast={showToast}
      />

      {/* Toast Feedback */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
