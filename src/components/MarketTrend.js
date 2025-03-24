import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale,
} from "chart.js";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "../css/MarketTrend.css";

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale);

const COINGECKO_API =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=true";

function MarketTrend() {
  const { t } = useTranslation("marketTrend");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch(COINGECKO_API);
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error("Error fetching market data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  console.log("Selected Coin:", selectedCoin);

  return (
    <section className="market-trend">
      <h2>{t("title")}</h2>

      {loading ? (
        <p>{t("loading")}</p>
      ) : (
        <div className="cards">
          {coins.map((coin) => (
            <div
              className="card"
              key={coin.id}
              onClick={() => {
                console.log("Card clicked:", coin);
                setSelectedCoin(coin);
              }}
            >
              <div className="top-section">
                <div className="coin-info">
                  <img src={coin.image} alt={coin.name} className="coin-logo" />
                  <h3 className="coin-symbol">{coin.symbol.toUpperCase()}</h3>
                  <span className="coin-name">{coin.name}</span>
                </div>

                <div className="external-link">
                  <a
                    href={`https://www.coingecko.com/en/coins/${coin.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevents card click from firing
                  >
                    <FaArrowUpRightFromSquare />
                  </a>
                </div>
              </div>
              <p className="price">
                {t("price")}: ${coin.current_price.toLocaleString()}
              </p>
              <p className={`change ${coin.price_change_percentage_24h >= 0 ? "positive" : "negative"}`}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
              <div className="chart-container">
                <MiniChart sparkline={coin.sparkline_in_7d.price} />
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedCoin && <CoinModal coin={selectedCoin} onClose={() => setSelectedCoin(null)} />}
    </section>
  );
}

function MiniChart({ sparkline }) {
  const data = {
    labels: Array(sparkline.length).fill(""),
    datasets: [
      {
        data: sparkline,
        borderColor: "#00c851",
        backgroundColor: "rgba(0, 200, 81, 0.1)",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { x: { display: false }, y: { display: false } },
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
  };

  return <Line data={data} options={options} className="mini-chart" />;
}

function CoinModal({ coin, onClose }) {
  const { t } = useTranslation("marketTrend");

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <h2>
          {coin.name} ({coin.symbol.toUpperCase()})
        </h2>
        <p className="modal-price">
          {t("price")}: ${coin.current_price.toLocaleString()}
        </p>
        <p
          className={`modal-change ${
            coin.price_change_percentage_24h >= 0 ? "positive" : "negative"
          }`}
        >
          {t("change")}: {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
        <div className="modal-chart">
          <MiniChart sparkline={coin.sparkline_in_7d.price} />
        </div>
        <a
          href={`https://www.coingecko.com/en/coins/${coin.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("view")} <FaArrowRight />
        </a>
      </div>
    </div>
  );
}


export default MarketTrend;
