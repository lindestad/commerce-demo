require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const dbUri = process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce";
mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Simple test route
app.get("/", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// More routes here...
// e.g., app.use("/api/products", productsRouter);
const productsRouter = require("./routes/products");
app.use("/api/products", productsRouter);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
