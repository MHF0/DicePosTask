const Product = require("../database/models/Product");

const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    const newProduct = new Product({ name, price });
    await newProduct.save();

    return res.status(201).json({
      success: true,
      msg: "Product created successfully",
      newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    return res.status(200).json({
      success: true,
      msg: "Product fetch success",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports = { createProduct, getAllProducts };
