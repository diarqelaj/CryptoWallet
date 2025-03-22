import React from "react";
import "./LearnCrypto.css";

const LearnCrypto = () => {
  const articles = [
    {
      title: "All about Investing in NFTs and related risks",
      img: "https://source.unsplash.com/600x400/?ethereum,nft",
      category: "CRYPTO BASIC",
      featured: true,
      description: "Cryptocurrencies are basically digital assets. It is secured by cryptography...",
    },
    {
      title: "What is cryptocurrency? all you need to know",
      img: "https://source.unsplash.com/600x400/?cryptocurrency,coins",
      category: "CRYPTO BASIC",
    },
    {
      title: "Can crypto really replace your bank account?",
      img: "https://source.unsplash.com/600x400/?banking,finance",
      category: "CRYPTO BASIC",
    },
    {
      title: "Tips & Tricks: Secure Crypto Wallets",
      img: "https://source.unsplash.com/600x400/?wallet,security",
      category: "TIPS & TRICKS",
    },
    {
      title: "Crypto Basic: How to start trading",
      img: "https://source.unsplash.com/600x400/?trading,stocks",
      category: "CRYPTO BASIC",
    },
    {
      title: "Tips & Tricks: Tracking Market Trends",
      img: "https://source.unsplash.com/600x400/?market,trends",
      category: "TIPS & TRICKS",
    },
    {
      title: "Crypto & Forex: A Comparison",
      img: "https://source.unsplash.com/600x400/?forex,dollar",
      category: "TIPS & TRICKS",
    },
  ];

  return (
    <section className="learn-crypto">
      <h2>Learn About Cryptocurrency</h2>
      <p>Learn all about cryptocurrency to start investing</p>

      <div className="grid">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`card ${article.featured ? "featured" : ""}`}
          >
            <img
              src={article.img}
              alt={article.title}
              onError={(e) => {
                e.target.src = "https://source.unsplash.com/600x400/?crypto";
              }}
            />
            <div className="content">
              <span className="category">{article.category}</span>
              <h3>{article.title}</h3>
              {article.featured && <p>{article.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnCrypto;
