import React, { useState, useEffect } from 'react';
import { X, Check, ShieldCheck, Mail, Lock, User, Phone, Tag, ArrowRight } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
  initialVoucherCode?: string;
  onSwitchToLogin: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialVoucherCode = '',
  onSwitchToLogin,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [voucherCode, setVoucherCode] = useState(initialVoucherCode);
  const [agreed, setAgreed] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialVoucherCode) {
      setVoucherCode(initialVoucherCode);
    }
  }, [initialVoucherCode]);

  if (!isOpen) return null;

  // Password strength logic
  const getPasswordStrength = (pwd: string) => {
    if (!pwd) return { label: 'Chưa nhập', color: 'text-slate-400 bg-slate-100', width: '0%' };
    if (pwd.length < 6) return { label: 'Yếu', color: 'text-rose-600 bg-rose-50', width: '30%' };
    if (pwd.length < 10) return { label: 'Trung bình', color: 'text-amber-600 bg-amber-50', width: '65%' };
    return { label: 'Mạnh', color: 'text-[#0062E0] bg-blue-50', width: '100%' };
  };

  const strength = getPasswordStrength(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleFinish = () => {
    setSubmitted(false);
    onSuccess(email);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl w-full max-w-lg shadow-2xl border border-slate-100 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Browser Top Window Bar */}
        <div className="bg-slate-50 px-6 py-3.5 border-b border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
          </div>
          <div className="text-xs font-semibold text-slate-500 font-mono">
            id.tenten.vn/register
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {!submitted ? (
            <div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-100 to-cyan-100 flex items-center justify-center mx-auto mb-3 shadow-inner">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#0062E0] shadow-xs">
                    <User className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Tạo tài khoản Tenten.vn
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Đăng ký hôm nay để kích hoạt ngay các gói voucher độc quyền
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Họ và tên
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0062E0] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email (name@domain.vn) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email đăng ký
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="name@domain.vn"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0062E0] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                    {email && email.includes('@') && (
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute right-3.5 top-4"></span>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Số điện thoại
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="0912 345 678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0062E0] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Password with strength indicator */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Mật khẩu
                    </label>
                    {password && (
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${strength.color}`}
                      >
                        Độ mạnh: {strength.label}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0062E0] focus:ring-2 focus:ring-blue-100 outline-none transition-all font-mono"
                    />
                  </div>
                  {/* Strength bar */}
                  {password && (
                    <div className="w-full h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                      <div
                        className="h-full bg-[#0062E0] transition-all duration-300"
                        style={{ width: strength.width }}
                      />
                    </div>
                  )}
                </div>

                {/* Voucher code field */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mã ưu đãi (nếu có)
                  </label>
                  <div className="relative">
                    <Tag className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="Nhập mã như CPNEWIDHE70, CPNEWIDVCH"
                      value={voucherCode}
                      onChange={(e) => setVoucherCode(e.target.value.toUpperCase())}
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0062E0] focus:ring-2 focus:ring-blue-100 outline-none transition-all uppercase font-mono font-semibold"
                    />
                  </div>
                  {voucherCode && (
                    <p className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Sẵn sàng áp dụng mã: {voucherCode}
                    </p>
                  )}
                </div>

                {/* Agree terms */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-[#0062E0] border-slate-300 focus:ring-blue-400"
                  />
                  <label htmlFor="terms" className="text-xs text-slate-600 leading-normal">
                    Tôi đồng ý với{' '}
                    <a href="#" className="text-[#0062E0] font-semibold hover:underline">
                      Điều khoản sử dụng
                    </a>{' '}
                    và{' '}
                    <a href="#" className="text-[#0062E0] font-semibold hover:underline">
                      Chính sách bảo mật
                    </a>{' '}
                    của Tenten.vn
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={!agreed || isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#0062E0] hover:bg-[#0052CC] text-white font-bold text-sm shadow-glow-primary transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {isSubmitting ? (
                    <span>Đang khởi tạo tài khoản...</span>
                  ) : (
                    <>
                      <span>Tạo tài khoản &amp; Nhận ưu đãi</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-5 text-center text-xs text-slate-500">
                Đã có tài khoản Tenten ID?{' '}
                <button
                  onClick={onSwitchToLogin}
                  className="text-[#0062E0] font-bold hover:underline cursor-pointer"
                >
                  Đăng nhập tại đây
                </button>
              </div>
            </div>
          ) : (
            /* Step 3: Success Screen (Email Verification) */
            <div className="text-center py-4 space-y-4">
              <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <Mail className="w-10 h-10 stroke-[2]" />
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 tracking-wider">
                  BƯỚC 3: XÁC NHẬN EMAIL
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">
                  Đăng ký tài khoản thành công!
                </h3>
                <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                  Chúng tôi đã gửi đường link kích hoạt tài khoản tới{' '}
                  <span className="font-bold text-slate-900">{email}</span>. Vui lòng kiểm tra hộp
                  thư đến hoặc mục Spam để kích hoạt.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200/70 rounded-2xl p-4 text-left text-xs text-slate-700 space-y-2">
                <p className="font-bold text-[#0052CC] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Đặc quyền tài khoản mới đã sẵn sàng:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                  <li>Voucher 30 ngày trải nghiệm Hosting miễn phí</li>
                  <li>Giảm 70% Hosting năm đầu khi đăng ký kèm tên miền</li>
                  <li>Tặng giải pháp bán hàng SHOP OK</li>
                </ul>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={handleFinish}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#0062E0] hover:bg-[#0052CC] text-white font-bold text-sm shadow-glow-primary transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Tiếp tục: Chọn tên miền &amp; Nhận ưu đãi ngay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onClose}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 py-1"
                >
                  Đóng để quay lại trang chủ
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
