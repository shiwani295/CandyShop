import React, { useContext } from "react";

import Modal from "./Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../Context/CartContext";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const ItemsData = cartCtx.items;
  const totalAmount = `$${cartCtx.totalamount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ItemsData.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          quantity={item.quantity}
          onRemove={cartItemRemoveHandler.bind(null, item.id)} //bind reconfiture the funtion (cartItemRemoveHandler) for future argument
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  //console.log(cartItems);
  return (
    <Modal onClose={props.onClosebtn}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClosebtn}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
//note-
