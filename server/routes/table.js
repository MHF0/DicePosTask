const express = require("express");

const { createTable, getTable } = require("../controllers/table");
const authenticate = require("../middleware/authentication");

const tableRoute = express.Router();

tableRoute.post("/create-table", authenticate, createTable);
tableRoute.get("/get-table", authenticate, getTable);

module.exports = tableRoute;
