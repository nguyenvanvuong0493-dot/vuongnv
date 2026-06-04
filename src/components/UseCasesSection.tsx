import React from "react";
import { MessageSquare, Database, FileText, Code2, Megaphone, Zap } from "lucide-react";

interface UseCasesSectionProps {
  language: "vi" | "en";
}

export default function UseCasesSection({ language }: UseCasesSectionProps) {
  const viUseCases = [
    {
      id: "chatbot",
      icon: <MessageSquare size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "1. AI Chatbot CSKH",
      desc: "Trợ lý ảo trả lời tự động câu hỏi khách hàng 24/7 trên website, ứng dụng, Zalo OA hoặc kênh CSKH khác.",
      model: "Qwen3-32B / Qwen3-14B"
    },
    {
      id: "knowledge-base",
      icon: <Database size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "2. Hỏi đáp trên kho tri thức nội bộ",
      desc: "Xây dựng hệ thống Q&A dựa trên quy trình, chính sách, tài liệu sản phẩm, hướng dẫn nghiệp vụ; hỗ trợ tìm kiếm chính xác và trả lời có trích dẫn nguồn.",
      model: "Qwen3-4B-Instruct / Qwen3-32B / BGE-M3 / BGE-Reranker-V2-M3"
    },
    {
      id: "doc-summary",
      icon: <FileText size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "3. Tóm tắt & phân tích tài liệu",
      desc: "Tóm tắt hợp đồng, báo cáo tài chính, biên bản họp và tài liệu dài; hỗ trợ trích xuất ý chính, so sánh tài liệu và tổng hợp insight.",
      model: "Qwen3-14B / Llama3.1-8B"
    },
    {
      id: "coding-assistant",
      icon: <Code2 size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "4. Trợ lý lập trình",
      desc: "Sinh code, gợi ý code, review code, phát hiện lỗi và tích hợp vào IDE qua API tương thích OpenAI.",
      model: "Qwen3-32B / Qwen3-14B"
    },
    {
      id: "marketing",
      icon: <Megaphone size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "5. Sinh nội dung Marketing",
      desc: "Hỗ trợ viết blog, social post, email marketing, mô tả sản phẩm và biến thể nội dung theo nhiều phong cách.",
      model: "Qwen3-32B / Qwen3-14B / Llama3.1-8B"
    },
    {
      id: "automation",
      icon: <Zap size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "6. Tự động hóa quy trình (RPA + AI)",
      desc: "Phân loại email, trích xuất thông tin từ form/tài liệu, gọi tool hoặc function để hoàn thành quy trình nội bộ.",
      model: "Qwen3-14B / Qwen3-4B-Instruct"
    }
  ];

  const enUseCases = [
    {
      id: "chatbot",
      icon: <MessageSquare size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "1. Customer service AI chatbot",
      desc: "A virtual assistant that automatically answers customer questions 24/7 on websites, apps, Zalo OA or other support channels.",
      model: "Qwen3-32B / Qwen3-14B"
    },
    {
      id: "knowledge-base",
      icon: <Database size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "2. Internal knowledge-base Q&A",
      desc: "Builds Q&A systems based on internal processes, policies, product documents and operational guidelines, supporting accurate search and source-based answers.",
      model: "Qwen3-4B-Instruct / Qwen3-32B / BGE-M3 / BGE-Reranker-V2-M3"
    },
    {
      id: "doc-summary",
      icon: <FileText size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "3. Document summarization and analysis",
      desc: "Summarizes contracts, financial reports, meeting minutes and long documents, supporting key-point extraction, document comparison and insight generation.",
      model: "Qwen3-14B / Llama3.1-8B"
    },
    {
      id: "coding-assistant",
      icon: <Code2 size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "4. Coding assistant",
      desc: "Supports code generation, code suggestion, code review, bug detection and IDE integration through OpenAI-compatible APIs.",
      model: "Qwen3-32B / Qwen3-14B"
    },
    {
      id: "marketing",
      icon: <Megaphone size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "5. Marketing content generation",
      desc: "Supports blog posts, social posts, marketing emails, product descriptions and content variations across tones and contexts.",
      model: "Qwen3-32B / Qwen3-14B / Llama3.1-8B"
    },
    {
      id: "automation",
      icon: <Zap size={24} className="text-danger" style={{ color: "#ee0033" }} />,
      title: "6. Process automation (RPA + AI)",
      desc: "Classifies emails, extracts information from forms/documents and calls tools or functions to complete internal workflows.",
      model: "Qwen3-14B / Qwen3-4B-Instruct"
    }
  ];

  const useCases = language === "vi" ? viUseCases : enUseCases;

  return (
    <section className="py-5 bg-light border-top animate-fade-in" id="truong-hop-ungs-dung-section">
      <div className="container px-2 py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="pricing-title text-capitalize font-bold fs-2" style={{ letterSpacing: "-0.5px" }}>
            {language === "vi" ? "Trường Hợp Ứng Dụng Thực Tế" : "Practical Use Cases"}
          </h2>
          <p className="text-muted max-w-700 mx-auto" style={{ fontSize: "14.5px" }}>
            {language === "vi"
              ? "vMaaS hóa các bài toán kinh doanh phức tạp bằng trí tuệ nhân tạo thế hệ mới với hiệu năng tối ưu nhất."
              : "Solve complex business challenges using generative AI models customized for high performance."}
          </p>
          <div className="divider" style={{ backgroundColor: "#ee0033" }}></div>
        </div>

        {/* Use cases Grid */}
        <div className="row g-4">
          {useCases.map((uc) => (
            <div key={uc.id} className="col-md-6 col-lg-4" id={`uc-card-${uc.id}`}>
              <div 
                className="p-4 bg-white border h-100 rounded d-flex flex-column justify-content-between transition-all"
                style={{ 
                  boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                  borderRadius: "8px"
                }}
              >
                <div>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div 
                      className="d-flex align-items-center justify-content-center"
                      style={{ width: "32px", height: "32px" }}
                    >
                      {uc.icon}
                    </div>
                    <h4 className="fs-6 fw-bold text-dark m-0">{uc.title}</h4>
                  </div>
                  <p className="text-secondary mb-3" style={{ fontSize: "13.5px", lineHeight: "1.7" }}>
                    {uc.desc}
                  </p>
                </div>
                <div className="pt-3 border-top mt-auto">
                  <span className="text-xs text-muted d-block font-mono mb-1" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>
                    {language === "vi" ? "MÔ HÌNH ĐỀ XUẤT:" : "SUGGESTED MODELS:"}
                  </span>
                  <span 
                    className="badge border text-dark font-mono font-medium px-2 py-1.5" 
                    style={{ fontSize: "12px", backgroundColor: "#f8fafc", color: "#334155" }}
                  >
                    {uc.model}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
