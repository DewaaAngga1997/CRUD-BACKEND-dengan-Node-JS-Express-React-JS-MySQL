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

//create
export const createPoduct = async (req, res) => {
  //menampilkan product ke web
  try {
    await Product.create(req.body);
    res.json({ massage: 'Product Created' });
  } catch (error) {
    res.json({ massage: error.massage });
  }
};

//select
export const getPoductById = async (req, res) => {
  //menampilkan product ke web
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(product[0]);
  } catch (error) {
    res.json({ massage: error.massage });
  }
};

//update
export const updateProduct = async (req, res) => {
  //menampilkan product ke web
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ massage: 'Product Update' });
  } catch (error) {
    res.json({ massage: error.massage });
  }
};

//delete
export const deleteProduct = async (req, res) => {
  //menampilkan product ke web
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ massage: 'Product Berhasil di Delete' });
  } catch (error) {
    res.json({ massage: error.massage });
  }
};
