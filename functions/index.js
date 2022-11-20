const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51M5sc4SGfnlOTh7YvDRzzSCTU9fuRSeXCCDdzCJivsqzQ5a5RZyc0Rf1cZAXhZ2lQjkMrBUpxWKTYutKReK2C56f00zW0Ys8JW"
);

// API

// App config
const app = express();

// MiddleWares
app.use(cors({ origin: true }));
app.use(express.json());

// API-routes
app.get("/", (request, response) =>
  response
    .status(200)
    .send(`<p>This is my <strong>practice</strong> hahahah </p>`)
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recieve BOOm!!!>>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    payment_method_types: ["card"],
  });

  // ok -- created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command

exports.api = functions.https.onRequest(app);

// example endpoint api
//http://127.0.0.1:5001/challenge-45921/us-central1/api
