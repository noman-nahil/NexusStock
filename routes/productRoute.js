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

router.route("/").get(productList);

router.route("/:id").get(getProductDetails);

module.exports = router;
