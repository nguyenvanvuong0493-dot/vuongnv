import React from "react";
import { ChevronDown, ShoppingCart, PlayCircle } from "lucide-react";

interface HeroProps {
  language: "vi" | "en";
}

export default function Hero({ language }: HeroProps) {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("pricing-section-container");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isVi = language === "vi";

  return (
    <section 
      className="vt-hero px-2" 
      id="hero-section"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(139, 0, 0, 0.3) 0%, rgba(139, 0, 0, 0) 50%), url("https://i.ibb.co/XfSQL7S3/banner.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative"
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left panel text contents */}
          <div className="col-lg-8 text-white">
            <h1 className="display-4 fw-black mb-4" style={{ letterSpacing: "-0.5px", fontSize: "2.8rem", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
              Viettel Model as a Service (vMaaS)
            </h1>
            <p className="lead fw-normal mb-5 opacity-90" style={{ lineHeight: "1.7", fontSize: "16px", textShadow: "0 1px 2px rgba(0,0,0,0.5)", maxWidth: "560px" }}>
              {isVi 
                ? "Nền tảng cung cấp mô hình AI dưới dạng API, giúp doanh nghiệp tích hợp AI nhanh chóng, tối ưu chi phí và vận hành an toàn trên hạ tầng Viettel IDC tại Việt Nam."
                : "An AI model API platform that helps businesses integrate AI quickly, optimize costs and operate securely on Viettel IDC infrastructure in Vietnam."}
            </p>

            {/* Buttons row */}
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a 
                href="#pricing"
                onClick={scrollToPricing}
                className="btn btn-light text-danger bg-white hover:bg-light px-4 py-2.5 fw-bold border-white"
                style={{ borderRadius: "4px", color: "#ee0033", fontSize: "14px" }}
                id="hero-consultation-btn"
              >
                {isVi ? "Nhận tư vấn" : "Get Consultation"}
              </a>

              <a 
                href="#pricing"
                onClick={scrollToPricing}
                className="btn btn-outline-light text-white px-4 py-2.5 fw-semibold border-white bg-transparent"
                style={{ borderRadius: "4px", fontSize: "14px" }}
                id="hero-trial-btn"
              >
                {isVi ? "Đăng ký dùng thử" : "Request Trial"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
