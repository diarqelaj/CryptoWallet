import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Automatically detects language
  .use(initReactI18next) // React bindings
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          businesses: "Businesses",
          trade: "Trade",
          market: "Market",
          learn: "Learn",
          login: "Login",
        },
      },
      es: {
        translation: {
          home: "Inicio",
          businesses: "Negocios",
          trade: "Comercio",
          market: "Mercado",
          learn: "Aprender",
          login: "Iniciar sesión",
        },
      },
      fr: {
        translation: {
          home: "Accueil",
          businesses: "Entreprises",
          trade: "Commerce",
          market: "Marché",
          learn: "Apprendre",
          login: "Connexion",
        },
      },
    },
    fallbackLng: "en", 
    detection: {
      order: ["localStorage", "navigator"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
