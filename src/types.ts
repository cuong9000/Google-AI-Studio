export interface Voucher {
  id: string;
  code: string;
  badge: string;
  badgeColor: 'blue' | 'emerald' | 'amber';
  title: string;
  description: string;
  discountType: 'trial' | 'percentage' | 'free_service';
  iconType: 'vibe' | 'ssd' | 'discount' | 'shop';
  copied?: boolean;
}

export interface StepItem {
  step: number;
  title: string;
  description: string;
  mockupType: 'menu' | 'form' | 'email' | 'search' | 'cart' | 'payment' | 'success' | 'active';
  tag?: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  icon: string;
  bgLight: string;
  textColor: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export type ActiveScreen = 'landing' | 'register' | 'login' | 'domain_cart';
