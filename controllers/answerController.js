const Answer = require("../models/Answer");

exports.getAllAnswers = async (req,res,next) =>{
    await Answer.find({})
        .then((answer) =>{
            res.statusCode = 200;
            res.setHeader("Content-Type","application/json")
            res.json(answer);
        },(err) =>{
            next(err);
        })
        .catch((err) =>{
            next(err);
        })

};

exports.addAnswers = async (req,res,next) =>{
    console.log(req.body);
    await Answer.insertMany(req.body)
        .then((answer) =>{
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(answer);
        },(err) =>{
            next(err);
        })
        .catch((err) =>{
            next(err);
        })
};

exports.getAnswerByID = async (req,res,next) => {
        await Answer.findById(req.params.id)
            .then((answer) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(answer);
            },(err) => {
                next(err);
            })
            .catch((err) => {
                next(err);
            })
};

exports.getAnswerByTopicID = async (req,res,next) => {
    await Answer.find({topicId:req.params.id})
        .then((answer) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(answer);
        },(err) => {
            next(err);
        })
        .catch((err) => {
            next(err);
        })
};

exports.updateAnswers = async (req, res, next) => {
        await Answer.findOneAndUpdate(req.params.id,{
            $set:req.body
        },{ new :true })
            .then((answer) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(answer);
            },(err) => {
                next(err);
            })
            .catch((err) => {
                next(err);
            })
};

exports.deleteAnswers = async (req, res, next) => {
        await Answer.remove({})
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

