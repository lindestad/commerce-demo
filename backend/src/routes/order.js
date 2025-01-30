const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Order = require("../models/Order");

// POST /api/orders - create a new order
router.post("/", auth, async (req, res) => {
  try {
    const { items, totalAmount, shippingAddress } = req.body;
    const newOrder = new Order({
      user: req.user.userId,
      items,
      totalAmount,
      shippingAddress,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/orders - get orders for logged-in user
router.get("/", auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.userId }).populate("items.product");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
