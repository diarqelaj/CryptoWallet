import "./HowToGetStarted.css";
import { FaUserShield, FaCreditCard, FaChartLine } from "react-icons/fa";

function HowToGetStarted() {
  return (
    <section className="how-to-get-started">
      <div className="left">
        <h2>How To Get Started</h2>
        <p>Simple and easy way to start your investment in cryptocurrency</p>
        <button className="btn-start">Get Started</button>
      </div>
      <div className="right">
        <div className="step">
          <FaUserShield className="step-icon" />
          <div>
            <h3>Create Your Account</h3>
            <p>Your account and personal identity are guaranteed safe.</p>
          </div>
        </div>
        <div className="step">
          <FaCreditCard className="step-icon" />
          <div>
            <h3>Connect Bank Account</h3>
            <p>Connect the bank account to start transactions.</p>
          </div>
        </div>
        <div className="step">
          <FaChartLine className="step-icon" />
          <div>
            <h3>Start Build Portfolio</h3>
            <p>Buy and sell popular currencies and keep track of them.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToGetStarted;
