import React, { useState, useEffect } from "react";
import { Shield, Sparkles, Zap, Coins, Check, HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";

interface PricingSectionProps {
  language: "vi" | "en";
}

export default function PricingSection({ language }: PricingSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const viPlans = [
    {
      id: "starter",
      name: "Starter Dev",
      code: "vMaaS_5M",
      price: "24.000",
      period: "/ Tháng",
      quota: "5M token / tháng",
      desc: "Lập trình viên cá nhân, nhóm thử nghiệm hoặc dự án PoC quy mô nhỏ.",
      badge: "Phù hợp PoC",
      features: [
        "API tương thích OpenAI",
        "Hỗ trợ tất cả mô hình trong danh mục",
        "REST API & Python/TS SDKs",
        "Hạ tầng Viettel IDC bảo mật cao"
      ]
    },
    {
      id: "freelance",
      name: "Freelance Dev",
      code: "vMaaS_10M",
      price: "45.000",
      period: "/ Tháng",
      quota: "10M token / tháng",
      desc: "Freelancer, nhóm phát triển ứng dụng nhỏ hoặc bài toán automation cá nhân.",
      badge: "Linh hoạt",
      features: [
        "API tương thích OpenAI",
        "Hỗ trợ tất cả mô hình trong danh mục",
        "Nhiều API Keys quản lý",
        "Ưu tiên phản hồi nhanh"
      ]
    },
    {
      id: "sme",
      name: "SME",
      code: "vMaaS_50M",
      price: "213.000",
      period: "/ Tháng",
      quota: "50M token / tháng",
      desc: "Doanh nghiệp vừa và nhỏ cần tích hợp AI vào sản phẩm, ứng dụng hoặc quy trình nội bộ.",
      badge: "Phổ biến nhất",
      isPopular: true,
      features: [
        "Phù hợp chính sách thử nghiệm/POC",
        "Môi trường sandbox & production riêng",
        "Cấu hình giới hạn sử dụng & quản trị",
        "Báo cáo token chi tiết"
      ]
    },
    {
      id: "isv",
      name: "ISV",
      code: "vMaaS_100M",
      price: "400.000",
      period: "/ Tháng",
      quota: "100M token / tháng",
      desc: "Agency AI hoặc đơn vị phát triển giải pháp AI cho khách hàng cuối (ISV).",
      badge: "Doanh nghiệp lớn",
      features: [
        "Hạ tầng Inference Suite tối ưu",
        "Hỗ trợ tích hợp sâu & SDK tùy chỉnh",
        "SLA cam kết 99.9%uptime",
        "Bảo mật lưu trữ dữ liệu nội địa"
      ]
    }
  ];

  const enPlans = [
    {
      id: "starter",
      name: "Starter Dev",
      code: "vMaaS_5M",
      price: "24,000",
      period: "/ month",
      quota: "5M tokens / month",
      desc: "Individual developers, testing groups, or small-scale PoC projects.",
      badge: "PoC Pack",
      features: [
        "OpenAI-compatible APIs",
        "Access to entire catalog models",
        "REST API & Python/TS SDKs",
        "Highly secure Viettel IDC infrastructure"
      ]
    },
    {
      id: "freelance",
      name: "Freelance Dev",
      code: "vMaaS_10M",
      price: "45,000",
      period: "/ month",
      quota: "10M tokens / month",
      desc: "Freelancers, small application development teams, or personal automation use cases.",
      badge: "Flexible",
      features: [
        "OpenAI-compatible APIs",
        "Access to entire catalog models",
        "Multiple API Keys management",
        "Accelerated inference priority"
      ]
    },
    {
      id: "sme",
      name: "SME",
      code: "vMaaS_50M",
      price: "213,000",
      period: "/ month",
      quota: "50M tokens / month",
      desc: "Small and medium-sized enterprises needing AI integration into products, apps, or internal workflows.",
      badge: "Most Popular",
      isPopular: true,
      features: [
        "Suitable for testing/PoC policies",
        "Dedicated sandbox & production environment",
        "Custom usage limits & resource administration",
        "Detailed token consumption reporting"
      ]
    },
    {
      id: "isv",
      name: "ISV",
      code: "vMaaS_100M",
      price: "400,000",
      period: "/ month",
      quota: "100M tokens / month",
      desc: "AI agencies or independent software vendors developing AI solutions for end-customers.",
      badge: "Scaled Business",
      features: [
        "Inference Suite optimized environment",
        "Custom depth integration & custom SDKs",
        "SLA commitment with 99.9% uptime",
        "Local data sovereignty & storage compliance"
      ]
    }
  ];

  const plans = language === "vi" ? viPlans : enPlans;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1200) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Guarantee valid currentIndex limits
  useEffect(() => {
    const maxIdx = Math.max(0, plans.length - visibleCount);
    if (currentIndex > maxIdx) {
      setCurrentIndex(maxIdx);
    }
  }, [visibleCount, plans.length, currentIndex]);

  const nextSlide = () => {
    const maxIdx = Math.max(0, plans.length - visibleCount);
    if (currentIndex < maxIdx) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Wrap around to start
    }
  };

  const prevSlide = () => {
    const maxIdx = Math.max(0, plans.length - visibleCount);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIdx); // Wrap around to end
    }
  };

  return (
    <section className="py-5 bg-light border-top" id="pricing-section-container">
      <div className="container px-2 py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="pricing-title text-capitalize font-bold fs-2" style={{ letterSpacing: "-0.5px" }}>
            {language === "vi" ? "Bảng Giá Dịch Vụ vMaaS" : "vMaaS Pricing Tiers"}
          </h2>
          <p className="text-muted max-w-700 mx-auto" style={{ fontSize: "14.5px" }}>
            {language === "vi"
              ? "Lựa chọn gói token tối ưu, phù hợp với mọi quy mô từ phát triển thử nghiệm đến sản lượng lớn của doanh nghiệp."
              : "Choose the optimal token plan suitable for any scale, from pilot sandbox to enterprise-wide production."}
          </p>
          <div className="divider" style={{ backgroundColor: "#ee0033" }}></div>
        </div>

        {/* Dynamic sliding system with 4 blocks visible in 1 row on desktop */}
        <div className="position-relative px-md-5" style={{ minHeight: "450px" }}>
          {/* Free-floating Left Navigation Slider Arrow */}
          {plans.length > visibleCount && (
            <button 
              type="button"
              className="btn rounded-circle d-flex align-items-center justify-content-center shadow-sm border position-absolute"
              onClick={prevSlide}
              style={{ 
                width: "44px", 
                height: "44px", 
                zIndex: 10, 
                backgroundColor: "white", 
                borderColor: "#e2e8f0",
                cursor: "pointer",
                transition: "all 0.2s",
                left: "0",
                top: "40%",
                transform: "translateY(-50%)"
              }}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} className="text-dark" />
            </button>
          )}

          {/* Free-floating Right Navigation Slider Arrow */}
          {plans.length > visibleCount && (
            <button 
              type="button"
              className="btn rounded-circle d-flex align-items-center justify-content-center shadow-sm border position-absolute"
              onClick={nextSlide}
              style={{ 
                width: "44px", 
                height: "44px", 
                zIndex: 10, 
                backgroundColor: "white", 
                borderColor: "#e2e8f0",
                cursor: "pointer",
                transition: "all 0.2s",
                right: "0",
                top: "40%",
                transform: "translateY(-50%)"
              }}
              aria-label="Next Slide"
            >
              <ChevronRight size={20} className="text-dark" />
            </button>
          )}

          {/* Slider masking outer boundary wrapper */}
          <div className="overflow-hidden py-2" style={{ margin: "0 -8px" }}>
            <div 
              className="d-flex" 
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              {plans.map((plan) => (
                <div 
                  key={plan.id} 
                  className="px-2 flex-shrink-0" 
                  style={{ 
                    width: `${100 / visibleCount}%`,
                    boxSizing: "border-box"
                  }}
                  id={`pricing-col-${plan.id}`}
                >
                  <div 
                    className="pricing-card h-100 bg-white border rounded d-flex flex-column justify-content-between transition-all position-relative"
                    style={{ 
                      borderRadius: "8px",
                      overflow: "hidden",
                      minHeight: "560px"
                    }}
                  >
                    {/* Badges removed under user request */}

                    {/* Card Header container */}
                    <div 
                      className="pricing-card-header text-center" 
                      style={{ 
                        backgroundColor: "#ee0033", 
                        color: "white",
                        padding: "24px 16px",
                        borderBottom: "1px solid #ee0033"
                      }}
                    >
                      <div className="text-xs text-uppercase font-bold tracking-widest opacity-85 font-mono mb-1" style={{ fontSize: "11px" }}>
                        {plan.code}
                      </div>
                      <div className="fs-5 fw-bold mb-2 text-capitalize">{plan.name}</div>
                      <div className="pricing-card-price my-1 d-flex justify-content-center align-items-baseline gap-1">
                        <span className="fs-1 fw-black text-white" style={{ color: "white" }}>
                          {plan.price}
                        </span>
                        {plan.price !== "Liên hệ" && plan.price !== "Contact" && (
                          <span className="text-xs opacity-85 text-white" style={{ fontSize: "12px" }}>
                            đ{plan.period}
                          </span>
                        )}
                      </div>
                      <div className="badge bg-white shadow-xs text-danger font-semibold px-2 py-0.5 font-mono mt-1" style={{ fontSize: "10px", color: "#ee0033", letterSpacing: "0.2px" }}>
                        {plan.quota}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="pricing-card-body px-4 py-3 d-flex flex-column flex-grow-1 justify-content-between bg-white">
                      <div>
                        <p className="text-secondary text-center font-medium mb-3 pb-3 border-bottom" style={{ fontSize: "13px", lineHeight: "1.6" }}>
                          {plan.desc}
                        </p>
                        {/* Features list */}
                        <div className="d-flex flex-column gap-2 mb-4">
                          {plan.features.map((feat, idx) => (
                            <div key={idx} className="d-flex align-items-start gap-2.5">
                              <Check size={16} className="text-success mt-0.5 flex-shrink-0 font-bold" />
                              <span className="text-secondary text-left" style={{ fontSize: "13px", lineHeight: "1.4" }}>
                                {feat}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Register and Action buttons footer */}
                      <div className="pricing-card-footer p-0 border-0 bg-transparent d-flex flex-column gap-2 mt-auto">
                        <a 
                          href="#" 
                          className={`btn w-100 py-2.5 text-uppercase font-bold text-decoration-none rounded text-center ${plan.isPopular ? "btn-viettel" : "btn-outline-viettel"}`}
                          style={{ borderRadius: "6px", fontSize: "13px" }}
                          id={`register-plan-${plan.id}`}
                        >
                          {language === "vi" ? "Đăng ký" : "Register"}
                        </a>
                        {plan.id !== "addon" && plan.id !== "customize" && (
                          <a 
                            href="#" 
                            className="btn btn-outline-secondary w-100 py-2 text-uppercase font-semi-bold text-decoration-none border text-secondary bg-white text-center" 
                            style={{ fontSize: "12px", borderRadius: "6px" }} 
                            id={`trial-plan-${plan.id}`}
                          >
                            {language === "vi" ? "Dùng thử" : "Try for Free"}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider bottom dots navigation indicator */}
          {plans.length > visibleCount && (
            <div className="d-flex justify-content-center gap-2 mt-4">
              {Array.from({ length: Math.max(1, plans.length - visibleCount + 1) }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="p-0 rounded-circle transition-all"
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: currentIndex === idx ? "24px" : "8px",
                    height: "8px",
                    backgroundColor: currentIndex === idx ? "#ee0033" : "#cbd5e1",
                    border: "none",
                    borderRadius: "4px",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Additional Options (Tùy chọn bổ sung) */}
        <div className="mt-5 pt-3 px-md-5" id="additional-options-container">
          <h3 className="fs-4 fw-bold text-dark text-start mb-4" style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.5px" }}>
            {language === "vi" ? "Tùy chọn bổ sung" : "Additional Options"}
          </h3>
          <div className="row g-4">
            {/* Left Customize Card */}
            <div className="col-12 col-md-6" id="addon-card-customize">
              <div 
                className="bg-white border rounded p-4 d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between h-100 gap-3"
                style={{ 
                  borderRadius: "12px", 
                  borderColor: "#e2e8f0",
                  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)"
                }}
              >
                <div className="me-2">
                  <h4 className="fs-5 fw-bold text-dark mb-2" style={{ fontSize: "16px", fontFamily: "var(--font-sans)" }}>
                    {language === "vi" ? "Customize (Theo nhu cầu)" : "Customize (On-demand)"}
                  </h4>
                  <p className="text-secondary mb-0" style={{ fontSize: "13px", lineHeight: "1.5" }}>
                    {language === "vi" 
                      ? "Doanh nghiệp lớn/tập đoàn có nhu cầu token lớn, cấu hình riêng hoặc triển khai BYOM."
                      : "Large enterprises/corporations with massive token requirements, custom configurations, or BYOM implementation."}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="#contact"
                    className="btn py-2 px-4 text-white text-nowrap text-decoration-none d-inline-block hover:opacity-90"
                    style={{ 
                      backgroundColor: "#000000", 
                      borderRadius: "20px", 
                      fontSize: "13px",
                      fontWeight: "600"
                    }}
                  >
                    {language === "vi" ? "Liên hệ tư vấn" : "Contact Consultation"}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Add-on Card */}
            <div className="col-12 col-md-6" id="addon-card-token">
              <div 
                className="bg-white border rounded p-4 d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between h-100 gap-3"
                style={{ 
                  borderRadius: "12px", 
                  borderColor: "#e2e8f0",
                  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)"
                }}
              >
                <div className="me-2 d-flex flex-column justify-content-between h-100">
                  <div>
                    <h4 className="fs-5 fw-bold text-dark mb-2" style={{ fontSize: "16px", fontFamily: "var(--font-sans)" }}>
                      {language === "vi" ? "Add-on Token (vMaaS_1M)" : "Add-on Token (vMaaS_1M)"}
                    </h4>
                    <p className="text-secondary mb-2" style={{ fontSize: "13px", lineHeight: "1.5" }}>
                      {language === "vi" 
                        ? "Gói bổ sung khi khách hàng cần mở rộng dung lượng ngoài hạn mức gói chính."
                        : "Additional package when customers need to expand capacity beyond the primary plan limit."}
                    </p>
                  </div>
                  <span className="fw-semibold d-inline-block mt-1" style={{ color: "#ee0033", fontSize: "13px" }}>
                    {language === "vi" ? "Block 1.000.000 token" : "Block 1,000,000 tokens"}
                  </span>
                </div>

                <div className="d-flex flex-column align-items-start align-items-sm-end flex-shrink-0 ms-sm-auto" style={{ minWidth: "120px" }}>
                  <div className="text-sm-end mb-2">
                    <div className="d-flex align-items-baseline justify-content-sm-end gap-1">
                      <span className="fs-4 fw-black text-dark" style={{ letterSpacing: "-0.5px" }}>5.000</span>
                      <span className="text-muted" style={{ fontSize: "12px", fontWeight: "600" }}>đ</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-light py-1.5 px-4 text-dark font-medium w-100 hover:bg-light"
                    style={{ 
                      borderRadius: "20px", 
                      fontSize: "12px",
                      borderColor: "#e2e8f0",
                      backgroundColor: "#ffffff",
                      fontWeight: "600",
                      border: "1px solid #cbd5e1"
                    }}
                  >
                    {language === "vi" ? "Thêm vào" : "Add"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Taxes VAT footnote */}
        <div className="text-center mt-5" id="pricing-footnote">
          <p className="text-secondary mb-1" style={{ fontSize: "13px", fontStyle: "italic" }}>
            {language === "vi"
              ? "* Bảng giá kinh doanh thử nghiệm chưa bao gồm thuế VAT (nếu có)."
              : "* Trial pricing packages exclude VAT (if applicable)."}
          </p>
          <p className="text-secondary m-0" style={{ fontSize: "13px" }}>
            {language === "vi"
              ? "Chu kỳ thanh toán tối thiểu là 03 tháng. Hình thức thanh toán: Trả trước."
              : "Minimum billing cycle: 03 months. Billing arrangement: Prepaid."}
          </p>
        </div>
      </div>
    </section>
  );
}
