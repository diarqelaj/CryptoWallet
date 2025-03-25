import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Market.css"; 
import { useTranslation } from "react-i18next";
import i18n from "../i18n"; 


const Market = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation("market"); 

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://4rexvip.com/trading-signals/files/getdatanews.php");
        console.log("API Response:", response.data);
        
        if (Array.isArray(response.data)) {
          setNews(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
    const interval = setInterval(fetchNews, 60000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="market-news">
      <h2>{t("newsTitle")}</h2>
      
      {loading ? (
        <p className="loading-text">{t("newsLoading")}</p>
      ) : (
        <div className="news-container">
          {news.length > 0 ? (
            news.map((article) => (
              <div key={article.id} className="news-card">
                <img src={article.images} alt={article.title} className="news-image"/>
                <h3>{article.title}</h3>
                <p>{article.messages}</p>
              </div>
            ))
          ) : (
            <p>No news available</p>
          )}
        </div>
      )}
    </section>
  );
};

export default Market;
