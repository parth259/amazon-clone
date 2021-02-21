const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51INPwPJywfLxmCyse6VCzWw6IotzOznl8lLGEBMhd6R9dQan0Nx2LIMituoC3Tjr6ywpbCYQrPjIoEok46RvLRxQ00J5jkfoZZ"
);

//API

//App Configuration

const app = express();

//Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

//API routes

app.get("/", (request, response) => response.status(200).send("Hello"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "cad",
  });

  response.status(201).send({
    clientSecret: paymentIntent.clientSecret,
  });
});

//Listen command

exports.api = functions.https.onRequest(app);

//example endpoint

//http://localhost:5001/clone-d5468/us-central1/api
