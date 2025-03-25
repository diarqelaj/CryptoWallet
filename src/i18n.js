import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import learnCryptoEN from "./locales/en/learnCrypto.json";
import learnCryptoES from "./locales/es/learnCrypto.json";
import learnCryptoFR from "./locales/fr/learnCrypto.json";

import marketTrendEN from "./locales/en/marketTrend.json";
import marketTrendES from "./locales/es/marketTrend.json";
import marketTrendFR from "./locales/fr/marketTrend.json";

import homeEN from "./locales/en/home.json";
import homeES from "./locales/es/home.json";
import homeFR from "./locales/fr/home.json";

import navbarEN from "./locales/en/navbar.json";
import navbarES from "./locales/es/navbar.json";
import navbarFR from "./locales/fr/navbar.json";

import marketUpdateEN from "./locales/en/marketUpdate.json";
import marketUpdateES from "./locales/es/marketUpdate.json";
import marketUpdateFR from "./locales/fr/marketUpdate.json";

import howToGetStartedEN from "./locales/en/howToGetStarted.json";
import howToGetStartedES from "./locales/es/howToGetStarted.json";
import howToGetStartedFR from "./locales/fr/howToGetStarted.json";

import featuresEN from "./locales/en/features.json";
import featuresES from "./locales/es/features.json";
import featuresFR from "./locales/fr/features.json";

import businessesEN from "./locales/en/businesses.json"; 
import businessesES from "./locales/es/businesses.json";  
import businessesFR from "./locales/fr/businesses.json";  

import marketEN from "./locales/en/market.json";
import marketES from "./locales/es/market.json";
import marketFR from "./locales/fr/market.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        learnCrypto: learnCryptoEN,
        marketTrend: marketTrendEN,
        home: homeEN,
        navbar: navbarEN,
        marketUpdate: marketUpdateEN,
        howToGetStarted: howToGetStartedEN,
        features: featuresEN,
        businesses: businessesEN,
        market: marketEN
      },
      es: {
        learnCrypto: learnCryptoES,
        marketTrend: marketTrendES,
        home: homeES,
        navbar: navbarES,
        marketUpdate: marketUpdateES,
        howToGetStarted: howToGetStartedES,
        features: featuresES,
        businesses: businessesES,
        market: marketES
      },
      fr: {
        learnCrypto: learnCryptoFR,
        marketTrend: marketTrendFR,
        home: homeFR,
        navbar: navbarFR,
        marketUpdate: marketUpdateFR,
        howToGetStarted: howToGetStartedFR,
        features: featuresFR,
        businesses: businessesFR, 
        market: marketFR
      }
    },
    fallbackLng: "en",
    ns: [
      "learnCrypto",
      "marketTrend",
      "home",
      "navbar",
      "marketUpdate",
      "howToGetStarted",
      "features",
      "businesses",
      "market" 
    ],
    defaultNS: "marketUpdate",
    detection: {
      order: ["localStorage", "navigator"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
