const fs = require("fs");

const getProductData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/productList.json", "utf-8", (err, data) => {
      const products = JSON.parse(data);
      resolve(products);
    });
  });
};

module.exports.getProductData = getProductData;
