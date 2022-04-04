const Question = require("../models/Question");

exports.addQuestion = async (req,res,next) =>{
    await Question.insertMany(req.body).then((question)=> {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(question);
    },(err) => {
        next(err);
    })
    .catch((err) =>{
        next(err);
    })
};

exports.getQuestionById = async (req,res,next) => {
    await Question.findById(req.params.id)
    .then((question) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(question);
    },(err) => {
        next(err);
    })
    .catch((err) => {
        next(err);
    })
};

exports.getQuestionByTopicID = async (req,res,next) => {
    await Question.find({topicId:req.params.id})
        .then((question) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(question);
        },(err) => {
            next(err);
        })
        .catch((err) => {
            next(err);
        })
};

exports.getAllQuestion = async (req,res,next) =>{
    await Question.find({})
        .then((question) =>{
            res.statusCode = 200;
            res.setHeader("Content-Type","application/json")
            res.json(question);
        },(err) =>{
            next(err);
        })
        .catch((err) =>{
            next(err);
        })

};

exports.deleteQuestion = async (req, res, next) => {
    await Question.deleteMany({})
        .then(() => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json({data:"Success"});
        },(err) => {
            next(err);
        })
        .catch((err) => {
            next(err);
        })
};

// exports.updateQuestion = async (id,question) => {
//     return await Question.findByIdAndUpdate(id,{
//         $set:{question:question.question,answer:question.answer,correctAnswer:question.correctAnswer}
//     },{ new :true })
//         .then((question) => {
//             return question;
//         },(err) => {
//             next(err);
//         })
//         .catch((err) => {
//             next(err);
//         })
// };