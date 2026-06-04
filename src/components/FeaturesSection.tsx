import React from "react";
import { Sparkles, Code2, Cpu, BarChart3, Headphones } from "lucide-react";

interface FeaturesSectionProps {
  language: "vi" | "en";
}

export default function FeaturesSection({ language }: FeaturesSectionProps) {
  const viFeatures = [
    {
      id: "ai-app",
      icon: <Sparkles size={26} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "1. Ứng dụng AI",
      desc: "Giao diện giúp người dùng tương tác và quan sát kết quả trực quan từ các mô hình phổ biến như LLM, Text-to-Image và Embedding."
    },
    {
      id: "dev-tools",
      icon: <Code2 size={26} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "2. Công cụ phát triển",
      desc: "REST API và SDK tương thích OpenAI giúp tích hợp nhanh vào ứng dụng hiện có; hỗ trợ tài liệu kỹ thuật, code samples và môi trường thử nghiệm cho developer."
    },
    {
      id: "model-mgmt",
      icon: <Cpu size={26} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "3. Quản lý mô hình",
      desc: "Quản lý danh mục mô hình AI, cấu hình giới hạn sử dụng và định hướng hỗ trợ mô hình tùy chỉnh của doanh nghiệp (BYOM - Bring Your Own Model)."
    },
    {
      id: "billing-users",
      icon: <BarChart3 size={26} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "4. Quản lý tài khoản & sử dụng",
      desc: "Hỗ trợ quản lý API Key, theo dõi mức sử dụng tài nguyên, báo cáo token tiêu thụ và quản lý thanh toán/tín dụng dịch vụ."
    },
    {
      id: "ops-support",
      icon: <Headphones size={26} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "5. Hỗ trợ & vận hành",
      desc: "Cung cấp tài liệu, FAQ và hỗ trợ kỹ thuật từ đội ngũ Viettel IDC nhằm đảm bảo quá trình triển khai và vận hành AI ổn định."
    }
  ];

  const enFeatures = [
    {
      id: "ai-app",
      icon: <Sparkles size={26} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "1. AI applications",
      desc: "Provides an interface for users to interact with and visualize outputs from popular models such as LLMs, Text-to-Image and Embedding."
    },
    {
      id: "dev-tools",
      icon: <Code2 size={26} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "2. Developer tools",
      desc: "OpenAI-compatible REST APIs and SDKs for fast integration into existing applications, supported by technical documentation, code samples and a testing environment for developers."
    },
    {
      id: "model-mgmt",
      icon: <Cpu size={26} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "3. Model management",
      desc: "Enables AI model catalog management, usage limit configuration and a roadmap for enterprise custom model deployment (BYOM - Bring Your Own Model)."
    },
    {
      id: "billing-users",
      icon: <BarChart3 size={26} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "4. Account and usage management",
      desc: "Supports API key management, resource usage tracking, token consumption reports and service billing/credit management."
    },
    {
      id: "ops-support",
      icon: <Headphones size={26} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "5. Support and operations",
      desc: "Provides documentation, FAQs and technical support from Viettel IDC to ensure stable AI deployment and operation."
    }
  ];

  const features = language === "vi" ? viFeatures : enFeatures;

  return (
    <section className="py-5 bg-light border-top" id="tinh-nang-section">
      <div className="container px-2 py-4">
        {/* Title details */}
        <div className="text-start mb-5">
          <h2 className="pricing-title text-capitalize font-bold fs-2" style={{ letterSpacing: "-0.5px" }}>
            {language === "vi" ? "Tính Năng Nổi Bật của vMaaS" : "Key Features of vMaaS"}
          </h2>
          <p className="text-muted max-w-700 ms-0" style={{ fontSize: "14.5px" }}>
            {language === "vi" 
              ? "Cung cấp hệ sinh thái tính năng toàn diện cho việc phát triển, kiểm thử và vận hành ứng dụng trí tuệ nhân tạo." 
              : "Powering your AI application lifecycle with a comprehensive suite of enterprise-grade features."}
          </p>
          <div className="divider ms-0" style={{ backgroundColor: "#ee0033", margin: "15px 0" }}></div>
        </div>

        {/* Features grid - 3 columns */}
        <div className="row g-4 justify-content-start">
          {features.map((feat) => (
            <div key={feat.id} className="col-md-6 col-lg-4" id={`feat-card-${feat.id}`}>
              <div 
                className="p-4 bg-white border h-100 rounded transition-all"
                style={{ 
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)", 
                  borderLeft: "4px solid #ee0033",
                  borderRadius: "8px"
                }}
              >
                <div className="mb-3 d-flex align-items-center gap-3">
                  <div className="p-2 bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "42px", height: "42px" }}>
                    {feat.icon}
                  </div>
                  <h4 className="fs-6 fw-bold text-dark m-0">{feat.title}</h4>
                </div>
                <p className="text-secondary m-0" style={{ fontSize: "13.5px", lineHeight: "1.7" }}>
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
