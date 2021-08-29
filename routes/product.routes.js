const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/Product.model");
const fileUploader = require("../config/cloudinary.config");

// POST '/api/upload'
router.post("/upload", fileUploader.single("image"), (req, res, next) => {

  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  res.json({ imageUrl: req.file.path });
});

// POST route => to create a new product
router.post("/products", (req, res, next) => {
  const { name, description, category, image, price, stocked } = req.body;

  Product.create({
    name,
    description,
    category,
    image,
    price,
    stocked,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// GET route => to get all the products
router.get('/products', (req, res, next) => {
  Product.find()
    .then((allTheProducts) => res.json(allTheProducts))
    .catch((err) => res.json(err));
});

// GET route => to get a specific product/detailed view
router.get("/products/:productId", (req, res, next) => {
  const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Product.findById(productId)
    .then((product) => res.status(200).json(product))
    .catch((error) => res.json(error));
});

// PUT route => to update a specific product
router.put("/products/:productId", (req, res, next) => {
  const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Product.findByIdAndUpdate(productId, req.body)
    .then(() =>
      res.json({
        message: `Product with ${productId} is updated successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

// DELETE route => to delete a specific product
router.delete('/products/:productId', (req, res, next) => {
  const { productId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  Product.findByIdAndRemove(productId)
    .then(() => res.json({ message: `Product with ${productId} is removed successfully.` }))
    .catch(error => res.json(error));
});


module.exports = router;
