import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider/StateProvider";
import Payment from "./components/Checkout/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Checkout/Orders/Orders";

const promise = loadStripe(
  "pk_test_51M6UvPDUmsjMck1DKfy9i4vHD6FNRGHtLMOwv7jTNtNenz8a2eG5jMI139SvXFbrTApF8n0M9pUfFPIXDE92LeKb00Z56QVFP8"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads....
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />

          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
