import { Link } from "react-router-dom";
import MarketTrend from "../components/MarketTrend";
import Features from "../components/Features";
import MarketUpdate from "../components/MarketUpdate";
import HowToGetStarted from "../components/HowToGetStarted";
import LearnCrypto from "../components/LearnCrypto";
import "../css/MarketTrend.css";
import "../css/Features.css";
import "../css/MarketUpdate.css";
import "../css/HowToGetStarted.css";
import "../css/LearnCrypto.css";
import "../css/Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Start and Build Your Crypto Portfolio Here</h1>
        <p>Only at CryptoCap, you can build a good portfolio and learn<br></br> best practices about cryptocurrency.</p>
        <br></br>
        <Link to="/get-started" className="button">Get Started</Link>
      </section>
      <MarketTrend />
      <Features />
      <MarketUpdate />
      <HowToGetStarted />
      <LearnCrypto />
    </div>
  );
}

export default Home;
