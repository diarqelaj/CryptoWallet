import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Import ThemeContext
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import Navbar from "./components/Navbar";
import Businesses from "./pages/Businesses";

function App() {
  const { theme } = useContext(ThemeContext); // Get current theme

  return (
    <div data-theme={theme}> {/* Set theme for entire app */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
