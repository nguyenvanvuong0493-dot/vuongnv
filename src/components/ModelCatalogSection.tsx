import React from "react";
import { Cpu, MessageSquare, Image, Search, ChevronRight, Binary } from "lucide-react";

interface ModelCatalogSectionProps {
  language: "vi" | "en";
}

export default function ModelCatalogSection({ language }: ModelCatalogSectionProps) {
  const viLlmModels = [
    {
      name: "Qwen/Qwen3-32B",
      desc: "Phù hợp suy luận nhiều bước, phân tích tài liệu chuyên sâu, hỗ trợ lập trình, RAG nâng cao và tự động hóa quy trình có gọi công cụ.",
      badge: "32B Parameters",
      type: "Reasoning & Agentic"
    },
    {
      name: "Qwen/Qwen3-14B",
      desc: "Cân bằng hiệu năng và chi phí, phù hợp chatbot, phân tích văn bản, tóm tắt, suy luận và tác vụ doanh nghiệp yêu cầu độ chính xác cao.",
      badge: "14B Parameters",
      type: "Balanced Chat"
    },
    {
      name: "Meta-llama/Llama-3.1-8B",
      desc: "Mô hình đa ngôn ngữ với ngữ cảnh dài, phù hợp tóm tắt, hỏi đáp, sử dụng công cụ, suy luận và hỗ trợ lập trình.",
      badge: "8B Parameters",
      type: "Multilingual Instruct"
    },
    {
      name: "Aisingapore/Llama-SEA-LION-v3.5-8B-R",
      desc: "Tối ưu cho ngôn ngữ và văn hóa Đông Nam Á, hỗ trợ tiếng Việt và hội thoại đa ngôn ngữ.",
      badge: "8B Parameters",
      type: "Regional Optimization"
    },
    {
      name: "Qwen/Qwen3-4B-Instruct-2507",
      desc: "Mô hình nhỏ gọn, hiệu quả cho tuân thủ hướng dẫn, suy luận logic, đọc hiểu, toán học, lập trình và gọi công cụ.",
      badge: "4B Parameters",
      type: "Edge & Fast Inference"
    }
  ];

  const enLlmModels = [
    {
      name: "Qwen/Qwen3-32B",
      desc: "Suitable for multi-step reasoning, deep document analysis, coding assistance, advanced RAG and tool-calling workflow automation.",
      badge: "32B Parameters",
      type: "Reasoning & Agentic"
    },
    {
      name: "Qwen/Qwen3-14B",
      desc: "Balances performance and cost for chatbots, text analysis, summarization, reasoning and enterprise tasks requiring high accuracy.",
      badge: "14B Parameters",
      type: "Balanced Chat"
    },
    {
      name: "Meta-llama/Llama-3.1-8B",
      desc: "Multilingual long-context model for summarization, Q&A, tool use, reasoning and coding assistance.",
      badge: "8B Parameters",
      type: "Multilingual Instruct"
    },
    {
      name: "Aisingapore/Llama-SEA-LION-v3.5-8B-R",
      desc: "Optimized for Southeast Asian languages and culture, supporting Vietnamese and multilingual conversations.",
      badge: "8B Parameters",
      type: "Regional Optimization"
    },
    {
      name: "Qwen/Qwen3-4B-Instruct-2507",
      desc: "Compact and efficient model for instruction following, logical reasoning, reading comprehension, math, coding and tool calling.",
      badge: "4B Parameters",
      type: "Edge & Fast Inference"
    }
  ];

  const viOtherModels = [
    {
      name: "Stabilityai/sdxl-turbo",
      desc: "Tạo ảnh từ văn bản với tốc độ phản hồi nhanh.",
      badge: "Image Gen",
      type: "Fast Text-to-Image"
    },
    {
      name: "BAAI/bge-m3",
      desc: "Embedding cho tìm kiếm ngữ nghĩa, RAG, hỏi đáp kho tri thức và phát hiện nội dung trùng lặp.",
      badge: "Embedding",
      type: "Semantic Vectorization"
    },
    {
      name: "BAAI/bge-reranker-v2-m3",
      desc: "Sắp xếp lại mức độ liên quan trong pipeline RAG.",
      badge: "Reranker",
      type: "Search Optimization"
    },
    {
      name: "Qwen/Qwen 2.5-VL-7B",
      desc: "Mô hình thị giác-ngôn ngữ cho nhận diện hình ảnh, mô tả ảnh, suy luận trực quan, xử lý tài liệu scan, hóa đơn, biểu mẫu.",
      badge: "Vision LLM",
      type: "Multimodal AI"
    }
  ];

  const enOtherModels = [
    {
      name: "Stabilityai/sdxl-turbo",
      desc: "Fast text-to-image generation.",
      badge: "Image Gen",
      type: "Fast Text-to-Image"
    },
    {
      name: "BAAI/bge-m3",
      desc: "Embedding for semantic search, RAG, knowledge-base Q&A and duplicate content detection.",
      badge: "Embedding",
      type: "Semantic Vectorization"
    },
    {
      name: "BAAI/bge-reranker-v2-m3",
      desc: "Reranks relevance in RAG pipelines.",
      badge: "Reranker",
      type: "Search Optimization"
    },
    {
      name: "Qwen/Qwen 2.5-VL-7B",
      desc: "Vision-language model for image recognition, image description, visual reasoning, scanned documents, invoices and forms.",
      badge: "Vision LLM",
      type: "Multimodal AI"
    }
  ];

  const llmModels = language === "vi" ? viLlmModels : enLlmModels;
  const otherModels = language === "vi" ? viOtherModels : enOtherModels;

  return (
    <section className="py-5 bg-white border-top animate-fade-in" id="danh-muc-model-section">
      <div className="container px-2 py-4">
        {/* Title details */}
        <div className="text-center mb-5">
          <h2 className="pricing-title text-capitalize font-bold fs-2" style={{ letterSpacing: "-0.5px" }}>
            {language === "vi" ? "Danh Mục Mô Hình AI" : "AI Model Catalog"}
          </h2>
          <p className="text-muted max-w-700 mx-auto" style={{ fontSize: "14.5px" }}>
            {language === "vi"
              ? "Bộ sưu tập đa dạng các mô hình ngôn ngữ lớn (LLM) và mô hình bổ trợ tối ưu hiệu năng."
              : "Diverse suite of Large Language Models (LLMs) and core foundational accelerators."}
          </p>
          <div className="divider" style={{ backgroundColor: "#ee0033" }}></div>
        </div>

        <div className="row g-4">
          {/* LLM Groups */}
          <div className="col-lg-6">
            <div className="p-4 rounded border h-100 bg-light" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
              <div className="d-flex align-items-center gap-2 mb-4 pb-2 border-bottom">
                <MessageSquare className="text-danger" style={{ color: "#ee0033" }} size={22} />
                <h3 className="fs-5 fw-bold text-dark m-0">
                  {language === "vi" ? "Nhóm LLM (Large Language Models)" : "LLM Models"}
                </h3>
              </div>
              <div className="d-flex flex-column gap-3">
                {llmModels.map((model, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 bg-white border rounded transition-all hover-shadow"
                    style={{ borderRadius: "8px" }}
                  >
                    <div className="d-flex justify-content-between align-items-start gap-2 flex-wrap mb-2">
                      <span className="font-mono text-dark fw-bold" style={{ fontSize: "14px" }}>
                        {model.name}
                      </span>
                      <div className="d-flex gap-1.5 align-items-center">
                        <span className="badge bg-light text-secondary border px-2 py-1" style={{ fontSize: "11px" }}>
                          {model.badge}
                        </span>
                        <span className="badge bg-danger-subtle text-danger px-2 py-1" style={{ fontSize: "11px", backgroundColor: "#fee2e2", color: "#ef4444" }}>
                          {model.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-secondary m-0" style={{ fontSize: "13px", lineHeight: "1.6" }}>
                      {model.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other models group */}
          <div className="col-lg-6">
            <div className="p-4 rounded border h-100 bg-light" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
              <div className="d-flex align-items-center gap-2 mb-4 pb-2 border-bottom">
                <Binary className="text-danger" style={{ color: "#ee0033" }} size={22} />
                <h3 className="fs-5 fw-bold text-dark m-0">
                  {language === "vi" ? "Nhóm Mô Hình Khác" : "Other Models"}
                </h3>
              </div>
              <div className="d-flex flex-column gap-3">
                {otherModels.map((model, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 bg-white border rounded transition-all hover-shadow"
                    style={{ borderRadius: "8px" }}
                  >
                    <div className="d-flex justify-content-between align-items-start gap-2 flex-wrap mb-2">
                      <span className="font-mono text-dark fw-bold" style={{ fontSize: "14px" }}>
                        {model.name}
                      </span>
                      <div className="d-flex gap-1.5 align-items-center">
                        <span className="badge bg-light text-secondary border px-2 py-1" style={{ fontSize: "11px" }}>
                          {model.badge}
                        </span>
                        <span className="badge bg-danger-subtle text-danger px-2 py-1" style={{ fontSize: "11px", backgroundColor: "#fee2e2", color: "#ef4444" }}>
                          {model.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-secondary m-0" style={{ fontSize: "13px", lineHeight: "1.6" }}>
                      {model.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
