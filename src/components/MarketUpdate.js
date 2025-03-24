import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "../css/MarketUpdate.css";
import { FaSearch } from "react-icons/fa";
import { Sparklines, SparklinesLine } from "react-sparklines";

function MarketUpdate() {
  const { t } = useTranslation("marketUpdate"); 
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
              per_page: 10,
              page: 1,
              sparkline: true,
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
      <h2>{t("title")}</h2>
      <div className="crypto-categories">
        <button className="active">{t("categories.popular")}</button>
        <button>{t("categories.metaverse")}</button>
        <button>{t("categories.entertainment")}</button>
        <button>{t("categories.energy")}</button>
        <button>{t("categories.gaming")}</button>
        <button>{t("categories.music")}</button>
        <button>{t("categories.seeAll")}</button>
      </div>

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder={t("searchPlaceholder")} />
      </div>

      <table>
        <thead>
          <tr>
            <th>{t("tableHeaders.no")}</th>
            <th>{t("tableHeaders.name")}</th>
            <th>{t("tableHeaders.lastPrice")}</th>
            <th>{t("tableHeaders.change")}</th>
            <th>{t("tableHeaders.marketStats")}</th>
            <th>{t("tableHeaders.trade")}</th>
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
                <Sparklines data={coin.sparkline_in_7d.price} width={100} height={30}>
                  <SparklinesLine color={coin.price_change_percentage_24h >= 0 ? "#32e6a8" : "#ff4c4c"} />
                </Sparklines>
              </td>
              <td>
                <button className="trade-btn">{t("tradeButton")}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <a href="#" className="see-all">{t("seeAllCoins")}</a>
    </section>
  );
}

export default MarketUpdate;
