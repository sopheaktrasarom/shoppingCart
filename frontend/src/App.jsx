import { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import Navbar from "./Components/Navbar";
import Notfound from "./Components/Notfound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/notfound" element={<Notfound />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
