import React, { useState } from "react";
import { MessageSquare, PhoneCall, X } from "lucide-react";

interface FloatingWidgetsProps {
  language?: "vi" | "en";
}

export default function FloatingWidgets({ language = "vi" }: FloatingWidgetsProps) {
  const [showChat, setShowChat] = useState(true);

  return (
    <>
      {/* Dismissible Bottom-Left Chat Assistant Box */}
      {showChat && (
        <div className="vt-chat-box shadow-lg d-flex align-items-center position-fixed" id="live-chat-popup-widget" style={{ bottom: "24px", left: "24px", transition: "all 0.3s ease-in-out" }}>
          {/* Close trigger button */}
          <button 
            onClick={() => setShowChat(false)} 
            className="vt-chat-close" 
            aria-label={language === "vi" ? "Đóng Chat" : "Close Chat"}
            id="close-chat-widget-btn"
          >
            <X size={15} />
          </button>
          
          {/* Avatar representation */}
          <div className="vt-chat-logo bg-viettel text-white d-flex align-items-center justify-content-center">
            viettel
          </div>

          {/* Text block assistance */}
          <div className="vt-chat-text pe-3">
            <div className="fw-bold text-dark" style={{ fontSize: "11.5px" }}>
              {language === "vi" ? "Hỗ trợ trực tuyến" : "Online Support"}
            </div>
            <div style={{ fontSize: "12px", color: "#555" }}>
              {language === "vi" 
                ? "Xin chào! Viettel IDC có thể hỗ trợ gì cho Quý khách?" 
                : "Hello! How can Viettel IDC assist you today?"}
            </div>
          </div>
        </div>
      )}

      {/* Floating Bottom-Right Phone Dial Quick Contact */}
      <a 
        href="tel:18008088" 
        className="vt-contact-float text-decoration-none"
        title="Gọi điện Hotline Hỗ Trợ 1800 8088"
        id="floating-hotline-phone-btn"
      >
        <PhoneCall size={20} className="text-viettel animate-pulse" />
      </a>
    </>
  );
}
