import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Shop from "./components/Shop";
import About from "./components/About";
import Cart from "./components/Cart";
import ShopItem from "./components/ShopItem";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    setCartItems(cartItems.concat(newItem));
    console.log(cartItems);
  };

  return (
    <BrowserRouter>
      <div className="mainContainer">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route
            path="/shop/:id"
            render={() => {
              return <ShopItem addToCart={addToCart} />;
            }}
          />
          <Route path="*" component={NotFound} />
        </Switch>
        <Cart cartItems={cartItems} />
      </div>
    </BrowserRouter>
  );
}

export default App;
