import React from 'react';
import { Check, Sparkles } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700/80">
        <div className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </div>
        <p className="text-xs sm:text-sm font-semibold text-slate-100">{message}</p>
        <button
          onClick={onClose}
          className="ml-2 text-slate-400 hover:text-white text-xs font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
