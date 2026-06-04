export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
  active?: boolean;
}

export interface PricingSpec {
  vCPU: string;
  ram: string;
  ssd: string;
  bandwidth: string;
  dataTransfer: string;
  ip: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  specs: PricingSpec;
}

export interface RelatedServiceItem {
  id: string;
  name: string;
  icon: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
