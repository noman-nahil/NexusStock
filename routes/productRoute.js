const express = require("express");
const router = express.Router();
const db = require("../config/db");

const productList = (req, res) => {
  // res.send("Testing From productRoute -> GET");
  db.getProductData().then((products) => {
    res.send(products);
  });
};

router.route("/").get(productList);

module.exports = router;
