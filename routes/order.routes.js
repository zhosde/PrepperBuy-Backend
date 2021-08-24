const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Order = require("../models/order.model");
const User = require("../models/User.model");

// POST route => to create an order
router.post("/orders", (req, res, next) => {
  const { items, totalPrice, qty } = req.body;
  const { user } = req.user._id;

  Order.create({
    items: [],
    qty,
    totalPrice,
    user,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// GET route => to retrieve the order
router.get("/orders/:orderId", (req, res, next) => {
  const { orderId } = req.params;

  Order.findById(orderId)
    .populate("user items")
    .then((order) => res.json(order))
    .catch((error) => res.json(error));
});

// PUT route => to edit the order
router.put("/orders/:orderId", (req, res, next) => {
  const { orderId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(orderId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Order.findByIdAndUpdate(orderId, req.body)
    .then(() =>
      res.json({ message: `Order with ${orderId} is updated successfully.` })
    )
    .catch((err) => res.json(err));
});

// DELETE route => to delete the order
router.delete("/orders/:orderId", (req, res, next) => {
  const { orderId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(orderId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Order.findByIdAndRemove(orderId)
    .then(() =>
      res.json({ message: `Order with ${orderId} is removed successfully.` })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
