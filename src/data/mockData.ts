import { BenefitItem, FaqItem, StepItem, Voucher } from '../types';

export const VOUCHERS: Voucher[] = [
  {
    id: 'vibe-code',
    code: 'CPNEWIDVCH',
    badge: 'VOUCHER TRẢI NGHIỆM 30 NGÀY',
    badgeColor: 'blue',
    title: 'Vibe Code Hosting',
    description: 'Khi mua tên miền bất kỳ',
    discountType: 'trial',
    iconType: 'vibe',
  },
  {
    id: 'ssd-hosting',
    code: 'CPNEWIDSSD',
    badge: 'VOUCHER TRẢI NGHIỆM 30 NGÀY',
    badgeColor: 'blue',
    title: 'SSD Hosting',
    description: 'Khi mua tên miền bất kỳ',
    discountType: 'trial',
    iconType: 'ssd',
  },
  {
    id: 'hosting-70',
    code: 'CPNEWIDHE70',
    badge: 'ƯU ĐÃI NĂM ĐẦU TIÊN',
    badgeColor: 'emerald',
    title: '-70% HOSTING NĂM ĐẦU',
    description: 'Khi mua tên miền từ 200K',
    discountType: 'percentage',
    iconType: 'discount',
  },
  {
    id: 'shop-ok',
    code: 'CPNEWIDSHOPOK',
    badge: 'GIẢI PHÁP BÁN HÀNG',
    badgeColor: 'amber',
    title: 'SHOP OK',
    description: 'Khi mua dịch vụ bất kỳ',
    discountType: 'free_service',
    iconType: 'shop',
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 'b1',
    title: 'Quản lý dịch vụ tập trung trên 1 tài khoản',
    icon: 'users',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    id: 'b2',
    title: 'Miễn phí set up ban đầu',
    icon: 'dollar',
    bgLight: 'bg-emerald-50',
    textColor: 'text-emerald-600',
  },
  {
    id: 'b3',
    title: 'Hỗ trợ kỹ thuật 24/7/365',
    icon: 'headphones',
    bgLight: 'bg-cyan-50',
    textColor: 'text-cyan-600',
  },
  {
    id: 'b4',
    title: 'Miễn phí chuyển dữ liệu',
    icon: 'cloud-upload',
    bgLight: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
  {
    id: 'b5',
    title: 'Cam kết hoàn tiền 30 ngày theo chính sách',
    icon: 'shield-check',
    bgLight: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
];

export const STEPS: StepItem[] = [
  {
    step: 1,
    title: 'Truy cập menu “Đăng ký tài khoản”',
    description: 'Truy cập Tenten.vn và nhấn vào “Đăng ký tài khoản” tại đây',
    mockupType: 'menu',
  },
  {
    step: 2,
    title: 'Nhập thông tin',
    description: 'Nhập đầy đủ các trường thông tin theo biểu mẫu yêu cầu',
    mockupType: 'form',
  },
  {
    step: 3,
    title: 'Kích hoạt tài khoản',
    description: 'Click vào đường link được gửi tới email của bạn để kích hoạt tài khoản',
    mockupType: 'email',
    tag: 'Xác nhận email',
  },
  {
    step: 4,
    title: 'Quay trở miền dịch vụ',
    description: 'Quay trở lại Tenten.vn để tìm kiếm tên miền hoặc các dịch vụ theo nhu cầu',
    mockupType: 'search',
  },
  {
    step: 5,
    title: 'Thêm vào giỏ hàng',
    description: 'Thêm tên miền/dịch vụ vào giỏ hàng của bạn',
    mockupType: 'cart',
    tag: '+ 1 Sản phẩm',
  },
  {
    step: 6,
    title: 'Chọn phương thức thanh toán',
    description: 'Chọn ưu đãi phù hợp và tiến hành thanh toán an toàn',
    mockupType: 'payment',
    tag: 'Áp dụng mã ưu đãi',
  },
  {
    step: 7,
    title: 'Thanh toán',
    description: 'Xác nhận và thanh toán trực tuyến nhanh gọn',
    mockupType: 'success',
    tag: 'Thanh toán hoàn tất',
  },
  {
    step: 8,
    title: 'Kích hoạt & sử dụng dịch vụ',
    description: 'Kích hoạt và đưa website vào vận hành ngay lập tức',
    mockupType: 'active',
    tag: 'Sẵn sàng sử dụng',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: '1. Ai được áp dụng ưu đãi dành cho khách hàng mới của Tenten.vn?',
    answer:
      'Chương trình ưu đãi áp dụng cho tất cả quý khách hàng thực hiện đăng ký tài khoản mới trên hệ thống Tenten.vn và chưa từng phát sinh đơn hàng trước thời điểm diễn ra chương trình.',
  },
  {
    id: 2,
    question: '2. Tôi cần mua tên miền như thế nào để được nhận ưu đãi Hosting giảm 70%?',
    answer:
      'Quý khách chỉ cần chọn mua tên miền bất kỳ (quốc tế hoặc Việt Nam) có giá trị thanh toán từ 200.000 VNĐ trở lên trong giỏ hàng. Mã giảm giá -70% Hosting năm đầu sẽ tự động có hiệu lực khi bạn nhập mã khuyến mãi tương ứng.',
  },
  {
    id: 3,
    question: '3. Ưu đãi Hosting giảm 70% dành cho những loại hosting nào?',
    answer:
      'Ưu đãi áp dụng cho hầu hết các gói dịch vụ Gen hosting thế hệ mới: Vibe Code Hosting, Cloud SSD Hosting, và WordPress Hosting cho chu kỳ thanh toán năm đầu tiên.',
  },
  {
    id: 4,
    question: '4. Voucher trải nghiệm Hosting 30 ngày gồm những dịch vụ nào?',
    answer:
      'Gói dùng thử 30 ngày cung cấp đầy đủ thông số tiêu chuẩn của gói SSD Hosting hoặc Vibe Code Hosting gồm: Miễn phí chứng chỉ SSL, backup hàng ngày, hệ điều hành CloudLinux tối ưu và bảng điều khiển cPanel / DirectAdmin tiêu chuẩn.',
  },
  {
    id: 5,
    question: '5. Tôi có được lựa chọn sử dụng ưu đãi Hosting giảm 70% và voucher trải nghiệm 30 ngày không?',
    answer:
      'Quý khách có thể lựa chọn 1 trong 2 hình thức: sử dụng voucher 30 ngày trải nghiệm trước hoặc áp dụng ngay mã giảm 70% cho đơn hàng năm đầu tiên để tối ưu chi phí tối đa.',
  },
];
