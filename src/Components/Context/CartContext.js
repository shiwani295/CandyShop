import React, { useReducer } from "react";

//create context
const CartContext = React.createContext({
  items: [],
  totalamount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
//create context
//create funtion for context and return provider
export const CartContextProvider = (props) => {
  //create reducer
  //create default state
  const defaultCartState = {
    item: [],
    totalamount: 0,
  };
  //create cartreduser funtion
  const cartReducer = (state, action) => {
    if (action.type === "ADD") {
      //check exixting item
      const existingItemIndex = state.item.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.item[existingItemIndex];
      // console.log(existingCartItem);
      let updateItems;
      if (existingCartItem) {
        let updateItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.item.quantity,
        };

        updateItems = [...state.item];
        updateItems[existingItemIndex] = updateItem;
      } else {
        updateItems = state.item.concat(action.item);
      }

      const UpdateTotalAmount =
        state.totalamount + action.item.price * action.item.quantity;
      console.log(UpdateTotalAmount);

      return {
        item: updateItems,
        totalamount: UpdateTotalAmount,
      };
    }
    if (action.type === "REMOVE") {
      const existingItemIndex = state.item.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItem = state.item[existingItemIndex];
      const UpdateTotalAmount = state.totalamount - existingCartItem.price;
      let updateItems;
      if (existingCartItem.quantity === 1) {
        updateItems = state.item.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        updateItems = [...state.item]; //copying the old object
        updateItems[existingItemIndex] = updatedItem;
      }
      return {
        item: updateItems,
        totalamount: UpdateTotalAmount,
      };
    }
    return defaultCartState;
  };

  // Initialising useReducer hook
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  ///this to

  const AddItemCartHandler = (candyitem) => {
    dispatchCartAction({ type: "ADD", item: candyitem });
  };

  const RemoveItemCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
    console.log("remove data");
  };

  const cartValues = {
    items: cartState.item,
    totalamount: cartState.totalamount,
    addItem: AddItemCartHandler,
    removeItem: RemoveItemCartHandler,
  };

  return (
    <CartContext.Provider value={cartValues}>
      {props.children}
    </CartContext.Provider>
  );
  ////this
};

export default CartContext;
