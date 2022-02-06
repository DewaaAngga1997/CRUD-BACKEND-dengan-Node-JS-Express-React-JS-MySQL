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
