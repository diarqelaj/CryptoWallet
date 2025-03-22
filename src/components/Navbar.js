import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaGlobe } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">CryptoCap</h2>
      <div className="nav-links">
        <Link to="/">{t("home")}</Link>
        <Link to="/business">{t("businesses")}</Link>
        <Link to="/trade">{t("trade")}</Link>
        <Link to="/market">{t("market")}</Link>
        <Link to="/learn">{t("learn")}</Link>
      </div>
      <div className="nav-actions">
        <select className="lang-btn" onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">EN</option>
          <option value="es">🇪🇸 ES</option>
          <option value="fr">🇫🇷 FR</option>
        </select>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
        <button className="login-btn">{t("login")}</button>
      </div>
    </nav>
  );
}

export default Navbar;
