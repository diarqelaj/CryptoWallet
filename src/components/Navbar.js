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
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile Menu State

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
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

      {/* Animated Hamburger Menu */}
      <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar Links & Actions (Now Includes Language & Theme in Mobile) */}
      <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>{t("home")}</Link>
        <Link to="/business" onClick={() => setIsMenuOpen(false)}>{t("businesses")}</Link>
        <Link to="/trade" onClick={() => setIsMenuOpen(false)}>{t("trade")}</Link>
        <Link to="/market" onClick={() => setIsMenuOpen(false)}>{t("market")}</Link>
        <Link to="/learn" onClick={() => setIsMenuOpen(false)}>{t("learn")}</Link>

        <div className="mobile-actions">
          <select className="lang-btn" value={selectedLanguage} onChange={(e) => changeLanguage(e.target.value)}>
            <option value="en">🇬🇧 EN</option>
            <option value="es">🇪🇸 ES</option>
            <option value="fr">🇫🇷 FR</option>
          </select>

          <button className="theme-toggle" onClick={toggleTheme}>
             {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <button className="login-btn">{t("login")}</button>
        </div>
      </div>

      <div className="nav-actions">
        <select className="lang-btn desktop-only" value={selectedLanguage} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">🇬🇧 EN</option>
          <option value="es">🇪🇸 ES</option>
          <option value="fr">🇫🇷 FR</option>
        </select>

        <button className="theme-toggle desktop-only" onClick={toggleTheme}>
           {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        <button className="login-btn desktop-only">{t("login")}</button>
      </div>
    </nav>
  );
}

export default Navbar;
