import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

interface FaqSectionProps {
  language: "vi" | "en";
}

export default function FaqSection({ language }: FaqSectionProps) {
  const viFaqs = [
    {
      id: "faq-1",
      question: "1. vMaaS là gì?",
      answer: "vMaaS là dịch vụ cung cấp các mô hình AI dưới dạng API, hỗ trợ xử lý ngôn ngữ, hình ảnh, âm thanh và embedding, với chuẩn tương thích OpenAI API."
    },
    {
      id: "faq-2",
      question: "2. Doanh nghiệp có cần tự đầu tư GPU/NPU để dùng vMaaS không?",
      answer: "Không. Doanh nghiệp có thể tích hợp AI vào ứng dụng, sản phẩm hoặc quy trình thông qua API mà không cần đầu tư hạ tầng AI hay xây dựng đội ngũ MLOps chuyên biệt."
    },
    {
      id: "faq-3",
      question: "3. Dữ liệu có được xử lý tại Việt Nam không?",
      answer: "Có. vMaaS được vận hành trên hạ tầng trung tâm dữ liệu của Viettel IDC tại Việt Nam, hỗ trợ đáp ứng yêu cầu về chủ quyền dữ liệu, lưu trữ nội địa và bảo mật."
    },
    {
      id: "faq-4",
      question: "4. Dữ liệu khách hàng có được dùng để huấn luyện mô hình bên thứ ba không?",
      answer: "Không. Dữ liệu khách hàng không được sử dụng để huấn luyện mô hình bên thứ ba."
    },
    {
      id: "faq-5",
      question: "5. Dịch vụ có tương thích OpenAI API không?",
      answer: "Có. vMaaS cung cấp REST API và SDK tương thích OpenAI, giúp doanh nghiệp dễ tích hợp với ứng dụng hiện có."
    },
    {
      id: "faq-6",
      question: "6. Khách hàng có thể dùng những loại mô hình nào?",
      answer: "Trong giai đoạn thử nghiệm, vMaaS cung cấp tối thiểu 09 mô hình AI gồm LLM, tạo ảnh, embedding, reranker và mô hình thị giác-ngôn ngữ. Danh mục mô hình có thể được cập nhật theo nhu cầu và khả năng tương thích hệ thống."
    },
    {
      id: "faq-7",
      question: "7. Có gói dùng thử/POC không?",
      answer: "Có. Chính sách POC dự kiến áp dụng gói vMaaS_50M trong tối đa 01 tháng, tối đa 01 gói và 01 lượt dùng thử cho mỗi khách hàng. Các yêu cầu ngoài chính sách cần phê duyệt riêng."
    },
    {
      id: "faq-8",
      question: "8. Có thể mua thêm token khi vượt hạn mức không?",
      answer: "Có. Khách hàng có thể mua Add-on Token theo block +1M token hoặc lựa chọn gói Customize nếu có nhu cầu đặc thù."
    },
    {
      id: "faq-9",
      question: "9. Chu kỳ thanh toán tối thiểu là bao lâu?",
      answer: "Theo chính sách kinh doanh thử nghiệm, hình thức thanh toán là trả trước và chu kỳ tối thiểu là 03 tháng."
    }
  ];

  const enFaqs = [
    {
      id: "faq-1",
      question: "1. What is vMaaS?",
      answer: "vMaaS provides AI models as APIs, supporting language, image, audio and embedding tasks with OpenAI API compatibility."
    },
    {
      id: "faq-2",
      question: "2. Does a business need to invest in GPU/NPU infrastructure to use vMaaS?",
      answer: "No. Businesses can integrate AI into applications, products or workflows through APIs without investing in AI infrastructure or building a dedicated MLOps team."
    },
    {
      id: "faq-3",
      question: "3. Is data processed in Vietnam?",
      answer: "Yes. vMaaS runs on Viettel IDC data center infrastructure in Vietnam, supporting data sovereignty, domestic data storage and security requirements."
    },
    {
      id: "faq-4",
      question: "4. Is customer data used to train third-party models?",
      answer: "No. Customer data is not used to train third-party models."
    },
    {
      id: "faq-5",
      question: "5. Is the service compatible with OpenAI APIs?",
      answer: "Yes. vMaaS provides OpenAI-compatible REST APIs and SDKs for easy integration with existing applications."
    },
    {
      id: "faq-6",
      question: "6. What model categories are available?",
      answer: "During the trial phase, vMaaS provides at least 09 AI models, including LLMs, text-to-image, embedding, reranker and vision-language models. The model catalog can be updated based on customer needs and system compatibility."
    },
    {
      id: "faq-7",
      question: "7. Is there a trial/PoC package?",
      answer: "Yes. The expected PoC policy provides the vMaaS_50M package for up to 01 month, with a maximum of 01 trial package and 01 trial per customer. Requests outside the policy require separate approval."
    },
    {
      id: "faq-8",
      question: "8. Can customers buy additional tokens after exceeding the quota?",
      answer: "Yes. Customers can purchase Add-on Token blocks of +1M tokens or choose a Customize package for special requirements."
    },
    {
      id: "faq-9",
      question: "9. What is the minimum billing cycle?",
      answer: "Under the trial business policy, payment is prepaid and the minimum billing cycle is 03 months."
    }
  ];

  const faqs = language === "vi" ? viFaqs : enFaqs;
  const [expandedId, setExpandedId] = useState<string | null>("faq-1");

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  // Splitting faqs roughly evenly: 5 on left, 4 on right
  const leftFaqs = faqs.slice(0, 5);
  const rightFaqs = faqs.slice(5);

  return (
    <section className="py-5 bg-white border-top animate-fade-in" id="cau-hoi-section">
      <div className="container px-2 py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="pricing-title text-capitalize font-bold fs-2" style={{ letterSpacing: "-0.5px" }}>
            {language === "vi" ? "Câu Hỏi Thường Gặp (FAQs)" : "Frequently Asked Questions (FAQs)"}
          </h2>
          <p className="text-muted max-w-700 mx-auto" style={{ fontSize: "14.5px" }}>
            {language === "vi" 
              ? "Giải đáp các thắc mắc phổ biến nhất của quý khách khi tìm hiểu về giải pháp vMaaS." 
              : "Answers to the most common questions regarding the vMaaS platform offerings."}
          </p>
          <div className="divider" style={{ backgroundColor: "#ee0033" }}></div>
        </div>

        {/* Collapsible item layout in 2 columns */}
        <div className="row g-3">
          {/* Left Column (First 5 FAQs) */}
          <div className="col-lg-6">
            <div className="accordion bg-transparent" id="faqAccordionLeft">
              {leftFaqs.map((faq) => {
                const isExpanded = expandedId === faq.id;
                return (
                  <div 
                    key={faq.id} 
                    className="card mb-3 border bg-white rounded transition-all"
                    style={{ overflow: "hidden", boxShadow: "0 2px 4px rgba(0,0,0,0.02)", borderRadius: "8px" }}
                    id={`faq-item-${faq.id}`}
                  >
                    <div 
                      className="card-header border-0 bg-transparent px-4 py-3 d-flex justify-content-between align-items-center"
                      onClick={() => toggleExpand(faq.id)}
                      style={{ cursor: "pointer", userSelect: "none" }}
                    >
                      <h3 className="m-0 fs-6 fw-bold text-dark d-flex align-items-start gap-2 pe-3" style={{ lineHeight: "1.4", fontSize: "14px" }}>
                        <HelpCircle size={18} className="text-danger mt-1 flex-shrink-0" style={{ color: "#ee0033" }} />
                        {faq.question}
                      </h3>
                      <span className="text-secondary flex-shrink-0">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </span>
                    </div>

                    {isExpanded && (
                      <div className="card-body border-top bg-light px-4 py-3">
                        <p className="text-secondary m-0" style={{ fontSize: "13.5px", lineHeight: "1.7" }}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (Remaining 4 FAQs) */}
          <div className="col-lg-6">
            <div className="accordion bg-transparent" id="faqAccordionRight">
              {rightFaqs.map((faq) => {
                const isExpanded = expandedId === faq.id;
                return (
                  <div 
                    key={faq.id} 
                    className="card mb-3 border bg-white rounded transition-all"
                    style={{ overflow: "hidden", boxShadow: "0 2px 4px rgba(0,0,0,0.02)", borderRadius: "8px" }}
                    id={`faq-item-${faq.id}`}
                  >
                    <div 
                      className="card-header border-0 bg-transparent px-4 py-3 d-flex justify-content-between align-items-center"
                      onClick={() => toggleExpand(faq.id)}
                      style={{ cursor: "pointer", userSelect: "none" }}
                    >
                      <h3 className="m-0 fs-6 fw-bold text-dark d-flex align-items-start gap-2 pe-3" style={{ lineHeight: "1.4", fontSize: "14px" }}>
                        <HelpCircle size={18} className="text-danger mt-1 flex-shrink-0" style={{ color: "#ee0033" }} />
                        {faq.question}
                      </h3>
                      <span className="text-secondary flex-shrink-0">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </span>
                    </div>

                    {isExpanded && (
                      <div className="card-body border-top bg-light px-4 py-3">
                        <p className="text-secondary m-0" style={{ fontSize: "13.5px", lineHeight: "1.7" }}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
