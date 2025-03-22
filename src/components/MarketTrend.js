import React, { useEffect, useState } from "react";
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
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./MarketTrend.css";

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale);

const COINGECKO_API =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=true";

function MarketTrend() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <section className="market-trend">
      <h2>Market Trend</h2>

      {loading ? (
        <p>Loading market data...</p>
      ) : (
        <div className="cards">
          {coins.map((coin) => (
            <div className="card" key={coin.id}>
              <div className="top-section">
                {/* Coin Info */}
                <div className="coin-info">
                  <img src={coin.image} alt={coin.name} className="coin-logo" />
                  <h3 className="coin-symbol">{coin.symbol.toUpperCase()}</h3>
                  <span className="coin-name">{coin.name}</span>
                </div>

                {/* External Link Arrow Icon */}
                <div className="external-link">
                  <FaArrowUpRightFromSquare />
                </div>
              </div>

              {/* Price & Change */}
              <p className="price">${coin.current_price.toLocaleString()}</p>
              <p className={`change ${coin.price_change_percentage_24h >= 0 ? "positive" : "negative"}`}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>

              {/* Mini Chart (Bottom-Right) */}
              <div className="chart-container">
                <MiniChart sparkline={coin.sparkline_in_7d.price} />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function MiniChart({ sparkline }) {
  const data = {
    labels: Array(sparkline.length).fill(""), // Placeholder labels
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

export default MarketTrend;
