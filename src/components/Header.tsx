import React, { useState } from 'react';
import { Menu, X, Sparkles, User, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
  onOpenDomainCart: () => void;
  cartCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenRegister,
  onOpenLogin,
  onOpenDomainCart,
  cartCount = 1,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Tenten Logo Mark */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0052CC] to-[#00D2FF] flex items-center justify-center text-white font-black text-xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            T
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-slate-900 leading-none">
              Tenten<span className="text-[#0062E0]">.vn</span>
            </span>
            <span className="text-[10px] tracking-wider text-slate-400 font-semibold uppercase mt-0.5">
              Cloud &amp; Hosting
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-sm">
          <button
            onClick={onOpenDomainCart}
            className="hover:text-[#0062E0] transition-colors cursor-pointer"
          >
            Tên miền
          </button>
          <a href="#vouchers" className="hover:text-[#0062E0] transition-colors">
            Hosting
          </a>
          <a href="#loi-ich" className="hover:text-[#0062E0] transition-colors">
            Giải pháp
          </a>
          <a
            href="#vouchers"
            className="text-[#0062E0] font-semibold flex items-center gap-1.5 hover:text-blue-700"
          >
            <span>Ưu đãi</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </a>
          <a href="#huong-dan" className="hover:text-[#0062E0] transition-colors">
            Hỗ trợ
          </a>
        </nav>

        {/* Right Action CTA */}
        <div className="flex items-center gap-3">
          {/* Domain & Cart Quick Button */}
          <button
            onClick={onOpenDomainCart}
            className="relative p-2 rounded-xl text-slate-600 hover:text-[#0062E0] hover:bg-slate-100 transition-colors"
            title="Xem giỏ hàng & thử mã ưu đãi"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenLogin}
            className="hidden sm:inline-block text-sm font-semibold text-slate-700 hover:text-[#0062E0] px-4 py-2 transition-colors cursor-pointer"
          >
            Đăng nhập
          </button>

          <button
            onClick={onOpenRegister}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0062E0] hover:bg-[#0052CC] text-white font-semibold text-sm shadow-md shadow-blue-600/25 transition-all hover:shadow-lg hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Đăng ký
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <button
              onClick={() => {
                onOpenDomainCart();
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-[#0062E0]"
            >
              Tên miền &amp; Giỏ hàng
            </button>
            <a
              href="#vouchers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Hosting &amp; Voucher
            </a>
            <a
              href="#loi-ich"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Giải pháp &amp; Lợi ích
            </a>
            <a
              href="#huong-dan"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Hướng dẫn 8 bước
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Hỏi đáp FAQ
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenLogin();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl"
            >
              Đăng nhập
            </button>
            <button
              onClick={() => {
                onOpenRegister();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-[#0062E0] rounded-xl shadow-md shadow-blue-600/20"
            >
              Đăng ký nhận ưu đãi
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
