const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const productRoute = require("./routes/productRoute");

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/product", productRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
