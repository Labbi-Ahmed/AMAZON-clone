import moment from "moment/moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "../CheckoutProduct";
import "./Order.css";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
          hideButton={true}
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order__total">Order Total: {value}</h3>
          </>
        )}
        decimalScal={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousendSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
