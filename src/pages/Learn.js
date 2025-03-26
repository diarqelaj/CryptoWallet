import React from "react";
import { useTranslation } from "react-i18next";

import nftImage from "../images/nftcover.jpg";
import cryptoImage from "../images/cryptocurrency.jpg";
import bankingImage from "../images/banking.jpg";
import walletImage from "../images/wallet.jpg";
import bitcoinImage from "../images/bitcoin.jpg";
import marketImage from "../images/trading.jpg";
import defiImage from "../images/dollars.jpg";
import "../css/Home.css";
import "../index.css";


const LearnCrypto = () => {
  const { t } = useTranslation("learnCrypto");

  const images = [nftImage, cryptoImage, bankingImage, walletImage, bitcoinImage, marketImage, defiImage];
  const articles = t("articles", { returnObjects: true });

  return (
    <section className="w-full px-6 py-10 text-center">
      <h2 className="text-3xl font-bold text-[var(--text-color)]">{t("title")}</h2>
      <p className="text-lg text-[var(--text-color-p)] mb-6">{t("subtitle")}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-md bg-[var(--card-bg)] border border-[var(--card-border)] ${
              index === 0 ? "sm:col-span-2 md:col-span-2 lg:col-span-3" : ""
            }`}
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${images[index]})` }}
            ></div>
            <div className="p-4">
              <span className="text-sm font-semibold uppercase text-[var(--positive-color)]">
                {article.category}
              </span>
              <h3 className="text-xl font-semibold text-[var(--text-color)] mt-2">{article.title}</h3>
              {index === 0 && <p className="text-[var(--text-color-p)] mt-2">{article.description}</p>}
            </div>
          </div>
        ))}
      </div>

      <a href="#" className="inline-block mt-6 px-6 py-3 bg-[var(--button-bg)] text-white rounded-md text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-[var(--button-hover)]">
        {t("seeAll")}
      </a>
    </section>
  );
};

export default LearnCrypto;
