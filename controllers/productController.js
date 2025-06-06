const Product = require('../models/product.js');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single product
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) throw new Error('Product not found');
    res.json(product);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};