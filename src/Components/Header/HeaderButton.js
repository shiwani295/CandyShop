import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import "../Header/HeaderButton.css";

const HeaderButton = ({ onShowCart }) => {
  const cartctx = useContext(CartContext);

  const numberOfCartItem = cartctx.items.reduce((curNumber, items) => {
    return curNumber + items.quantity;
  }, 0);

  return (
    <>
      <nav className="navbar navbar-light  justify-content-between navbackground">
        <span class="navbar-brand  h1 mx-3">Candy Shop</span>
        <button className="btn  my-2 my-sm-0 mx-3 cartBtn" onClick={onShowCart}>
          cart({numberOfCartItem})
        </button>
      </nav>
    </>
  );
};

export default HeaderButton;
