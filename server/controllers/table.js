const Table = require("../database/models/Table");
const Product = require("../database/models/Product");

const createTable = async (req, res) => {
  try {
    const user = req.token.id;
    const { table } = req.body;
    let product = [];

    //   cehck if this is the user that is adding to cart
    const tableExistByThisUser = await Table.findOne({ user });

    if (tableExistByThisUser) {
      tableExistByThisUser.remove();
    }

    for (let i = 0; i < table.length; i++) {
      let object = {};

      const _id = table[i]._id;
      object.product = table[i]._id;
      object.count = table[i].count;

      let productFromDB = await Product.findById(_id).exec();

      object.price = productFromDB.price;

      product.push(object);
    }

    const tableTotal = product.reduce((acc, curr) => {
      return acc + curr.price * curr.count;
    }, 0);

    let newTable = new Table({
      products: product,
      tableTotal,
      orderBy: orderBy,
    });

    await newTable.save();
    return res.status(200).json({
      success: true,
      message: "Added to Table",
      data,
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

    const tables = await Table.findOne({ _id: userId }).populate({
      path: "products",
      populate: { path: "product" },
    });

    return res.status(200).json({
      success: true,
      msg: "Table fetch success",
      tables: tables,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports = { createTable, getTable };
