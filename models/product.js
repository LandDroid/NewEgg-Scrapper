const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: true, // This must exist
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
