const contentController = require("../controllers/contentController");
const express = require("express");
const contentRouter = express.Router();

contentRouter.post("/", contentController.create);

contentRouter.get("/", contentController.findAll);

contentRouter.get("/:id", contentController.findOne);

contentRouter.put("/:id", contentController.update);

contentRouter.delete("/:id", contentController.delete);

module.exports = contentRouter;
