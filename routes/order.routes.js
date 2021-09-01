const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Order = require("../models/Order.model");
const User = require("../models/User.model");
const Product = require("../models/Product.model");

// POST route => to create an order
router.post("/orders", (req, res, next) => {

  // convert req.body object into json array
  const itemsArr = Object.keys(req.body.items).map((productID) => {
    return {
      productID,
      qty: req.body.items[productID],
    };
  });

  // pass multiple product IDs to find all the products from the order
  Product.find({
    _id: { $in: itemsArr.map((item) => item.productID) },
  })
    .then((productsFromDB) => {
      // get the array list of purchased items
      const itemsArrWithPurchasePrice = itemsArr.map((itemObj) => {
        // set the price from DB to purchased item
        itemObj.purchasePrice = productsFromDB.find(
          (singleItem) => singleItem._id == itemObj.productID
        ).price;
        return itemObj;
      });
      return itemsArrWithPurchasePrice;
    })
    .then((itemsArrWithPurchasePrice) => {
      return Order.create({
        items: itemsArrWithPurchasePrice,
        user: req.user._id,
      });
    })
    .then((createdOrderFromDB) => {
      return User.findByIdAndUpdate(req.user._id, {
        $push: { orders: createdOrderFromDB._id },
      });
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// GET route => to retrieve all the orders of the user
router.get('/orders/summary', (req,res,next) => {
  userId = req.user._id
  User.findById(userId)
  .then((theUser) => {
    const ordersArr = theUser.orders
    return ordersArr
  })
  .then((response)=> res.json(response))
  .catch((err)=> res.json(err))
})

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
