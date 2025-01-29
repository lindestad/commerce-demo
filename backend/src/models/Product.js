const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  images: [String], // array of image URLs
  category: String,
  // other fields as needed (e.g., inStock, brand, etc.)
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
