import "./Pages/CSS/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../src/Pages/LandingPage";
import Shop from "../src/Pages/Shop";
import NotFound from "../src/Pages/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter basename="/best-crochet">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
