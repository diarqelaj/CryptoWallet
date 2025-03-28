import React from "react";
import { useTranslation } from "react-i18next";
import "../css/LearnCrypto.css";

import nftImage from "../images/nftcover.jpg";
import cryptoImage from "../images/cryptocurrency.jpg";
import bankingImage from "../images/banking.jpg";
import walletImage from "../images/wallet.jpg";
import bitcoinImage from "../images/bitcoin.jpg";
import marketImage from "../images/trading.jpg";
import defiImage from "../images/dollars.jpg";

const LearnCrypto = () => {
  const { t } = useTranslation("learnCrypto");

  const images = [nftImage, cryptoImage, bankingImage, walletImage, bitcoinImage, marketImage, defiImage];

  const articles = t("articles", { returnObjects: true }); 
  const paragraphs = t("paragraphs", { returnObjects: true }); 

  return (
    <section className="learn-crypto">
      <h2>{t("title")}</h2>
      <p>{t("subtitle")}</p>

      <div className="grid">
        {articles.map((article, index) => (
          <div key={index} className={`card ${index === 0 ? "featured" : ""}`}>
            <div className="image" style={{ backgroundImage: `url(${images[index]})` }}></div>
            <div className="content">
              <span className="category">{article.category}</span>
              <h3>{article.title}</h3>
              <p>{paragraphs[index]}</p> {/* 🔥 Add corresponding paragraph */}
            </div>
          </div>
        ))}
      </div>

      <a href="#" className="see-all">{t("seeAll")}</a>
    </section>
  );
};

export default LearnCrypto;
