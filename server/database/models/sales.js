const mongoose = require("mongoose");

const { Schema } = mongoose;

const Sales = new Schema(
  {
    table: {
      type: [],
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sales", Sales);
