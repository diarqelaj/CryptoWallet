import React, { useEffect, useRef, memo, useState } from "react";
import "../css/Trade.css";

const TradingViewWidget = ({ theme = "dark" }) => {
  const widgetRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false); // Track script load

  useEffect(() => {
    if (!window.TradingView) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded || !widgetRef.current) return;

    // **Clear old widget before creating a new one**
    widgetRef.current.innerHTML = "";

    new window.TradingView.widget({
      container_id: widgetRef.current.id,
      autosize: true,
      symbol: "BITSTAMP:BTCUSD",
      interval: "60",
      timezone: "Etc/UTC",
      theme: theme,
      style: "1",
      locale: "en",
      withdateranges: true,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      details: true,
      hotlist: true,
      support_host: "https://www.tradingview.com",
    });

  }, [isLoaded, theme]); // Runs only when script is loaded & theme changes

  return (
    <div className="tradingview-widget">
      <div id="tradingview-container" ref={widgetRef} className="tradingview-widget-container"></div>
    </div>
  );
};

export default memo(TradingViewWidget);
