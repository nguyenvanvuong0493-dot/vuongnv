import { NavLinkItem, PricingPlan, RelatedServiceItem, FooterColumn } from "./types";

export const topLinks: NavLinkItem[] = [
  { id: "recruit", label: "Tuyển dụng", href: "#" },
  { id: "lang", label: "Tiếng Việt", href: "#" }
];

export const mainLinks: NavLinkItem[] = [
  { id: "dich-vu", label: "Dịch vụ", href: "#" },
  { id: "giai-phap", label: "Giải pháp", href: "#" },
  { id: "bang-gia", label: "Bảng giá", href: "#", active: true },
  { id: "tin-tuc", label: "Tin tức", href: "#" },
  { id: "hop-tac", label: "Hợp tác", href: "#" },
  { id: "ve-viettel-idc", label: "Về Viettel IDC", href: "#" },
  { id: "tai-lieu-ho-tro", label: "Tài liệu & hỗ trợ", href: "#" }
];

export const subTabs: NavLinkItem[] = [
  { id: "thong-tin", label: "THÔNG TIN", href: "#", active: true },
  { id: "tinh-nang", label: "TÍNH NĂNG", href: "#" },
  { id: "uu-diem", label: "ƯU ĐIỂM", href: "#" },
  { id: "cau-hoi", label: "CÂU HỎI THƯỜNG GẶP", href: "#" }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "cs1",
    name: "CS1",
    price: "614.000",
    period: "/ Tháng",
    specs: {
      vCPU: "2 vCPU",
      ram: "4 GB RAM",
      ssd: "20 GB SSD",
      bandwidth: "300 Mbps Băng thông",
      dataTransfer: "Unlimited Lưu lượng chuyển tải",
      ip: "1 IP"
    }
  },
  {
    id: "cs2",
    name: "CS2",
    price: "908.000",
    period: "/ Tháng",
    specs: {
      vCPU: "4 vCPU",
      ram: "4 GB RAM",
      ssd: "40 GB SSD",
      bandwidth: "300 Mbps Băng thông",
      dataTransfer: "Unlimited Lưu lượng chuyển tải",
      ip: "1 IP"
    }
  },
  {
    id: "cs3",
    name: "CS3",
    price: "1.356.000",
    period: "/ Tháng",
    specs: {
      vCPU: "4 vCPU",
      ram: "8 GB RAM",
      ssd: "80 GB SSD",
      bandwidth: "300 Mbps Băng thông",
      dataTransfer: "Unlimited Lưu lượng chuyển tải",
      ip: "1 IP"
    }
  },
  {
    id: "cs4",
    name: "CS4",
    price: "2.584.000",
    period: "/ Tháng",
    specs: {
      vCPU: "8 vCPU",
      ram: "16 GB RAM",
      ssd: "120 GB SSD",
      bandwidth: "300 Mbps Băng thông",
      dataTransfer: "Unlimited Lưu lượng chuyển tải",
      ip: "1 IP"
    }
  }
];

export const relatedServices: RelatedServiceItem[] = [
  { id: "cloudrity", name: "Viettel Cloudrity", icon: "shield" },
  { id: "webhosting", name: "Viettel Web Hosting", icon: "globe" },
  { id: "privatecloud", name: "Viettel Private Cloud", icon: "cloud-lock" },
  { id: "vpc", name: "Viettel Virtual Private Cloud", icon: "network" }
];

export const footerColumns: FooterColumn[] = [
  {
    title: "DỊCH VỤ NỔI BẬT",
    links: [
      { label: "Viettel Cloud Server", href: "#" },
      { label: "Viettel Virtual Private Cloud", href: "#" },
      { label: "Viettel Cloud Object Storage", href: "#" },
      { label: "Viettel Cloud Backup", href: "#" },
      { label: "Viettel Media CDN", href: "#" },
      { label: "Thuê chỗ đặt thiết bị", href: "#" },
      { label: "Viettel Hybrid Connect", href: "#" },
      { label: "Viettel Cloud Desktop", href: "#" },
      { label: "Viettel Cloud File Storage", href: "#" }
    ]
  },
  {
    title: "GIẢI PHÁP",
    links: [
      { label: "Sao lưu & Dự phòng dữ liệu", href: "#" },
      { label: "Chuyển đổi hạ tầng Cloud", href: "#" },
      { label: "Container", href: "#" },
      { label: "Mạng phân phối nội dung", href: "#" },
      { label: "Phát triển & Vận hành", href: "#" },
      { label: "Đảm bảo hiệu năng cao", href: "#" },
      { label: "Giám sát & Ứng dụng AI", href: "#" },
      { label: "Làm việc di động", href: "#" },
      { label: "Xây dựng Website", href: "#" }
    ]
  },
  {
    title: "TRỢ GIÚP",
    links: [
      { label: "Liên hệ hỗ trợ, khiếu nại", href: "#" },
      { label: "Hỗ trợ sử dụng dịch vụ", href: "#" },
      { label: "Hệ thống Quản trị dịch vụ", href: "#" },
      { label: "Thỏa thuận sử dụng", href: "#" },
      { label: "Cách đăng ký dịch vụ máy chủ ảo", href: "#" },
      { label: "Các hình thức thanh toán", href: "#" },
      { label: "Hướng dẫn gia hạn dịch vụ", href: "#" },
      { label: "Chương trình ưu đãi, khuyến mại", href: "#" }
    ]
  }
];
