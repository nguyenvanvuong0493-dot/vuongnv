import React from "react";
import { Phone, Mail, Globe, MapPin, ShieldAlert, BadgeInfo } from "lucide-react";
import { footerColumns } from "../data";

interface FooterProps {
  language?: "vi" | "en";
}

export default function Footer({ language = "vi" }: FooterProps) {
  const getColTitle = (title: string) => {
    if (language === "vi") return title;
    if (title === "DỊCH VỤ NỔI BẬT") return "KEY SERVICES";
    if (title === "GIẢI PHÁP") return "SOLUTIONS";
    if (title === "TRỢ GIÚP") return "HELP & SUPPORT";
    return title;
  };

  const getLinkLabelFooter = (label: string) => {
    if (language === "vi") return label;
    switch (label) {
      case "Viettel Cloud Server": return "Viettel Cloud Server";
      case "Viettel Virtual Private Cloud": return "Viettel Virtual Private Cloud";
      case "Viettel Cloud Object Storage": return "Viettel Cloud Object Storage";
      case "Viettel Cloud Backup": return "Viettel Cloud Backup";
      case "Viettel Media CDN": return "Viettel Media CDN";
      case "Thuê chỗ đặt thiết bị": return "Colocation Services";
      case "Viettel Hybrid Connect": return "Viettel Hybrid Connect";
      case "Viettel Cloud Desktop": return "Viettel Cloud Desktop";
      case "Viettel Cloud File Storage": return "Viettel Cloud File Storage";

      case "Sao lưu & Dự phòng dữ liệu": return "Backup & Disaster Recovery";
      case "Chuyển đổi hạ tầng Cloud": return "Cloud Infrastructure Migration";
      case "Container": return "Containers & Kubernetes";
      case "Mạng phân phối nội dung": return "Content Delivery Network";
      case "Phát triển & Vận hành": return "DevOps & Operations";
      case "Đảm bảo hiệu năng cao": return "High-Performance/Uptime Assurance";
      case "Giám sát & Ứng dụng AI": return "AI Monitoring & Applications";
      case "Làm việc di động": return "Remote & Mobile Working";
      case "Xây dựng Website": return "Website Building & Hosting";

      case "Liên hệ hỗ trợ, khiếu nại": return "Contact Support & Feedback";
      case "Hỗ trợ sử dụng dịch vụ": return "Service Usage Guide";
      case "Hệ thống Quản trị dịch vụ": return "Service Management System";
      case "Thỏa thuận sử dụng": return "Terms of Service";
      case "Cách đăng ký dịch vụ máy chủ ảo": return "How to order Virtual Cloud Servers";
      case "Các hình thức thanh toán": return "Payment Methods";
      case "Hướng dẫn gia hạn dịch vụ": return "Service Renewal Guide";
      case "Chương trình ưu đãi, khuyến mại": return "Offers & Promotions";

      default: return label;
    }
  };

  return (
    <footer className="vt-footer px-2" id="app-footer">
      <div className="container pb-4">
        {/* Main Columns row */}
        <div className="row g-4">
          {/* Brand/Owner Details Info Column */}
          <div className="col-lg-4 col-md-12 pe-lg-5">
            <div className="mb-3">
              <img 
                src="https://i.ibb.co/KzLpkz2B/logo.png" 
                alt="Viettel IDC" 
                style={{ height: "40px", maxHeight: "100%", width: "auto", objectFit: "contain" }}
                referrerPolicy="no-referrer"
                id="footer-vt-logo"
                className="me-2"
              />
            </div>
            
            {/* Vietnamese descriptive coordinates */}
            <div className="text-secondary fw-normal mb-3" style={{ fontSize: "12.5px", lineHeight: "1.6" }}>
              <p className="mb-2">
                {language === "vi" ? (
                  <><strong>Công ty TNHH Viettel - CHT</strong> trực thuộc Tập đoàn Công nghiệp - Viễn thông Quân đội.</>
                ) : (
                  <><strong>Viettel - CHT Co., Ltd.</strong> is a subsidiary of Viettel Group.</>
                )}
              </p>
              <p className="mb-3">
                {language === "vi" ? (
                  <>Mã số doanh nghiệp: 0500589150 do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp lần đầu ngày 11/04/2008.</>
                ) : (
                  <>Business License No: 0500589150 first issued by Hanoi Department of Planning and Investment on April 11, 2008.</>
                )}
              </p>
            </div>

            {/* Official Addresses & coordinates */}
            <div className="mb-4 d-flex flex-column gap-2 text-secondary" style={{ fontSize: "12px", lineHeight: "1.5" }}>
              <div className="d-flex align-items-start gap-2">
                <MapPin size={14} className="text-viettel mt-1 flex-shrink-0" />
                <span>
                  <strong>{language === "vi" ? "Hà Nội:" : "Hanoi:"}</strong> {language === "vi" ? "Tầng 16, Tòa nhà Hòa Bình, Số 106 Hoàng Quốc Việt, Phường Nghĩa Đô, Quận Cầu Giấy." : "16th Floor, Hoa Binh Building, 106 Hoang Quoc Viet, Nghia Do, Cau Giay District."}
                </span>
              </div>
              <div className="d-flex align-items-start gap-2">
                <MapPin size={14} className="text-viettel mt-1 flex-shrink-0" />
                <span>
                  <strong>{language === "vi" ? "TP.HCM:" : "HCMC:"}</strong> {language === "vi" ? "Tầng 1, Tòa nhà Viettel, Số 285 Cách Mạng Tháng Tám, Phường 12, Quận 10." : "1st Floor, Viettel Building, 285 Cach Mang Thang Tam, Ward 12, District 10."}
                </span>
              </div>
              <div className="d-flex align-items-start gap-2">
                <MapPin size={14} className="text-viettel mt-1 flex-shrink-0" />
                <span>
                  <strong>{language === "vi" ? "Đà Nẵng:" : "Da Nang:"}</strong> {language === "vi" ? "Tầng 3, Tòa nhà Viettel, Số 58 Núi Thành, Phường Hòa Thuận Đông, Quận Hải Châu." : "3rd Floor, Viettel Building, 58 Nui Thanh, Hoa Thuan Dong, Hai Chau District."}
                </span>
              </div>
            </div>
 
            {/* Helpline details */}
            <div className="d-flex flex-column gap-2 mb-4" style={{ fontSize: "13px" }}>
              <div className="d-flex align-items-center gap-2 text-dark">
                <Phone size={14} className="text-viettel" />
                <span>
                  {language === "vi" ? "Tổng đài hỗ trợ: " : "Support hotline: "}<strong className="text-viettel">1800 8088</strong>
                </span>
              </div>
              <div className="d-flex align-items-center gap-2 text-dark">
                <Mail size={14} className="text-viettel" />
                <span>
                  Email: <a href="mailto:support@viettelidc.com.vn" className="text-danger text-decoration-none">support@viettelidc.com.vn</a>
                </span>
              </div>
            </div>

            {/* Embedded dark mini social handles */}
            <div className="d-flex align-items-center gap-2">
              {["fb", "in", "tw", "yt", "zl"].map((sc) => (
                <a 
                  key={sc}
                  href="#" 
                  className="d-flex align-items-center justify-content-center border"
                  style={{ 
                    width: "28px", 
                    height: "28px", 
                    borderRadius: "50%", 
                    backgroundColor: "#1a1a1a", 
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: "bold",
                    borderColor: "#333333"
                  }}
                  id={`footer-social-${sc}`}
                >
                  {sc.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Map Columns listed in data */}
          {footerColumns.map((col) => (
            <div key={col.title} className="col-lg col-md-4 col-sm-6" id={`footer-col-${col.title.replace(/\s+/g, '-').toLowerCase()}`}>
              <h6>{getColTitle(col.title)}</h6>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} id={`footer-link-${link.label.replace(/\s+/g, '-').toLowerCase()}`}>{getLinkLabelFooter(link.label)}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Extreme Bottom row: Copyright + Regulatory Badges */}
      <div className="vt-footer-bottom py-4 px-2 border-top">
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between g-3 text-center text-lg-start">
          <div className="text-secondary" style={{ fontSize: "12px" }}>
            {language === "vi" ? "© Bản quyền thuộc về: Công ty TNHH Viettel - CHT" : "© Copyright: Viettel - CHT Co., Ltd."}
          </div>

          {/* Certificate badges panel */}
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-2 mt-3 mt-lg-0" id="certificate-badges">
            {/* Bộ Quốc phòng */}
            <div className="px-2 py-1 bg-white border text-dark fw-bold d-flex align-items-center gap-1" style={{ fontSize: "9px", borderRadius: "3px" }}>
              <span className="text-danger">{language === "vi" ? "BỘ QPHÒNG" : "MOD VIETNAM"}</span>
            </div>

            {/* Bộ Công thương */}
            <div className="px-2 py-1 bg-white border text-dark fw-bold d-flex align-items-center gap-1" style={{ fontSize: "9px", borderRadius: "3px" }}>
              <span className="text-danger">{language === "vi" ? "BỘ CÔNG THƯƠNG" : "MOIT VIETNAM"}</span>
            </div>

            {/* Viettel */}
            <div className="px-2 py-1 bg-white border text-dark fw-bold d-flex align-items-center gap-1" style={{ fontSize: "9px", borderRadius: "3px" }}>
              <span className="text-secondary">{language === "vi" ? "TẬP ĐOÀN" : "GROUP"}</span> <span className="text-danger">VIETTEL</span>
            </div>

            {/* BTTTT */}
            <div className="px-2 py-1 bg-white border text-dark fw-bold d-flex align-items-center gap-1" style={{ fontSize: "9px", borderRadius: "3px" }}>
              <span className="text-primary">{language === "vi" ? "BỘ TTTT" : "MIC VIETNAM"}</span>
            </div>

            {/* DMCA Badge */}
            <div className="px-2 py-1 bg-white border text-dark fw-bold d-flex align-items-center" style={{ fontSize: "9px", borderRadius: "3px", backgroundColor: "#3a3a3a" }}>
              <span className="text-danger">DMCA</span>{" "}
              <span className="text-secondary ms-1">PROTECTED</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
