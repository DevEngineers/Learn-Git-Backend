const mongoose = require("mongoose");

const product = mongoose.model(
  "content",
  mongoose.Schema(
    {
      title: String,
      content: String,
    },
    { timestamps: true }
  )
);

module.exports = {
  product,
};
