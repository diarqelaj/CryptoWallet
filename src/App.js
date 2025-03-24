import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import Navbar from "./components/Navbar";
import Businesses from "./pages/Businesses";

function App() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    console.error("ThemeContext is undefined! Check if ThemeProvider is wrapping App.");
    return null;
  }

  const { theme } = themeContext; 
  return (
    <div data-theme={theme}> 
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
