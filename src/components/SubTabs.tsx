import React, { useState } from "react";
import { subTabs } from "../data";

interface SubTabsProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  language: "vi" | "en";
}

export default function SubTabs({ activeTab: propActiveTab, onTabChange, language }: SubTabsProps) {
  const [internalActiveTab, setInternalActiveTab] = useState("thong-tin");
  const activeTab = propActiveTab !== undefined ? propActiveTab : internalActiveTab;

  const tabs = [
    { id: "thong-tin", label: language === "vi" ? "THÔNG TIN" : "INFO" },
    { id: "tinh-nang", label: language === "vi" ? "TÍNH NĂNG" : "FEATURES" },
    { id: "uu-diem", label: language === "vi" ? "ƯU ĐIỂM" : "ADVANTAGES" },
    { id: "danh-muc-model", label: language === "vi" ? "DANH MỤC MÔ HÌNH AI" : "AI MODEL CATALOG" },
    { id: "truong-hop-dung", label: language === "vi" ? "TRƯỜNG HỢP ỨNG DỤNG" : "USE CASES" },
    { id: "cau-hoi", label: language === "vi" ? "CÂU HỎI THƯỜNG GẶP" : "FAQS" }
  ];

  const handleTabClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setInternalActiveTab(id);
    if (onTabChange) {
      onTabChange(id);
    }
  };

  return (
    <div className="vt-sub-tab" id="subtabs-navigation">
      <div className="container px-2">
        <div className="d-flex flex-nowrap overflow-auto" style={{ scrollbarWidth: "none" }}>
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href="#"
              className={`vt-sub-tab-link flex-fill flex-md-grow-0 ${activeTab === tab.id ? "active text-white bg-viettel" : ""}`}
              onClick={(e) => handleTabClick(e, tab.id)}
              id={`subtab-${tab.id}`}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
