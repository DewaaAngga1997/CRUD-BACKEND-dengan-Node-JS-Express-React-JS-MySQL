//halaman product yang di tampilkan di web
import Product from '../models/productModel.js';

export const getAllPoducts = async (req, res) => {
  //menampilkan product ke web
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.json({ massage: error.massage });
  }
};

export const createPoduct = async (req, res) => {
  //menampilkan product ke web
  try {
    await Product.create(req.body);
    res.json({ massage: 'Product Created' });
  } catch (error) {
    res.json({ massage: error.massage });
  }
};
