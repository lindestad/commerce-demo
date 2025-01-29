const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET /api/products - get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/products/:id - get a single product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/products - create a new product (admin only if you want)
router.post("/", async (req, res) => {
  try {
    const { name, price, description, images, category } = req.body;
    const newProduct = new Product({ name, price, description, images, category });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
