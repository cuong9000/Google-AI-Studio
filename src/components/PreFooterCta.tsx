import React from 'react';
import { ArrowRight, User, Plus } from 'lucide-react';

interface PreFooterCtaProps {
  onOpenRegister: () => void;
}

export const PreFooterCta: React.FC<PreFooterCtaProps> = ({ onOpenRegister }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-100/40 rounded-3xl p-8 sm:p-12 lg:p-14 border border-blue-200/60 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="space-y-4 text-center lg:text-left z-10 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Sẵn sàng bắt đầu cùng Tenten.vn?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Tạo tài khoản ngay để nhận ưu đãi và trải nghiệm dịch vụ hosting tốc độ cao, hỗ trợ tận tâm nhất.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenRegister}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0062E0] hover:bg-[#0052CC] text-white font-bold text-base shadow-glow-primary transition-all hover:scale-105 cursor-pointer"
              >
                <span>Tạo tài khoản ngay</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Decorative Mini UI Screen Illustration */}
          <div
            onClick={onOpenRegister}
            className="relative w-full max-w-xs sm:max-w-sm flex justify-center z-10 cursor-pointer group"
            title="Đăng ký tài khoản mới"
          >
            <div className="w-full bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-blue-200/80 transform rotate-2 group-hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-1.5 pb-3 border-b border-slate-100">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              </div>
              <div className="py-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#0062E0] shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="h-3 bg-blue-100 rounded-full w-4/5"></div>
                  <div className="h-2.5 bg-slate-100 rounded-full w-2/3"></div>
                </div>
              </div>
              <div className="h-2 bg-slate-100 rounded-full w-full"></div>
            </div>

            {/* Float Plus Badge */}
            <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-xl bg-[#0062E0] text-white flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-110 transition-transform">
              <Plus className="w-5 h-5 stroke-[3]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
