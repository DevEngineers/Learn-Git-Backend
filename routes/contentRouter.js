const productsController = require("../controllers/productsController");
const express = require("express");
const router = express.Router();

// Create a new Product
router.post("/", productsController.create);

// Retrieve all Products
router.get("/", productsController.findAll);

// Retrieve a single Product with id
router.get("/:id", productsController.findOne);

// Update a Product with id
router.put("/:id", productsController.update);

// // Delete a Product with id
router.delete("/:id", productsController.delete);

module.exports = router;
