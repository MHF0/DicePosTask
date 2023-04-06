const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();

const app = express();

// Database connection
try {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.MONGO_URI);
  console.log("Database connected");
} catch (error) {
  console.log(error);
}

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Routes
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
