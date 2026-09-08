import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  // Default first item open
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-slate-200/60" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0062E0] uppercase tracking-tight">
            HỎI ĐÁP CÙNG TENTEN.VN
          </h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Giải đáp những thắc mắc thường gặp về chương trình ưu đãi
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openIndex === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4.5 text-left font-bold text-slate-800 flex items-center justify-between hover:text-[#0062E0] focus:outline-none transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                  <div
                    className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-45 bg-blue-100 text-[#0062E0]' : 'text-slate-400'
                    }`}
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
