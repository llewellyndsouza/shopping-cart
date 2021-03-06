import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <Link to="/">
          <h1>TheShop Shop</h1>
        </Link>
      </div>
      <div className="header-nav">
        <Link to="/shop">
          <div className="header-item">Shop</div>
        </Link>
        <Link to="/about">
          <div className="header-item">About</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
