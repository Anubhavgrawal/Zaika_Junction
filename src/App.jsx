import React, { useState } from "react";
import AIChatbot from "./components/AIChatbot/AIChatbot";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import PlaceOrder from "./pages/PlaceOrder/placeOrder";
import Cart from "./pages/Cart/cart";
import Footer from "./components/Footer/footer";
import Login from "./components/Login/login";
import Verify from "./pages/Verify/verify";
import MyOrders from "./pages/MyOrders/myOrders";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? (
        <Login setShowLogin={setShowLogin} />
      ) : (
        <>
          <div className="app">
            <Navbar setShowLogin={setShowLogin} />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/order" element={<PlaceOrder />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/myorders" element={<MyOrders />} />
            </Routes>
          </div>

          <Footer />

          <AIChatbot />
        </>
      )}
    </>
  );
}

export default App;