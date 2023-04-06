const express = require("express");

const { createProduct, getAllProducts } = require("../controllers/product");
const authenticate = require("../middleware/authentication");

const productRoute = express.Router();

productRoute.post("/create-product", authenticate, createProduct);
productRoute.get("/get-product", authenticate, getAllProducts);

module.exports = productRoute;
