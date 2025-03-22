// src/components/MarketUpdate.js
import "./MarketUpdate.css";

function MarketUpdate() {
  return (
    <section className="market-update">
      <h2>Market Update</h2>
      <table>
        <thead>
          <tr>
            <th>Crypto</th>
            <th>Price</th>
            <th>Change</th>
            <th>Trade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BTC</td>
            <td>$56,623.54</td>
            <td>1.41%</td>
            <td><button>Trade</button></td>
          </tr>
          <tr>
            <td>ETH</td>
            <td>$4,267.90</td>
            <td>2.22%</td>
            <td><button>Trade</button></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default MarketUpdate;
