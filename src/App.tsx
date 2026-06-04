import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SubTabs from "./components/SubTabs";
import InfoSection from "./components/InfoSection";
import FeaturesSection from "./components/FeaturesSection";
import AdvantagesSection from "./components/AdvantagesSection";
import ModelCatalogSection from "./components/ModelCatalogSection";
import UseCasesSection from "./components/UseCasesSection";
import FaqSection from "./components/FaqSection";
import PricingSection from "./components/PricingSection";
import RelatedServices from "./components/RelatedServices";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";

export default function App() {
  const [activeSubTab, setActiveSubTab] = useState("thong-tin");
  const [language, setLanguage] = useState<"vi" | "en">("vi");

  const handleTabChange = (tabId: string) => {
    setActiveSubTab(tabId);
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-light" id="app-root-container">
      {/* Brand Navigation & Top bar headers */}
      <Header language={language} onChangeLanguage={setLanguage} />

      {/* Primary Hero Section Details */}
      <Hero language={language} />

      {/* Sub tabs Categories Navigation */}
      <SubTabs activeTab={activeSubTab} onTabChange={handleTabChange} language={language} />

      {/* Technical Descriptions and Info diagram content (THÔNG TIN) */}
      {activeSubTab === "thong-tin" && <InfoSection language={language} />}

      {/* Outstanding cloud features (TÍNH NĂNG) */}
      {activeSubTab === "tinh-nang" && <FeaturesSection language={language} />}

      {/* Overriding product benefits (ƯU ĐIỂM) */}
      {activeSubTab === "uu-diem" && <AdvantagesSection language={language} />}

      {/* AI Model Catalog (DANH MỤC MÔ HÌNH AI) */}
      {activeSubTab === "danh-muc-model" && <ModelCatalogSection language={language} />}

      {/* Practical Use Cases (TRƯỜNG HỢP ỨNG DỤNG) */}
      {activeSubTab === "truong-hop-dung" && <UseCasesSection language={language} />}

      {/* Common query cards (CÂU HỎI THƯỜNG GẶP) */}
      {activeSubTab === "cau-hoi" && <FaqSection language={language} />}

      {/* Dynamic pricing plans section list (Placed right below the selected section) */}
      <PricingSection language={language} />

      {/* Other options and related cloud packages */}
      <RelatedServices language={language} />

      {/* Multi columns site indices and contacts footer */}
      <Footer language={language} />

      {/* Bottom floats widgets */}
      <FloatingWidgets language={language} />
    </div>
  );
}
