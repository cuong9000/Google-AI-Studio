import React, { useState, useEffect } from 'react';
import {
  X,
  Search,
  Check,
  Tag,
  CreditCard,
  ShoppingCart,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Server,
  Globe,
  Trash2,
} from 'lucide-react';

interface DomainCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPromoCode?: string;
  onShowToast: (message: string) => void;
}

export const DomainCartModal: React.FC<DomainCartModalProps> = ({
  isOpen,
  onClose,
  initialPromoCode = 'CPNEWIDHE70',
  onShowToast,
}) => {
  const [searchTerm, setSearchTerm] = useState('mybrand');
  const [selectedExtension, setSelectedExtension] = useState('.vn');
  const [domainAdded, setDomainAdded] = useState(true);
  const [selectedHosting, setSelectedHosting] = useState<'vibe' | 'ssd' | 'none'>('vibe');
  const [promoInput, setPromoInput] = useState(initialPromoCode);
  const [appliedPromo, setAppliedPromo] = useState<string | null>(initialPromoCode);
  const [paymentStep, setPaymentStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [paymentMethod, setPaymentMethod] = useState<'qr' | 'atm' | 'visa'>('qr');

  useEffect(() => {
    if (initialPromoCode) {
      setPromoInput(initialPromoCode);
      setAppliedPromo(initialPromoCode);
    }
  }, [initialPromoCode]);

  if (!isOpen) return null;

  // Domain pricing
  const domainPrice = selectedExtension === '.vn' ? 450000 : 280000;

  // Hosting pricing
  const hostingPrice =
    selectedHosting === 'vibe' ? 1200000 : selectedHosting === 'ssd' ? 960000 : 0;

  // Discount calculation
  let discountAmount = 0;
  let discountNote = '';

  if (appliedPromo === 'CPNEWIDHE70') {
    discountAmount = Math.round(hostingPrice * 0.7);
    discountNote = 'Giảm 70% Hosting năm đầu';
  } else if (appliedPromo === 'CPNEWIDVCH') {
    discountAmount = selectedHosting === 'vibe' ? 300000 : 150000;
    discountNote = 'Tặng voucher 30 ngày trải nghiệm Vibe Code';
  } else if (appliedPromo === 'CPNEWIDSSD') {
    discountAmount = selectedHosting === 'ssd' ? 240000 : 120000;
    discountNote = 'Tặng voucher 30 ngày trải nghiệm SSD Hosting';
  } else if (appliedPromo === 'CPNEWIDSHOPOK') {
    discountAmount = 150000;
    discountNote = 'Tặng bộ công cụ bán hàng SHOP OK';
  }

  const subtotal = (domainAdded ? domainPrice : 0) + hostingPrice;
  const total = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = (codeToApply: string) => {
    const trimmed = codeToApply.trim().toUpperCase();
    if (!trimmed) return;
    setAppliedPromo(trimmed);
    setPromoInput(trimmed);
    onShowToast(`Đã áp dụng mã ưu đãi: ${trimmed}`);
  };

  const handleQuickApply = (code: string) => {
    handleApplyPromo(code);
  };

  const handleCheckout = () => {
    setPaymentStep('checkout');
  };

  const handleFinishPayment = () => {
    setPaymentStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl w-full max-w-3xl shadow-2xl border border-slate-100 overflow-hidden relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with 8-Step Navigation Tracker */}
        <div className="bg-slate-50 px-6 py-3.5 border-b border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
            <span className="text-xs font-semibold text-slate-500 font-mono ml-2">
              tenten.vn/cart-checkout
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
              <span
                className={`px-2 py-0.5 rounded-full ${
                  paymentStep === 'cart' ? 'bg-[#0062E0] text-white' : 'bg-slate-200'
                }`}
              >
                Bước 4-5: Giỏ hàng
              </span>
              <span>→</span>
              <span
                className={`px-2 py-0.5 rounded-full ${
                  paymentStep === 'checkout' ? 'bg-[#0062E0] text-white' : 'bg-slate-200'
                }`}
              >
                Bước 6-7: Thanh toán
              </span>
              <span>→</span>
              <span
                className={`px-2 py-0.5 rounded-full ${
                  paymentStep === 'success' ? 'bg-emerald-600 text-white' : 'bg-slate-200'
                }`}
              >
                Bước 8: Kích hoạt
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {paymentStep === 'cart' && (
            <div className="space-y-6">
              {/* Step 4: Domain Search Simulation */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0062E0] text-white text-xs font-bold flex items-center justify-center">
                      4
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Tìm kiếm tên miền theo nhu cầu
                    </h3>
                  </div>
                  <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Khả dụng để đăng ký
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <div className="absolute left-3.5 top-3 text-xs font-bold text-slate-400">
                      www.
                    </div>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="nhap-ten-mien"
                      className="w-full pl-14 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:bg-white focus:border-[#0062E0] outline-none"
                    />
                  </div>

                  <select
                    value={selectedExtension}
                    onChange={(e) => setSelectedExtension(e.target.value)}
                    className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 focus:bg-white focus:border-[#0062E0] outline-none"
                  >
                    <option value=".vn">.vn (450.000 đ/năm)</option>
                    <option value=".com">.com (280.000 đ/năm)</option>
                    <option value=".com.vn">.com.vn (350.000 đ/năm)</option>
                  </select>

                  <button
                    onClick={() => setDomainAdded(true)}
                    className="px-5 py-2.5 rounded-xl bg-[#0062E0] hover:bg-[#0052CC] text-white text-sm font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Search className="w-4 h-4" />
                    <span>Kiểm tra</span>
                  </button>
                </div>
              </div>

              {/* Step 5: Cart Items List */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#0062E0] text-white text-xs font-bold flex items-center justify-center">
                    5
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    Sản phẩm trong giỏ hàng
                  </h3>
                </div>

                <div className="space-y-3">
                  {/* Domain Item */}
                  {domainAdded ? (
                    <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0062E0] flex items-center justify-center">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">
                            {searchTerm || 'ten-mien-cua-ban'}
                            {selectedExtension}
                          </div>
                          <div className="text-xs text-slate-500">
                            Chu kỳ: 1 năm • Miễn phí DNS &amp; Bảo mật
                          </div>
                        </div>
                      </div>

                      <div className="text-right flex items-center gap-4">
                        <div className="font-black text-slate-900 text-sm">
                          {domainPrice.toLocaleString('vi-VN')} đ
                        </div>
                        <button
                          onClick={() => setDomainAdded(false)}
                          className="text-slate-400 hover:text-rose-500 p-1"
                          title="Xóa khỏi giỏ"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 bg-slate-50 border border-dashed border-slate-300 rounded-xl text-center text-xs text-slate-500">
                      Chưa có tên miền.{' '}
                      <button
                        onClick={() => setDomainAdded(true)}
                        className="text-[#0062E0] font-bold underline"
                      >
                        Thêm lại tên miền
                      </button>
                    </div>
                  )}

                  {/* Hosting Package Selector */}
                  <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-100 text-[#0052CC] flex items-center justify-center">
                          <Server className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">
                            Gói Hosting đi kèm (Ưu đãi giảm tới 70%)
                          </div>
                          <div className="text-xs text-slate-500">
                            Hạ tầng Cloud SSD siêu tốc độ, SSL miễn phí trọn đời
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      <label
                        className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                          selectedHosting === 'vibe'
                            ? 'border-[#0062E0] bg-blue-50/80 ring-1 ring-blue-500'
                            : 'border-slate-200 bg-white hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="hosting"
                            checked={selectedHosting === 'vibe'}
                            onChange={() => setSelectedHosting('vibe')}
                            className="text-[#0062E0]"
                          />
                          <div>
                            <div className="text-xs font-bold text-slate-800">
                              Vibe Code Hosting
                            </div>
                            <div className="text-[11px] text-slate-500">1 Năm bản quyền</div>
                          </div>
                        </div>
                        <span className="text-xs font-extrabold text-slate-900">
                          1.200.000 đ
                        </span>
                      </label>

                      <label
                        className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                          selectedHosting === 'ssd'
                            ? 'border-[#0062E0] bg-blue-50/80 ring-1 ring-blue-500'
                            : 'border-slate-200 bg-white hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="hosting"
                            checked={selectedHosting === 'ssd'}
                            onChange={() => setSelectedHosting('ssd')}
                            className="text-[#0062E0]"
                          />
                          <div>
                            <div className="text-xs font-bold text-slate-800">
                              SSD Cloud Hosting
                            </div>
                            <div className="text-[11px] text-slate-500">1 Năm bản quyền</div>
                          </div>
                        </div>
                        <span className="text-xs font-extrabold text-slate-900">
                          960.000 đ
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 6: Apply Promo Code */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0062E0] text-white text-xs font-bold flex items-center justify-center">
                    6
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    Áp dụng mã ưu đãi cho tài khoản mới
                  </h3>
                </div>

                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                      placeholder="CPNEWIDHE70"
                      className="w-full pl-10 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-slate-800 focus:border-[#0062E0] outline-none"
                    />
                  </div>
                  <button
                    onClick={() => handleApplyPromo(promoInput)}
                    className="px-5 py-2 bg-[#0062E0] hover:bg-[#0052CC] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    Áp dụng
                  </button>
                </div>

                {/* Quick Coupon Chips from the Landing Page */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs">
                  <span className="text-[11px] font-semibold text-slate-500">Mã có sẵn:</span>
                  {[
                    { code: 'CPNEWIDHE70', label: '-70% Hosting' },
                    { code: 'CPNEWIDVCH', label: 'Vibe 30 ngày' },
                    { code: 'CPNEWIDSSD', label: 'SSD 30 ngày' },
                    { code: 'CPNEWIDSHOPOK', label: 'Shop OK' },
                  ].map((c) => (
                    <button
                      key={c.code}
                      onClick={() => handleQuickApply(c.code)}
                      className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold font-mono transition-all cursor-pointer ${
                        appliedPromo === c.code
                          ? 'bg-[#0062E0] text-white border-transparent shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400'
                      }`}
                    >
                      {c.code} ({c.label})
                    </button>
                  ))}
                </div>

                {appliedPromo && (
                  <div className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1.5 rounded-lg flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4" /> Đã áp dụng: {appliedPromo} ({discountNote})
                    </span>
                    <span className="font-extrabold">
                      -{discountAmount.toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                )}
              </div>

              {/* Price Calculation Summary */}
              <div className="border-t border-slate-200 pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Tạm tính:</span>
                  <span>{subtotal.toLocaleString('vi-VN')} đ</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Ưu đãi áp dụng ({appliedPromo}):</span>
                    <span>-{discountAmount.toLocaleString('vi-VN')} đ</span>
                  </div>
                )}
                <div className="flex justify-between items-baseline pt-2 border-t border-slate-100 text-base font-extrabold text-slate-900">
                  <span>Tổng thanh toán:</span>
                  <div className="text-right">
                    {discountAmount > 0 && (
                      <span className="text-xs text-slate-400 line-through mr-2 font-normal">
                        {subtotal.toLocaleString('vi-VN')} đ
                      </span>
                    )}
                    <span className="text-xl text-[#0062E0]">
                      {total.toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-4 px-6 rounded-xl bg-[#0062E0] hover:bg-[#0052CC] text-white font-bold text-base shadow-glow-primary transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Tiến hành thanh toán an toàn</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {paymentStep === 'checkout' && (
            /* Step 7: Payment Step */
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0062E0] text-white text-xs font-bold flex items-center justify-center">
                  7
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Phương thức thanh toán trực tuyến
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div
                  onClick={() => setPaymentMethod('qr')}
                  className={`p-4 rounded-2xl border cursor-pointer flex flex-col items-center text-center transition-all ${
                    paymentMethod === 'qr'
                      ? 'border-[#0062E0] bg-blue-50 ring-2 ring-blue-500'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0062E0] flex items-center justify-center mb-2">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Quét mã QR 24/7</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">VietQR / Napas 247</span>
                </div>

                <div
                  onClick={() => setPaymentMethod('atm')}
                  className={`p-4 rounded-2xl border cursor-pointer flex flex-col items-center text-center transition-all ${
                    paymentMethod === 'atm'
                      ? 'border-[#0062E0] bg-blue-50 ring-2 ring-blue-500'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-2">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Thẻ ATM Nội địa</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">VNPAY / OnePay</span>
                </div>

                <div
                  onClick={() => setPaymentMethod('visa')}
                  className={`p-4 rounded-2xl border cursor-pointer flex flex-col items-center text-center transition-all ${
                    paymentMethod === 'visa'
                      ? 'border-[#0062E0] bg-blue-50 ring-2 ring-blue-500'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Visa / Master / JCB</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Thẻ quốc tế</span>
                </div>
              </div>

              {/* Simulated QR or details */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center space-y-3">
                <div className="w-36 h-36 mx-auto bg-white border border-slate-200 rounded-xl p-2 flex items-center justify-center shadow-xs">
                  <div className="w-full h-full bg-slate-900 rounded-lg flex flex-col items-center justify-center text-white p-2 text-center">
                    <div className="text-[10px] font-mono font-bold tracking-widest text-emerald-400">
                      TENTEN QR PAY
                    </div>
                    <div className="text-[8px] text-slate-300 mt-1">
                      {searchTerm}
                      {selectedExtension}
                    </div>
                    <div className="text-xs font-black text-white mt-1">
                      {total.toLocaleString('vi-VN')} đ
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  Hệ thống tự động kích hoạt dịch vụ sau khi thanh toán thành công trong 30 giây.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setPaymentStep('cart')}
                  className="w-1/3 py-3.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs cursor-pointer"
                >
                  Quay lại giỏ hàng
                </button>
                <button
                  onClick={handleFinishPayment}
                  className="w-2/3 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Xác nhận &amp; Kích hoạt dịch vụ</span>
                </button>
              </div>
            </div>
          )}

          {paymentStep === 'success' && (
            /* Step 8: Success & Active */
            <div className="text-center py-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <Check className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 tracking-wider">
                  BƯỚC 8: SẴN SÀNG SỬ DỤNG
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">
                  Kích hoạt dịch vụ thành công!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Tên miền <span className="font-bold text-slate-900">{searchTerm}{selectedExtension}</span> cùng gói dịch vụ Hosting đã sẵn sàng vận hành.
                </p>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl text-left text-xs text-slate-700 space-y-1.5 max-w-md mx-auto">
                <div className="font-bold text-[#0062E0]">Thông tin bàn giao:</div>
                <div>• Quản trị DNS: id.tenten.vn/domain/{searchTerm}{selectedExtension}</div>
                <div>• Hosting Control Panel: cPanel / DirectAdmin sẵn sàng</div>
                <div>• Hỗ trợ kỹ thuật 24/7 qua hotline: 1900 6899</div>
              </div>

              <div className="pt-3">
                <button
                  onClick={onClose}
                  className="px-8 py-3.5 bg-[#0062E0] hover:bg-[#0052CC] text-white font-bold text-sm rounded-xl shadow-glow-primary transition-all cursor-pointer"
                >
                  Hoàn tất &amp; Trở về trang chính
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
