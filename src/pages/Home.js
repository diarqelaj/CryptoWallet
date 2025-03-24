import { useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MarketTrend from "../components/MarketTrend";
import Features from "../components/Features";
import MarketUpdate from "../components/MarketUpdate";
import HowToGetStarted from "../components/HowToGetStarted";
import LearnCrypto from "../components/LearnCrypto";
import "../css/Home.css";

function Home() {
  const { t } = useTranslation("home");
  const { theme } = useContext(ThemeContext); 

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]); 

  return (
    <div className="home">
      <section className="hero">
        <h1>{t("heroTitle")}</h1>
        <p>{t("heroSubtitle")}</p>
        <br />
        <Link to="/get-started" className="button">{t("getStarted")}</Link>
      </section>
      <MarketTrend />
      <Features />
      <MarketUpdate />
      <HowToGetStarted />
      <LearnCrypto />
    </div>
  );
}

export default Home;
