import React, { useState } from "react";
import { Search, ChevronDown, Lock, UserPlus, Globe2, Briefcase } from "lucide-react";
import { mainLinks } from "../data";

interface HeaderProps {
  language: "vi" | "en";
  onChangeLanguage: (lang: "vi" | "en") => void;
}

export default function Header({ language, onChangeLanguage }: HeaderProps) {
  const [activeTab, setActiveTab] = useState("bang-gia");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  return (
    <header className="sticky-top" style={{ zIndex: 1050, top: 0, backgroundColor: "#ffffff" }}>
      {/* Top Black bar */}
      <div className="vt-top-bar px-2 position-relative" style={{ zIndex: 1010 }}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            {/* Left side empty or reserved for branding/secondary links */}
          </div>
          <div className="d-flex align-items-center gap-3">
            <a href="#" className="d-flex align-items-center gap-1">
              <Briefcase size={12} />
              {language === "vi" ? "Tuyển dụng" : "Careers"}
            </a>
            <span className="text-secondary">|</span>
            <div className="dropdown d-inline-block position-relative" id="top-language-dropdown-wrapper">
              <button 
                className="btn btn-sm text-white border-0 bg-transparent p-0 d-flex align-items-center gap-1.5"
                onClick={(e) => {
                  e.stopPropagation();
                  setLangDropdownOpen(!langDropdownOpen);
                }}
                style={{ fontSize: "13px", cursor: "pointer" }}
                id="top-language-dropdown-toggle"
              >
                <Globe2 size={13} className="text-white-50" />
                <span className="text-white font-medium">{language === "vi" ? "Tiếng Việt" : "English"}</span>
                <ChevronDown size={11} className="text-white-50" />
              </button>
              {langDropdownOpen && (
                <>
                  <div 
                    style={{ position: "fixed", inset: 0, zIndex: 1999 }} 
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <ul 
                    className="dropdown-menu show" 
                    style={{ 
                      display: "block",
                      position: "absolute", 
                      top: "100%", 
                      right: 0, 
                      zIndex: 2000, 
                      backgroundColor: "#333333", 
                      boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                      minWidth: "125px",
                      margin: "6px 0 0 0",
                      padding: "0",
                      border: "1px solid #444444",
                      borderRadius: "2px"
                    }}
                  >
                    <li style={{ margin: 0, padding: 0 }}>
                      <button 
                        className={`dropdown-item text-start w-100 btn btn-link text-decoration-none py-1.5 px-3 ${language === "vi" ? "text-white" : "text-white-50"}`}
                        onClick={() => {
                          onChangeLanguage("vi");
                          setLangDropdownOpen(false);
                        }}
                        style={{ 
                          fontSize: "13px",
                          backgroundColor: language === "vi" ? "#0066d4" : "transparent",
                          border: "none",
                          borderRadius: "0",
                          transition: "background-color 0.15s ease",
                          outline: "none"
                        }}
                        onMouseEnter={(e) => {
                          if (language !== "vi") e.currentTarget.style.backgroundColor = "#444444";
                        }}
                        onMouseLeave={(e) => {
                          if (language !== "vi") e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        Tiếng Việt
                      </button>
                    </li>
                    <li style={{ margin: 0, padding: 0 }}>
                      <button 
                        className={`dropdown-item text-start w-100 btn btn-link text-decoration-none py-1.5 px-3 ${language === "en" ? "text-white" : "text-white-50"}`}
                        onClick={() => {
                          onChangeLanguage("en");
                          setLangDropdownOpen(false);
                        }}
                        style={{ 
                          fontSize: "13px",
                          backgroundColor: language === "en" ? "#0066d4" : "transparent",
                          border: "none",
                          borderRadius: "0",
                          transition: "background-color 0.15s ease",
                          outline: "none"
                        }}
                        onMouseEnter={(e) => {
                          if (language !== "en") e.currentTarget.style.backgroundColor = "#444444";
                        }}
                        onMouseLeave={(e) => {
                          if (language !== "en") e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        English
                      </button>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation header bar */}
      <nav className="navbar navbar-expand-lg vt-navbar py-2 px-2">
        <div className="container">
          {/* Brand Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#" id="brand-logo-link">
            <img 
              src="https://i.ibb.co/KzLpkz2B/logo.png" 
              alt="Viettel IDC" 
              style={{ height: "40px", maxHeight: "100%", width: "auto", objectFit: "contain" }}
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Toggle for mobile */}
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#vtNavbarContent" aria-controls="vtNavbarContent" aria-expanded="false" aria-label="Toggle navigation" id="mobile-toggle-btn">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible area */}
          <div className="collapse navbar-collapse" id="vtNavbarContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center">
              {mainLinks.map((link) => {
                const label = language === "vi" ? link.label : (
                  link.id === "dich-vu" ? "Services" :
                  link.id === "giai-phap" ? "Solutions" :
                  link.id === "bang-gia" ? "Pricing" :
                  link.id === "tin-tuc" ? "News" :
                  link.id === "hop-tac" ? "Partnerships" :
                  link.id === "ve-viettel-idc" ? "About Viettel IDC" :
                  link.id === "tai-lieu-ho-tro" ? "Docs & Support" : link.label
                );
                return (
                  <li key={link.id} className="nav-item">
                    <a
                      className={`vt-nav-link ${activeTab === link.id ? "active" : ""}`}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(link.id);
                      }}
                      id={`nav-link-${link.id}`}
                    >
                      {label}
                      {link.id === "dich-vu" && <ChevronDown size={11} className="ms-1" />}
                      {link.id === "giai-phap" && <ChevronDown size={11} className="ms-1" />}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Utility features on right */}
            <div className="d-flex flex-wrap align-items-center gap-2 mt-2 mt-lg-0">
              <button className="btn p-2 text-dark bg-transparent border-0" aria-label="Search" id="search-nav-btn">
                <Search size={18} />
              </button>
              
              <a href="#" className="btn btn-outline-secondary btn-sm py-1.5 px-3 fw-medium d-flex align-items-center gap-1 text-dark bg-light border-0" style={{ fontSize: "12.5px" }} id="ql-dich-vu-btn">
                {language === "vi" ? "Quản lý dịch vụ" : "Service Management"}
                <ChevronDown size={12} />
              </a>

              <a href="#" className="btn btn-outline-viettel btn-sm py-1.5 px-3 fw-semibold" style={{ fontSize: "12.5px" }} id="login-nav-btn">
                {language === "vi" ? "Đăng nhập" : "Login"}
              </a>
              
              <a href="#" className="btn btn-viettel btn-sm py-1.5 px-3 fw-semibold text-white bg-viettel" style={{ fontSize: "12.5px" }} id="register-nav-btn">
                {language === "vi" ? "Đăng ký" : "Register"}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
