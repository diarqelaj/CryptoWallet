// src/components/MarketUpdate.js
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/MarketUpdate.css";
import { FaSearch } from "react-icons/fa";
import { Sparklines, SparklinesLine } from "react-sparklines";

function MarketUpdate() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 10, // Get top 10 coins
              page: 1,
              sparkline: true, // Fetch 7-day price history
            },
          }
        );
        setCoins(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="market-update">
      <h2>Market Update</h2>

      {/* Cryptocurrency Categories */}
      <div className="crypto-categories">
        <button className="active">Popular</button>
        <button>Metaverse</button>
        <button>Entertainment</button>
        <button>Energy</button>
        <button>Gaming</button>
        <button>Music</button>
        <button>See All 12+</button>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search Coin" />
      </div>

      {/* Crypto Table */}
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Last Price</th>
            <th>Change</th>
            <th>Market Stats</th>
            <th>Trade</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={coin.id}>
              <td>{index + 1}</td>
              <td>
                <img src={coin.image} alt={coin.name} className="coin-icon" />
                {coin.name} <span className="symbol">{coin.symbol.toUpperCase()}</span>
              </td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td className={coin.price_change_percentage_24h >= 0 ? "positive" : "negative"}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>
                {/* Mini Chart with Real Data */}
                <Sparklines data={coin.sparkline_in_7d.price} width={100} height={30}>
                  <SparklinesLine color={coin.price_change_percentage_24h >= 0 ? "#32e6a8" : "#ff4c4c"} />
                </Sparklines>
              </td>
              <td>
                <button className="trade-btn">Trade</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* See All Coins */}
      <a href="#" className="see-all">See All Coins</a>
    </section>
  );
}

export default MarketUpdate;
