const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51M6UvPDUmsjMck1Dvv4cYmNiRKhBgOz76IF7GRJdMmGyAoa9Vr7Mp3bahSMkfMnibm4rmuHSmFV1cKUPj8IK3N3B008QxSCk6W"
);

// api

// app config
const app = express();

// middle wares
app.use(cors({ origin: true }));
app.use(express.json());

// api couters

app.get("/", (request, response) => {
  response.status(200).send(`<p> This is checking face </p>`);
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

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

exports.api = functions.https.onRequest(app);
