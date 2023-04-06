const Table = require("../database/models/Table");

const createTable = async (req, res) => {
  const { product, quantity, price } = req.body;
  const userId = req.token.id;

  try {
    const item = await Table.findOne({ product });

    if (item) {
      item.quantity += quantity;
      await item.save();
      return res.json({
        success: true,
        msg: "Product changed quantity successfully",
        item,
      });
    }
    const newItem = new Table({ product, quantity, price, user: userId });
    await newItem.save();
    return res.json({
      success: true,
      msg: "Product saved successfully",
      newItem,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

const getTable = async (req, res) => {
  try {
    const userId = req.token.id;

    const tables = await Table.find({ user: userId }).populate("product");

    const total = tables.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);

    return res.status(200).json({
      success: true,
      msg: "Table fetch success",
      tables: tables,
      total,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports = { createTable, getTable };
