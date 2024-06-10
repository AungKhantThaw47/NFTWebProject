import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Honorary from "./pages/Honorary";
import Tools from "./pages/Tool";

import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/honorary" element={<Honorary />} />
        <Route path="/tool" element={<Tools />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
