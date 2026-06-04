import React from "react";

interface InfoSectionProps {
  language: "vi" | "en";
}

export default function InfoSection({ language }: InfoSectionProps) {
  return (
    <section className="info-section py-5 bg-white" id="thong-tin-section">
      <div className="container px-2 py-4">
        <div className="row align-items-center g-5">
          {/* Left panel: high-fidelity diagram image */}
          <div className="col-lg-5 d-flex justify-content-center align-items-center">
            <div style={{ position: "relative", width: "100%", maxWidth: "420px" }}>
              <img 
                src="https://i.ibb.co/pCbmyvH/huaban.png" 
                alt="vMaaS diagram" 
                className="img-fluid rounded shadow-sm" 
                style={{ width: "100%", height: "auto" }}
                referrerPolicy="no-referrer"
                id="info-openstack-vector-svg"
              />
            </div>
          </div>

          {/* Right panel: paragraphs */}
          <div className="col-lg-7" style={{ fontSize: "14.5px", lineHeight: "1.7", color: "#444444" }}>
            {language === "vi" ? (
              <>
                <p className="mb-4">
                  Viettel Model as a Service (vMaaS) là dịch vụ cung cấp các mô hình AI dưới dạng API, hỗ trợ nhiều tác vụ như xử lý ngôn ngữ, hình ảnh, âm thanh và embedding, với chuẩn tương thích OpenAI API.
                </p>
                <p className="mb-4">
                  Dịch vụ giúp doanh nghiệp nhanh chóng tích hợp AI vào ứng dụng, sản phẩm hoặc quy trình vận hành mà không cần đầu tư hạ tầng GPU/NPU hay xây dựng đội ngũ MLOps chuyên biệt.
                </p>
                <p className="mb-4">
                  vMaaS được vận hành trên hạ tầng trung tâm dữ liệu của Viettel IDC tại Việt Nam, sử dụng nền tảng Qualcomm AI Inference Suite cùng các dòng chip tăng tốc AI chuyên dụng cho inference, giúp tối ưu hiệu năng xử lý, chi phí vận hành và khả năng mở rộng.
                </p>
              </>
            ) : (
              <>
                <p className="mb-4">
                  Viettel Model as a Service (vMaaS) provides AI models as APIs, supporting multiple tasks such as language processing, image processing, audio processing and embedding, with OpenAI API compatibility.
                </p>
                <p className="mb-4">
                  The service helps businesses quickly integrate AI into applications, products or operational workflows without investing in GPU/NPU infrastructure or building a dedicated MLOps team.
                </p>
                <p className="mb-4">
                  vMaaS runs on Viettel IDC data center infrastructure in Vietnam, using Qualcomm AI Inference Suite and AI accelerators optimized for inference to improve processing performance, operating cost and scalability.
                </p>
              </>
            )}
            
            <div className="d-flex justify-content-end mt-4">
              <a href="#" className="text-viettel fw-bold text-decoration-none d-inline-flex align-items-center gap-1 hover:underline" id="view-details-link">
                {language === "vi" ? "Xem chi tiết" : "View details"}
                <span>&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
