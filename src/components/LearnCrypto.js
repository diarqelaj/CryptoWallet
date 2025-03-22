import React from "react";
import "./LearnCrypto.css";

const LearnCrypto = () => {
  const articles = [
    {
      title: "All about Investing in NFTs and related risks",
      img: "https://via.placeholder.com/200",
    },
    {
      title: "How to start with Cryptocurrency trading",
      img: "https://via.placeholder.com/200",
    },
    {
      title: "What is Blockchain and how does it work?",
      img: "https://via.placeholder.com/200",
    },
    {
      title: "Top security tips for Crypto investors",
      img: "https://via.placeholder.com/200",
    },
  ];

  return (
    <section className="learn-crypto">
      <h2>Learn About Cryptocurrency</h2>
      <p>Learn about cryptocurrencies to start investing</p>

      <div className="grid">
        {articles.map((article, index) => (
          <div key={index} className="card">
            <img src={article.img} alt={article.title} />
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnCrypto;
