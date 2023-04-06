const mongoose = require("mongoose");

const { Schema } = mongoose;

const Table = new Schema(
  {
    products: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        count: Number,
        price: Number,
      },
    ],
    tableTotal: Number,
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Table", Table);
