const functions = require("firebase-functions");
const express = require("express");
const { queries } = require("@testing-library/react");
const cors = require("cors")({ origin: true });

const stripe = require("stripe")(
  "sk_test_51M5sc4SGfnlOTh7YvDRzzSCTU9fuRSeXCCDdzCJivsqzQ5a5RZyc0Rf1cZAXhZ2lQjkMrBUpxWKTYutKReK2C56f00zW0Ys8JW"
);

// API

// App config
const app = express();

// MiddleWares
app.use(cors);
app.use(express.json());

// API-routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recieve BOOm!!!>>>>", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });

  // ok -- created
  response.status(201).send({
    clientSecret: paymentIntent.clientSecret,
  });
});

// Listen command

exports.api = functions.https.onRequest(app);

// example endpoint api
//http://127.0.0.1:5001/challenge-45921/us-central1/api
