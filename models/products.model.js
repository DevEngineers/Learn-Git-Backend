const mongoose = require("mongoose");

const product = mongoose.model(
  "products",
  mongoose.Schema(
    {
      title: String,
      content: String,
      productPrice: Number,
      productImage: String,
    },
    { timestamps: true }
  )
);

module.exports = {
  product,
};
