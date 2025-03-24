import { useTranslation } from "react-i18next";
import "../css/Businesses.css";

import partner1 from "../images/partner1.png";
import partner2 from "../images/partner2.png";
import heroVideo from "../videos/hero-bg.mp4"; 

function Businesses() {
  const { t } = useTranslation("businesses");

  return (
    <div className="businesses-container">
      <section className="businesses-hero">
        <div className="video-wrapper">
          <video autoPlay muted loop className="hero-video">
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hero-content">
          <h1>{t("heroTitle")}</h1>
          <p>{t("heroSubtitle")}</p>
        </div>
      </section>

      <section className="businesses-categories">
        <h2>{t("categoriesTitle")}</h2>
        <div className="categories-wrapper">
          <div className="category-card">
            <h3>{t("categoryRetail")}</h3>
            <p>{t("categoryRetailDesc")}</p>
          </div>
          <div className="category-card">
            <h3>{t("categoryServices")}</h3>
            <p>{t("categoryServicesDesc")}</p>
          </div>
          <div className="category-card">
            <h3>{t("categoryExchanges")}</h3>
            <p>{t("categoryExchangesDesc")}</p>
          </div>
        </div>
      </section>

      <section className="businesses-partners">
        <h2>{t("partnersTitle")}</h2>
        <div className="partners-grid">
          <div className="partner-card">
            <img src={partner1} alt="Partner 1" />
            <h3>{t("partner1Name")}</h3>
            <p>{t("partner1Desc")}</p>
          </div>
          <div className="partner-card">
            <img src={partner2} alt="Partner 2" />
            <h3>{t("partner2Name")}</h3>
            <p>{t("partner2Desc")}</p>
          </div>
        </div>
      </section>

      <section className="businesses-cta">
        <h2>{t("ctaTitle")}</h2>
        <p>{t("ctaDescription")}</p>
        <button className="cta-button">{t("ctaButton")}</button>
      </section>
    </div>
  );
}

export default Businesses;
