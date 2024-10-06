import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  return (
    <div>
      <h3>cart</h3>
      <div className="cartWrapper">
        {cartProducts.map((product) => (
          <div className="cartCard">
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="btn" onClick={()=> dispatch(remove(product.id)) }>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
