const express = require("express");

const { creatSales, getSales } = require("../controllers/sales");
const authenticate = require("../middleware/authentication");

const salesRoute = express.Router();

salesRoute.post("/create-sales", authenticate, creatSales);
salesRoute.get("/get-sales", authenticate, getSales);

module.exports = salesRoute;
