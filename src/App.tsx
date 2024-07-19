import { useState } from "react";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import SuggestPage from "./pages/SuggestPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/suggest" element={<SuggestPage />} />
        <Route path="/detail/:uid" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
