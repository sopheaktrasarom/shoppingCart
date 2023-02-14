import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Dana Phone Shop</Link>
        </div>
        <div className="cart">
          <Link to="/cart" className="cart_link">
            <i className="bx bx-cart"></i>
            <span className="counter">{cartTotalQuantity}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
