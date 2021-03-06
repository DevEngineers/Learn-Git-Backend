const express = require("express");
const bodyParser = require("body-parser");
const answerController =require("../controllers/answerController");

const answerRouter = express.Router();

answerRouter.use(bodyParser.json());

answerRouter.post('/',answerController.addAnswers);

answerRouter.get('/',answerController.getAllAnswers);

answerRouter.get('/:id',answerController.getAnswerByID);

answerRouter.get('/topic/:id',answerController.getAnswerByTopicID);

answerRouter.put('/',answerController.UpdateQuizAnswers);

answerRouter.delete('/',answerController.deleteAnswers);

module.exports = answerRouter;
