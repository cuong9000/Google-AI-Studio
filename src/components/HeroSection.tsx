import React from 'react';
import { ArrowRight, Check, Zap, Clock, User, Plus } from 'lucide-react';

interface HeroSectionProps {
  onOpenRegister: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-blue-50/60 via-white to-[#F8FAFC]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-200/40 via-cyan-100/30 to-indigo-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-blue-100/80 border border-blue-200/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0062E0] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0052CC]">
                ĐẶC QUYỀN TÀI KHOẢN MỚI
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Bắt đầu dễ dàng<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062E0] via-[#0052CC] to-[#00D2FF]">
                Nhận ngay ưu đãi
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Trải nghiệm dịch vụ <span className="font-semibold text-slate-800">Tenten.vn</span> với hàng loạt voucher hấp dẫn cùng hạ tầng đám mây tốc độ cao khi đăng ký tài khoản mới hôm nay.
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenRegister}
                id="hero-cta-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0062E0] hover:bg-[#0052CC] text-white font-bold text-base shadow-glow-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/30 cursor-pointer group"
              >
                <span>Tạo tài khoản ngay</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Microcopy Features */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm font-semibold text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-600">
                <Check className="w-4 h-4 text-emerald-500 stroke-[2.5]" />
                Miễn phí
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <Zap className="w-4 h-4 text-[#0062E0]" />
                Nhanh chóng
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <Clock className="w-4 h-4 text-[#0062E0]" />
                Chỉ mất 1 phút
              </span>
            </div>
          </div>

          {/* Right Column: 3D UI Illustration & Mockup */}
          <div className="lg:col-span-5 relative flex justify-center perspective-1000">
            {/* Hand-drawn style floating arrow note */}
            <div className="absolute -top-10 right-4 sm:right-10 flex flex-col items-center pointer-events-none z-20">
              <span className="text-[#0062E0] font-bold text-sm tracking-wide transform -rotate-6 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-md border border-blue-100 animate-bounce">
                Đăng ký ngay hôm nay! ✨
              </span>
              <svg
                className="w-10 h-10 text-[#0062E0] transform rotate-12 -mt-1 drop-shadow-sm"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* 3D Card Mockup Container */}
            <div
              onClick={onOpenRegister}
              className="w-full max-w-sm sm:max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 card-3d-tilt relative z-10 cursor-pointer group"
              title="Nhấn để mở giao diện đăng ký tài khoản Tenten.vn"
            >
              {/* Card Browser Window Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                </div>
                <div className="text-[11px] font-semibold text-slate-400 tracking-wide">
                  id.tenten.vn/register
                </div>
              </div>

              {/* Content Mockup: Account Avatar & Form Skeleton */}
              <div className="py-7 flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-100 to-cyan-100 p-1 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-sm">
                    <User className="w-10 h-10 text-[#0062E0]" />
                  </div>
                </div>

                {/* Skeletal Input Bars */}
                <div className="w-full space-y-2.5 max-w-xs pt-1">
                  <div className="h-3.5 bg-blue-50 rounded-full w-3/4 mx-auto"></div>
                  <div className="h-3 bg-slate-100 rounded-full w-1/2 mx-auto"></div>
                </div>

                {/* Mock Form Inputs */}
                <div className="w-full pt-3 space-y-2.5 text-left">
                  <div className="h-10 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center px-3.5 text-xs text-slate-500 justify-between group-hover:border-blue-300 transition-colors">
                    <span>name@domain.vn</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  </div>

                  <div className="h-10 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center px-3.5 text-xs text-slate-500 justify-between group-hover:border-blue-300 transition-colors">
                    <span className="tracking-widest">••••••••••••</span>
                    <span className="text-[11px] text-[#0062E0] font-bold bg-blue-50 px-2 py-0.5 rounded">
                      Mạnh
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative 3D Plus Floating Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenRegister();
                }}
                className="absolute -bottom-5 -right-5 w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0052CC] to-[#0062E0] text-white flex items-center justify-center shadow-xl shadow-blue-600/40 border-4 border-white hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                title="Tạo tài khoản mới ngay"
              >
                <Plus className="w-7 h-7 stroke-[2.5]" />
              </button>
            </div>

            {/* Soft background accent shape */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-3xl -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
