const productsController = require("../controllers/contentController");
const express = require("express");
const contentRouter = express.Router();

contentRouter.post("/", productsController.create);

contentRouter.get("/", productsController.findAll);

contentRouter.get("/:id", productsController.findOne);

contentRouter.put("/:id", productsController.update);

contentRouter.delete("/:id", productsController.delete);

module.exports = contentRouter;
