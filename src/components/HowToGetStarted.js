import { useTranslation } from "react-i18next";
import "../css/HowToGetStarted.css";
import { FaUserShield, FaCreditCard, FaChartLine } from "react-icons/fa";
import "../i18n"; 

function HowToGetStarted() {
  const { t } = useTranslation("howToGetStarted"); 

  return (
    <section className="how-to-get-started">
      <div className="left">
        <h2>{t("howToGetStarted.title")}</h2> 
        <p>{t("howToGetStarted.description")}</p> 
        <button className="btn-start">{t("howToGetStarted.button")}</button>
      </div>
      <div className="right">
        <div className="step">
          <FaUserShield className="step-icon" />
          <div>
            <h3>{t("howToGetStarted.steps.account.title")}</h3>
            <p>{t("howToGetStarted.steps.account.description")}</p>
          </div>
        </div>
        <div className="step">
          <FaCreditCard className="step-icon" />
          <div>
            <h3>{t("howToGetStarted.steps.bank.title")}</h3>
            <p>{t("howToGetStarted.steps.bank.description")}</p>
          </div>
        </div>
        <div className="step">
          <FaChartLine className="step-icon" />
          <div>
            <h3>{t("howToGetStarted.steps.portfolio.title")}</h3>
            <p>{t("howToGetStarted.steps.portfolio.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToGetStarted;
