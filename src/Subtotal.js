import React from "react";
import "./Subtotal.css";
import FormatCurrency from "react-format-currency";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <FormatCurrency
        currency="CAD"
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
