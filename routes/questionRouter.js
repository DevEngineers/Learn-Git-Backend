const express = require("express");
const bodyParser = require("body-parser");
const questionController = require("../controllers/questionController");

const questionRouter = express.Router();

questionRouter.use(bodyParser.json());

questionRouter.post('/',questionController.addQuestion);

questionRouter.get('/:id',questionController.getQuestionById);

questionRouter.get('/topic/:id',questionController.getQuestionByTopicID);

questionRouter.get('/',questionController.getAllQuestion);

// questionRouter.put('/',questionController.);

questionRouter.delete('/',questionController.deleteQuestion);

module.exports = questionRouter;