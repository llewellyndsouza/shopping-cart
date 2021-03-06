import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    console.log(data);
    setItems(data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="content-container">
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/shop/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Shop;
