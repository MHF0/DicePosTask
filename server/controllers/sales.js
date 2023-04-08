const Sales = require("../database/models/sales");
const Table = require("../database/models/Table");

const creatSales = async (req, res) => {
  try {
    const userId = req.token.id;
    const { table, total } = req.body;

    const newSales = Sales({
      table,
      total,
    });
    await newSales.save();

    await Table.deleteMany({ user: userId });

    return res.status(201).json({
      success: true,
      msg: "Sales saved successfully",
      newSales,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

const getSales = async (req, res) => {
  try {
    const sales = await Sales.find({}).populate("table");

    return res.status(200).json({
      success: true,
      msg: "Sales fetch successfully",
      sales,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports = { creatSales, getSales };
