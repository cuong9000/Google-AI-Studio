import React from 'react';
import { Mail, Search, ShoppingBag, Check, Sparkles, CreditCard, ArrowRight } from 'lucide-react';
import { STEPS } from '../data/mockData';
import { StepItem } from '../types';

interface StepsSectionProps {
  onOpenRegister: () => void;
  onOpenDomainCart: () => void;
}

export const StepsSection: React.FC<StepsSectionProps> = ({
  onOpenRegister,
  onOpenDomainCart,
}) => {
  const handleStepClick = (step: StepItem) => {
    if (step.step <= 3) {
      onOpenRegister();
    } else {
      onOpenDomainCart();
    }
  };

  const renderMockup = (step: StepItem) => {
    switch (step.mockupType) {
      case 'menu':
        return (
          <div className="relative bg-white border border-slate-200/90 rounded-xl p-4 h-40 flex flex-col justify-between mb-4 overflow-hidden shadow-inner">
            <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-[#0062E0] text-white font-bold text-xs flex items-center justify-center shadow-md">
              1
            </span>
            {/* Mini Browser Header */}
            <div className="flex items-center justify-end gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            </div>
            {/* Mini Mockup Content */}
            <div className="flex items-center justify-between px-2 pt-2">
              <div className="text-sm font-black text-[#0062E0] flex items-center gap-1">
                <span>Tenten<span className="text-slate-700">.vn</span></span>
              </div>
              <div className="relative">
                <div className="px-2.5 py-1 bg-[#0062E0] text-white text-[10px] font-bold rounded shadow-sm animate-pulse">
                  Đăng ký tài khoản
                </div>
                {/* Simulated Cursor */}
                <svg
                  className="w-5 h-5 text-slate-800 absolute -bottom-3 -right-2 transform -rotate-45 drop-shadow-sm"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l3.874-2.583 2.68 5.361a1.5 1.5 0 002.013.67l1.789-.894a1.5 1.5 0 00.67-2.013l-2.68-5.361 4.544-.65a1.5 1.5 0 00.99-2.394L6.3 2.84z" />
                </svg>
              </div>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full w-full"></div>
          </div>
        );

      case 'form':
        return (
          <div className="relative bg-white border border-slate-200/90 rounded-xl p-4 h-40 flex flex-col justify-between mb-4 shadow-inner">
            <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-[#0062E0] text-white font-bold text-xs flex items-center justify-center shadow-md">
              2
            </span>
            <div className="flex items-center justify-end gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            </div>
            {/* Form input mockups */}
            <div className="space-y-2 px-3 pt-2">
              <div className="h-4 bg-slate-100 border border-slate-200 rounded w-full flex items-center px-2">
                <div className="h-1.5 bg-blue-400 rounded w-1/3"></div>
              </div>
              <div className="h-4 bg-slate-100 border border-slate-200 rounded w-full flex items-center px-2">
                <div className="h-1.5 bg-slate-300 rounded w-1/2"></div>
              </div>
              <div className="h-4 bg-slate-100 border border-slate-200 rounded w-full flex items-center px-2">
                <div className="h-1.5 bg-slate-300 rounded w-2/3"></div>
              </div>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full w-full"></div>
          </div>
        );

      case 'email':
        return (
          <div className="relative bg-white border border-slate-200/90 rounded-xl p-4 h-40 flex flex-col items-center justify-center mb-4 shadow-inner">
            <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-[#0062E0] text-white font-bold text-xs flex items-center justify-center shadow-md">
              3
            </span>
            <div className="w-16 h-12 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0062E0] shadow-sm">
              <Mail className="w-7 h-7" />
            </div>
            <span className="text-[10px] font-bold text-slate-500 mt-2">Xác nhận email</span>
          </div>
        );

      case 'search':
        return (
          <div className="relative bg-white border border-slate-200/90 rounded-xl p-4 h-40 flex flex-col justify-between mb-4 shadow-inner">
            <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-[#0062E0] text-white font-bold text-xs flex items-center justify-center shadow-md">
              4
            </span>
            <div className="flex items-center justify-end gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            </div>
            {/* Domain Search bar mockup */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-1.5 flex items-center gap-2">
              <span className="text-[10px] font-semibold text-slate-500 pl-1">www.</span>
              <div className="h-2 bg-slate-200 rounded w-16"></div>
              <div className="ml-auto w-6 h-6 bg-[#0062E0] rounded flex items-center justify-center text-white">
                <Search className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full w-full"></div>
          </div>
        );

      case 'cart':
        return (
          <div className="relative bg-white border border-slate-200/90 rounded-xl p-4 h-40 flex flex-col items-center justify-center mb-4 shadow-inner">
            <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-[#0062E0] text-white font-bold text-xs flex items-center justify-center shadow-md">
              5
            </span>
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <ShoppingBag className="w-7 h-7" />
            </div>
            <span className="text-[10px] font-bold text-slate-500 mt-2">+ 1 Sản phẩm</span>
          </div>
        );

      case 'payment':
        return (
          <div className="relative bg-white border border-slate-200/90 rounded-xl p-4 h-40 flex flex-col items-center justify-center mb-4 shadow-inner">
            <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-[#0062E0] text-white font-bold text-xs flex items-center justify-center shadow-md">
              6
            </span>
            {/* Payment card mock */}
            <div className="w-16 h-11 bg-slate-800 text-white rounded-lg p-1.5 flex flex-col justify-between shadow-md">
              <div className="w-3 h-2 bg-amber-400 rounded-xs"></div>
              <div className="text-[8px] font-mono tracking-widest text-slate-300">•••• 8899</div>
            </div>
            <span className="text-[10px] font-bold text-slate-500 mt-2">Áp dụng mã ưu đãi</span>
          </div>
        );

      case 'success':
        return (
          <div className="relative bg-white border border-slate-200/90 rounded-xl p-4 h-40 flex flex-col items-center justify-center mb-4 shadow-inner">
            <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-[#0062E0] text-white font-bold text-xs flex items-center justify-center shadow-md">
              7
            </span>
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-xs">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>
            <span className="text-[10px] font-bold text-emerald-600 mt-2">Thanh toán hoàn tất</span>
          </div>
        );

      case 'active':
        return (
          <div className="relative bg-white border border-slate-200/90 rounded-xl p-4 h-40 flex flex-col items-center justify-center mb-4 shadow-inner overflow-hidden">
            <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-[#0062E0] text-white font-bold text-xs flex items-center justify-center shadow-md">
              8
            </span>
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Sparkles className="w-8 h-8 stroke-[1.8]" />
            </div>
            <span className="text-[10px] font-bold text-[#0062E0] mt-2">Sẵn sàng sử dụng</span>
          </div>
        );
    }
  };

  return (
    <section className="py-20 bg-white" id="huong-dan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0062E0] uppercase tracking-tight">
            HƯỚNG DẪN TẠO TÀI KHOẢN TENTEN.VN &amp; NHẬN ƯU ĐÃI CHO TÀI KHOẢN MỚI
          </h2>
          <p className="text-slate-500 mt-3 text-sm sm:text-base font-medium">
            Quy trình 8 bước trực quan, nhanh chóng và dễ dàng thực hiện
          </p>
        </div>

        {/* 8-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.step}
              onClick={() => handleStepClick(step)}
              className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/70 shadow-xs flex flex-col group hover:border-blue-300 hover:shadow-card-hover transition-all duration-200 cursor-pointer"
              title="Nhấn để thực hiện bước này"
            >
              {renderMockup(step)}

              <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-[#0062E0] transition-colors">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                {step.description}
              </p>

              <div className="mt-auto pt-3 flex items-center text-xs font-bold text-[#0062E0] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Thực hiện bước {step.step}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
