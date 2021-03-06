function Cart(props) {
  return (
    <div className="cart-container">
      <p>Here is the cart</p>
      {props.cartItems.map((item) => {
        return <h3 key={item.key}>Title: {item.title}</h3>;
      })}
    </div>
  );
}

export default Cart;
