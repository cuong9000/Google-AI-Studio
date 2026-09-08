import React, { useState } from 'react';
import { Server, HardDrive, ShoppingCart, ArrowRight, Check, Copy, Sparkles } from 'lucide-react';
import { VOUCHERS } from '../data/mockData';
import { Voucher } from '../types';

interface VoucherSectionProps {
  onOpenRegister: (initialVoucherCode?: string) => void;
  onApplyVoucherToCart: (code: string) => void;
  onShowToast: (message: string) => void;
}

export const VoucherSection: React.FC<VoucherSectionProps> = ({
  onOpenRegister,
  onApplyVoucherToCart,
  onShowToast,
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(code);
      onShowToast(`Đã sao chép mã ưu đãi: ${code}`);
      setTimeout(() => {
        setCopiedCode(null);
      }, 2500);
    });
  };

  const renderVoucherIcon = (voucher: Voucher) => {
    switch (voucher.iconType) {
      case 'vibe':
        return (
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200/80 flex items-center justify-center text-[#0062E0] shrink-0 shadow-inner group-hover:scale-105 transition-transform">
            <Server className="w-8 h-8 stroke-[1.8]" />
          </div>
        );
      case 'ssd':
        return (
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-blue-200/80 flex items-center justify-center text-[#0052CC] font-black text-lg shrink-0 shadow-inner group-hover:scale-105 transition-transform">
            <span>SSD</span>
          </div>
        );
      case 'discount':
        return (
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            -70%
          </div>
        );
      case 'shop':
        return (
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 text-amber-600 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
            <ShoppingCart className="w-8 h-8 stroke-[1.8]" />
          </div>
        );
    }
  };

  const v1 = VOUCHERS[0]; // Vibe Code Hosting
  const v2 = VOUCHERS[1]; // SSD Hosting
  const v3 = VOUCHERS[2]; // -70% Hosting Năm Đầu
  const v4 = VOUCHERS[3]; // Shop OK

  const renderCard = (voucher: Voucher) => {
    const isCopied = copiedCode === voucher.code;

    const badgeClasses =
      voucher.badgeColor === 'emerald'
        ? 'bg-emerald-100 text-emerald-800'
        : voucher.badgeColor === 'amber'
        ? 'bg-amber-100 text-amber-800'
        : 'bg-blue-100 text-[#0052CC]';

    const hoverBorder =
      voucher.badgeColor === 'emerald'
        ? 'hover:border-emerald-300'
        : voucher.badgeColor === 'amber'
        ? 'hover:border-amber-300'
        : 'hover:border-blue-300';

    return (
      <div
        key={voucher.id}
        className={`bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group ${hoverBorder} relative overflow-hidden`}
      >
        {/* Subtle top-right background corner blur */}
        <div
          className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full -z-0 ${
            voucher.badgeColor === 'emerald'
              ? 'bg-emerald-50'
              : voucher.badgeColor === 'amber'
              ? 'bg-amber-50'
              : 'bg-blue-50'
          }`}
        />

        <div className="flex items-start gap-4 relative z-10">
          {renderVoucherIcon(voucher)}

          <div className="space-y-1">
            <span
              className={`inline-block text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wide ${badgeClasses}`}
            >
              {voucher.badge}
            </span>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0062E0] transition-colors">
              {voucher.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              {voucher.description}
            </p>
          </div>
        </div>

        {/* Coupon Action Bar */}
        <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center justify-between gap-2 relative z-10">
          <div className="font-mono text-sm font-bold text-slate-800 bg-white px-3 py-1.5 rounded-lg border border-slate-200 tracking-wider select-all">
            {voucher.code}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => handleCopyCode(voucher.code, e)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                isCopied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-blue-50 hover:bg-blue-100 text-[#0052CC]'
              }`}
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>ĐÃ CHÉP!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 stroke-[2]" />
                  <span>COPY MÃ</span>
                </>
              )}
            </button>

            <button
              onClick={() => onApplyVoucherToCart(voucher.code)}
              className="text-[11px] font-semibold text-slate-600 hover:text-[#0062E0] hover:underline px-1 py-1"
              title="Thử áp dụng ngay vào giỏ hàng"
            >
              Dùng ngay
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white" id="vouchers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#0062E0] uppercase mb-2">
            BẠN SẼ NHẬN ĐƯỢC GÌ?
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Voucher trải nghiệm hấp dẫn
          </h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Ưu đãi độc quyền kích hoạt tức thì ngay sau khi hoàn tất đăng ký tài khoản mới.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          {renderCard(v1)}

          {/* Card 2 */}
          {renderCard(v2)}

          {/* Central Interactive Callout Card (Full Width) */}
          <div className="md:col-span-2 bg-gradient-to-r from-[#0062E0] via-[#0052CC] to-[#0041a8] text-white rounded-2xl p-7 sm:p-9 shadow-glow-primary flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-1.5 max-w-xl z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Tạo tài khoản ngay
              </h3>
              <p className="text-blue-100 text-sm sm:text-base">
                Mở ra nhiều ưu đãi dành riêng cho khách hàng mới tại Tenten.vn
              </p>
            </div>

            <button
              onClick={() => onOpenRegister()}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#0062E0] hover:bg-blue-50 font-bold text-sm sm:text-base rounded-xl shadow-lg transition-all hover:scale-105 shrink-0 z-10 cursor-pointer"
            >
              <span>Tạo tài khoản ngay</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Card 3 */}
          {renderCard(v3)}

          {/* Card 4 */}
          {renderCard(v4)}
        </div>
      </div>
    </section>
  );
};
