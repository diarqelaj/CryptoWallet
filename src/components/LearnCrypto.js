import React from "react";
import "./LearnCrypto.css";

// Import local images
import nftImage from "../images/nftcover.jpg";
import cryptoImage from "../images/cryptocurrency.jpg";
import bankingImage from "../images/banking.jpg";
import walletImage from "../images/wallet.jpg";
import bitcoinImage from "../images/bitcoin.jpg";
import marketImage from "../images/trading.jpg";
import defiImage from "../images/dollars.jpg";

const LearnCrypto = () => {
  const articles = [
    {
      title: "All about Investing in NFTs and related risks",
      img: nftImage, // Use imported image
      category: "CRYPTO BASIC",
      featured: true,
      description: "Cryptocurrencies are basically digital assets. It is secured by cryptography...",
    },
    {
      title: "What is cryptocurrency? all you need to know",
      img: cryptoImage,
      category: "CRYPTO BASIC",
    },
    {
      title: "Can crypto really replace your bank account?",
      img: bankingImage,
      category: "CRYPTO BASIC",
    },
    {
      title: "How to setup crypto wallet in your account",
      img: walletImage,
      category: "TIPS & TRICKS",
    },
    {
      title: "The fact about bitcoin must you know",
      img: bitcoinImage,
      category: "CRYPTO BASIC",
    },
    {
      title: "When is the best time to invest in crypto?",
      img: marketImage,
      category: "TIPS & TRICKS",
    },
    {
      title: "What is DeFi? Inside the Wild West of Cryptocurrency.",
      img: defiImage,
      category: "TIPS & TRICKS",
    },
  ];

  return (
    <section className="learn-crypto">
      <h2>Learn About Cryptocurrency</h2>
      <p>Learn all about cryptocurrency to start investing</p>

      <div className="grid">
        {articles.map((article, index) => (
          <div className={`card ${article.featured ? "featured" : ""}`}>
          <div className="image" style={{ backgroundImage: `url(${article.img})` }}></div>
          <div className="content">
            <span className="category">{article.category}</span>
            <h3>{article.title}</h3>
            {article.featured && <p>{article.description}</p>}
          </div>
        </div>
        
        ))}
      </div>

      <a href="#" className="see-all">
        See All Articles
      </a>
    </section>
  );
};

export default LearnCrypto;
