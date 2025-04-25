const express = require("express");
const router = express.Router();
const db = require("../config/db");

const productList = (req, res) => {
  // res.send("Testing From productRoute -> GET");
  db.getProductData().then((products) => {
    res.send(products);
  });
};

const getProductDetails = (req, res) => {
  const id = parseInt(req.params.id);
  db.getProductData().then((products) => {
    const product = products.find((product) => product.id === id);
    if (!product) {
      res.status(400).send("Not Found");
    } else {
      res.send(product);
    }
  });
};

const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const updates = req.body;
  console.log(updates);
  db.getProductData().then((products) => {
    const productIndex = products.findIndex((product) => product.id === id);
    console.log(productIndex);
    if (productIndex === -1) {
      res.status(400).send("Not Found");
    } else {
      products[productIndex] = { ...products[productIndex], ...updates };
      res.send(products[productIndex]);
    }
  });
};

const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  db.getProductData().then((products) => {
    const product = products.find((product) => product.id === id);
    if (product) {
      const newProductList = products.filter((product) => product.id !== id);
      products = newProductList;
      res.send({
        message: "Product Successfully Removed",
        product,
        newProductList: newProductList,
      });
    } else {
      res.status(400).send("Not Found");
    }
  });
};

const addNewProduct = (req, res) => {
  const newProduct = req.body;
  db.getProductData().then((products) => {
    const product = {
      id: products[products.length - 1].id + 1,
      ...newProduct,
    };
    products.push(product);
    res.send(products);
  });
};

router.route("/").get(productList).post(addNewProduct);

router
  .route("/:id")
  .get(getProductDetails)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
