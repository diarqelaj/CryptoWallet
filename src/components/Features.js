import { useTranslation } from "react-i18next";
import "../css/Features.css";
import { FaWallet, FaShieldAlt, FaBitcoin, FaBook } from "react-icons/fa";
import "../i18n"; 

function Features() {
  const { t } = useTranslation("features"); 

  return (
    <section className="features">
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>
      <div className="feature-list">
        <div className="feature-item">
          <FaWallet className="feature-icon" />
          <h3>{t("features.portfolio.title")}</h3>
          <p>{t("features.portfolio.description")}</p>
          <a href="#">{t("seeMore")}</a>
        </div>
        <div className="feature-item">
          <FaShieldAlt className="feature-icon" />
          <h3>{t("features.security.title")}</h3>
          <p>{t("features.security.description")}</p>
          <a href="#">{t("seeMore")}</a>
        </div>
        <div className="feature-item">
          <FaBitcoin className="feature-icon" />
          <h3>{t("features.variety.title")}</h3>
          <p>{t("features.variety.description")}</p>
          <a href="#">{t("seeMore")}</a>
        </div>
        <div className="feature-item">
          <FaBook className="feature-icon" />
          <h3>{t("features.learning.title")}</h3>
          <p>{t("features.learning.description")}</p>
          <a href="#">{t("seeMore")}</a>
        </div>
      </div>
    </section>
  );
}

export default Features;
