import React from "react";
import { useTranslation } from "react-i18next";
import "../css/Learn.css";

import nftImage from "../images/nftcover.jpg";
import cryptoImage from "../images/cryptocurrency.jpg";
import bankingImage from "../images/banking.jpg";
import walletImage from "../images/wallet.jpg";
import bitcoinImage from "../images/bitcoin.jpg";
import marketImage from "../images/trading.jpg";
import defiImage from "../images/dollars.jpg";

const Learn = () => {
  const { t } = useTranslation("learnCrypto");

  const images = [nftImage, cryptoImage, bankingImage, walletImage, bitcoinImage, marketImage, defiImage];

  const articles = t("articles", { returnObjects: true });
  const paragraphs = t("paragraphs", { returnObjects: true });

  return (
    <main className="crypto-page">

      <section className="crypto-page-description">
        <h2>{t("exploreTitle")}</h2>
        <p>{t("exploreDescription")}</p>
      </section>

      {articles.length > 0 && (
        <section className="crypto-page-featured">
          <div className="crypto-page-card featured">
            <div className="crypto-page-image" style={{ backgroundImage: `url(${images[0]})` }}></div>
            <div className="crypto-page-text">
              <span className="crypto-page-category">{articles[0].category}</span>
              <h3>{articles[0].title}</h3>
              <p>{articles[0].description || paragraphs[0] || `Explore insights about ${articles[0].title.toLowerCase()}.`}</p>
            </div>
          </div>
        </section>
      )}

      <section className="crypto-page-content">
        <div className="crypto-page-grid">
          {articles.slice(1).map((article, index) => (
            <div key={index + 1} className="crypto-page-card">
              <div className="crypto-page-image" style={{ backgroundImage: `url(${images[index + 1]})` }}></div>
              <div className="crypto-page-text">
                <span className="crypto-page-category">{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.description || paragraphs[index + 1] || `Discover more about ${article.title.toLowerCase()}.`}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="crypto-page-footer">
        <a href="#" className="crypto-page-see-all">{t("seeAll")}</a>
      </footer>
    </main>
  );
};

export default Learn;
