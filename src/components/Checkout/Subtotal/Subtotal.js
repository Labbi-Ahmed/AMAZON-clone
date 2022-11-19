import { Balance, CurrencyBitcoin } from "@mui/icons-material";
import React, { useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider/StateProvider";
import { getBasketTotal } from "../../Reducer/Reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigator = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Sbutotal ({basket?.length} item): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScal={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousendSeparator={true}
        prefix={"$"}
      />

      <button
        onClick={(e) => navigator("/payment")}
        disabled={!basket?.length > 0}
        style={{
          backgroundColor: !basket?.length > 0 ? "lightgray" : "",
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
