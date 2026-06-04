import React from "react";
import { Languages, Coins, ShieldCheck, Boxes, Code2, TrendingUp } from "lucide-react";

interface AdvantagesSectionProps {
  language: "vi" | "en";
}

export default function AdvantagesSection({ language }: AdvantagesSectionProps) {
  const viAdvantages = [
    {
      id: "vietnam-ai",
      icon: <Languages size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "1. Tối ưu cho bài toán AI tại Việt Nam",
      desc: "Hỗ trợ các mô hình AI phù hợp với ngữ cảnh tiếng Việt và nhu cầu triển khai thực tế tại Việt Nam; có khả năng mở rộng theo từng ngành như BFSI, bán lẻ, logistics, y tế và khu vực công."
    },
    {
      id: "cost-opt",
      icon: <Coins size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "2. Chi phí tối ưu & triển khai đơn giản",
      desc: "Tích hợp qua API tương thích OpenAI, không cần đầu tư hạ tầng GPU/NPU hoặc đội ngũ MLOps riêng. Nền tảng sử dụng Qualcomm AI Inference Suite và AI accelerator tối ưu cho inference."
    },
    {
      id: "security",
      icon: <ShieldCheck size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "3. Bảo mật dữ liệu & vận hành tại Việt Nam",
      desc: "Triển khai trên hạ tầng trung tâm dữ liệu Viettel IDC tại Việt Nam, hỗ trợ đáp ứng yêu cầu chủ quyền dữ liệu, lưu trữ nội địa và bảo mật thông tin. Dữ liệu khách hàng không được sử dụng để huấn luyện mô hình bên thứ ba."
    },
    {
      id: "ecosystem",
      icon: <Boxes size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "4. Hệ sinh thái AI mở rộng",
      desc: "vMaaS được định hướng phát triển thành hệ sinh thái AI toàn diện với các dịch vụ như MLOps, Vector Database, Knowledge Base-as-a-Service và Agent Builder."
    },
    {
      id: "multi-model",
      icon: <Code2 size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "5. Một nền tảng, nhiều mô hình",
      desc: "Cho phép kết nối nhiều nhóm mô hình AI qua một chuẩn API, hỗ trợ từ LLM, tạo ảnh, embedding, reranker đến mô hình thị giác-ngôn ngữ."
    },
    {
      id: "scalability",
      icon: <TrendingUp size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "6. Phù hợp từ thử nghiệm đến triển khai quy mô lớn",
      desc: "Cung cấp các gói token linh hoạt từ Starter Dev, Freelance Dev, SME, ISV đến Customize, phù hợp cho PoC, phát triển ứng dụng và triển khai doanh nghiệp."
    }
  ];

  const enAdvantages = [
    {
      id: "vietnam-ai",
      icon: <Languages size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "1. Optimized for AI use cases in Vietnam",
      desc: "Supports AI models suitable for Vietnamese language context and practical deployment needs in Vietnam, with room to expand by industry such as BFSI, retail, logistics, healthcare and public sector."
    },
    {
      id: "cost-opt",
      icon: <Coins size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "2. Cost-optimized and simple to deploy",
      desc: "Integrates via OpenAI-compatible APIs without requiring customers to invest in GPU/NPU infrastructure or a dedicated MLOps team. The platform uses Qualcomm AI Inference Suite and AI accelerators optimized for inference."
    },
    {
      id: "security",
      icon: <ShieldCheck size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "3. Data security and Vietnam-based operation",
      desc: "Deployed on Viettel IDC data center infrastructure in Vietnam, supporting data sovereignty, domestic data storage and information security requirements. Customer data is not used to train third-party models."
    },
    {
      id: "ecosystem",
      icon: <Boxes size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "4. Expandable AI ecosystem",
      desc: "vMaaS is positioned to evolve into a broader AI ecosystem with services such as MLOps, Vector Database, Knowledge Base-as-a-Service and Agent Builder."
    },
    {
      id: "multi-model",
      icon: <Code2 size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "5. One platform, multiple AI models",
      desc: "Enables access to multiple model categories through a single API standard, covering LLMs, text-to-image, embedding, reranker and vision-language models."
    },
    {
      id: "scalability",
      icon: <TrendingUp size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "6. Suitable from PoC to large-scale deployment",
      desc: "Offers flexible monthly token packages from Starter Dev, Freelance Dev, SME and ISV to Customize, suitable for PoC, application development and enterprise deployment."
    }
  ];

  const advantages = language === "vi" ? viAdvantages : enAdvantages;

  return (
    <section className="py-5 bg-white border-top" id="uu-diem-section">
      <div className="container px-2 py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="pricing-title text-capitalize font-bold fs-2" style={{ letterSpacing: "-0.5px" }}>
            {language === "vi" ? "Ưu Điểm Vượt Trội vMaaS" : "Key Advantages of vMaaS"}
          </h2>
          <p className="text-muted max-w-700 mx-auto" style={{ fontSize: "14.5px" }}>
            {language === "vi" 
              ? "Tại sao nên chọn Viettel Model as a Service cho giải pháp ứng dụng trí tuệ nhân tạo?" 
              : "Why choose Viettel Model as a Service for your AI solution enablement?"}
          </p>
          <div className="divider" style={{ backgroundColor: "#ee0033" }}></div>
        </div>

        {/* Advantages items row - beautiful card grid */}
        <div className="row g-4">
          {advantages.map((adv) => (
            <div key={adv.id} className="col-md-6 col-lg-4" id={`adv-card-${adv.id}`}>
              <div 
                className="p-4 bg-light border h-100 rounded transition-all"
                style={{ 
                  boxShadow: "0 2px 5px rgba(0,0,0,0.01)",
                  borderRadius: "8px"
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div 
                    className="d-flex align-items-center justify-content-center"
                    style={{ width: "32px", height: "32px" }}
                  >
                    {adv.icon}
                  </div>
                  <h4 className="fs-6 fw-bold text-dark m-0">{adv.title}</h4>
                </div>
                <p className="text-secondary m-0" style={{ fontSize: "13.5px", lineHeight: "1.7" }}>
                  {adv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
