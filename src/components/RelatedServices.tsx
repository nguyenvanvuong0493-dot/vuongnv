import React from "react";
import { ShieldCheck, Globe, Cloud, Network, Server } from "lucide-react";
import { relatedServices } from "../data";

interface RelatedServicesProps {
  language?: "vi" | "en";
}

export default function RelatedServices({ language = "vi" }: RelatedServicesProps) {
  // Direct icon mapping based on data ID
  const renderIcon = (id: string) => {
    const size = 24;
    switch (id) {
      case "cloudrity":
        return <ShieldCheck size={size} className="text-viettel" strokeWidth={1.5} />;
      case "webhosting":
        return <Globe size={size} className="text-viettel" strokeWidth={1.5} />;
      case "privatecloud":
        return <Server size={size} className="text-viettel" strokeWidth={1.5} />;
      case "vpc":
        return <Network size={size} className="text-viettel" strokeWidth={1.5} />;
      default:
        return <Cloud size={size} className="text-viettel" strokeWidth={1.5} />;
    }
  };

  return (
    <section className="related-services bg-light border-top" id="related-services-grid">
      <div className="container px-2">
        {/* Header */}
        <div className="text-center mb-3">
          <h2 className="pricing-title text-capitalize font-bold fs-2 mb-2" style={{ letterSpacing: "-0.5px" }}>
            {language === "vi" ? "Dịch vụ liên quan" : "Related Services"}
          </h2>
          <div className="divider mt-2 mb-3" style={{ backgroundColor: "#ee0033" }}></div>
        </div>

        {/* Categories items row */}
        <div className="row justify-content-center g-3 text-center">
          {relatedServices.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3" id={`related-service-col-${item.id}`}>
              <div 
                className="bg-transparent p-2 h-100 d-flex flex-column align-items-center justify-content-center text-decoration-none"
                style={{ cursor: "pointer" }}
              >
                {/* Rounded wrapper representing standard icons in picture */}
                <div 
                  className="service-icon-wrapper d-flex align-items-center justify-content-center mb-2 transition-transform" 
                  style={{ 
                    width: "60px", 
                    height: "60px", 
                    borderRadius: "50%", 
                    backgroundColor: "#ffffff",
                    border: "1px solid #f0f0f0",
                    boxShadow: "0 3px 8px rgba(0,0,0,0.04)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.08)";
                    e.currentTarget.style.boxShadow = "0 5px 12px rgba(238, 0, 51, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1.0)";
                    e.currentTarget.style.boxShadow = "0 3px 8px rgba(0,0,0,0.04)";
                  }}
                >
                  {renderIcon(item.id)}
                </div>

                <h5 className="fs-6 fw-bold text-dark mt-1 mb-0 px-2 text-wrap" style={{ maxWidth: "200px", fontSize: "14px" }}>
                  {item.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
