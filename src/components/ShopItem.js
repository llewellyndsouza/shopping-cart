import React, { useEffect, useState } from "react";

function ShopItem(props) {
  const [item, setItem] = useState({});

  const addToCart = () => {
    props.addToCart(item);
  };

  const getItems = async () => {
    const url = window.location.href;
    const id = url.substring(url.lastIndexOf("/"));
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log(data);
    setItem(data);
  };

  useEffect(() => {
    getItems();
    //console.log("url = ", window.location.href);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="content-container">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default ShopItem;
