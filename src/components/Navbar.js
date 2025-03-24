import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "../css/Navbar.css";

function Navbar() {
  const { t, i18n } = useTranslation("navbar");
  

  const storedLanguage = localStorage.getItem("language") || "en";
  const [selectedLanguage, setSelectedLanguage] = useState(storedLanguage);
  
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    // Apply stored theme
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    // Set the selected language when component mounts
    i18n.changeLanguage(storedLanguage);
  }, [i18n, storedLanguage]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const changeLanguage = (lng) => {
    setSelectedLanguage(lng);
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
        <label htmlFor="language-selector"></label>
        <select
          id="language-selector"
          className="lang-btn"
          value={selectedLanguage} // Ensures dropdown reflects selected language
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">🇬🇧 EN</option>
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
