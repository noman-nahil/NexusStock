const fs = require("fs");
const { resolve } = require("path");

const getProductData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/productList.json", "utf-8", (err, data) => {
      const products = JSON.parse(data);
      resolve(products);
    });
  });
};

const postNewProduct = (products) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./data/productList.json", JSON.stringify(products), (err) => {
      resolve("Product Successfully Added");
    });
  });
};

module.exports.getProductData = getProductData;
module.exports.postNewProduct = postNewProduct;
