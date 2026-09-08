import React from 'react';
import { Users, CircleDollarSign, Headphones, CloudUpload, ShieldCheck } from 'lucide-react';
import { BENEFITS } from '../data/mockData';

export const BenefitsSection: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'users':
        return <Users className="w-7 h-7" />;
      case 'dollar':
        return <CircleDollarSign className="w-7 h-7" />;
      case 'headphones':
        return <Headphones className="w-7 h-7" />;
      case 'cloud-upload':
        return <CloudUpload className="w-7 h-7" />;
      case 'shield-check':
        return <ShieldCheck className="w-7 h-7" />;
      default:
        return <ShieldCheck className="w-7 h-7" />;
    }
  };

  return (
    <section className="py-20 bg-[#F8FAFC] border-y border-slate-200/60" id="loi-ich">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#0062E0] uppercase mb-2">
            TẠI SAO NÊN BẮT ĐẦU VỚI TENTEN.VN?
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trải nghiệm dễ dàng – Hỗ trợ toàn diện
          </h2>
        </div>

        {/* 5 Features Horizontal Row / Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {BENEFITS.map((item, index) => {
            const isLastOnSmall = index === 4;
            return (
              <div
                key={item.id}
                className={`${
                  isLastOnSmall ? 'col-span-2 md:col-span-1' : ''
                } bg-white rounded-2xl p-5 sm:p-6 text-center shadow-card-soft hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col items-center group`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${item.bgLight} ${item.textColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  {getIconComponent(item.icon)}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
