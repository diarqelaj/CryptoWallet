// src/components/Features.js
import "../css/Features.css";
import { FaWallet, FaShieldAlt, FaBitcoin, FaBook } from "react-icons/fa"; // Importing Icons

function Features() {
  return (
    <section className="features">
      <h2>CryptoCap Amazing Features</h2>
      <p>
        Explore sensational features to prepare your best investment in
        cryptocurrency.
      </p>
      <div className="feature-list">
        <div className="feature-item">
          <FaWallet className="feature-icon" />
          <h3>Manage Portfolio</h3>
          <p>
            Buy and sell popular digital currencies, keep track of them in one
            place.
          </p>
          <a href="#">See Explained →</a>
        </div>
        <div className="feature-item">
          <FaShieldAlt className="feature-icon" />
          <h3>Protected Securely</h3>
          <p>
            All cash balances are covered by FDIC insurance, up to a maximum of
            $250,000.
          </p>
          <a href="#">See Explained →</a>
        </div>
        <div className="feature-item">
          <FaBitcoin className="feature-icon" />
          <h3>Cryptocurrency Variety</h3>
          <p>
            Supports a variety of the most popular digital currencies and always
            updates.
          </p>
          <a href="#">See Explained →</a>
        </div>
        <div className="feature-item">
          <FaBook className="feature-icon" />
          <h3>Learn Best Practice</h3>
          <p>Easy to know how cryptocurrency works and friendly to newbies.</p>
          <a href="#">See Explained →</a>
        </div>
      </div>
    </section>
  );
}

export default Features;
