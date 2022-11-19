import "./Checkout.css";
import React from "react";
import Subtotal from "./Subtotal/Subtotal";
import Product from "../Product/Product";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="Images/banner.jpg" />
        <div>
          <h2 style={{ marginLeft: "10px" }}>{user?.email}</h2>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
        {/* BasketItem */}
      </div>
      <div className="checkout__right">
        <div className="subTotal">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
