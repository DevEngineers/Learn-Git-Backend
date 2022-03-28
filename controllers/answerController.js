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

exports.deleteAnswers = async (req, res, next) => {
        await Answer.deleteMany({})
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

exports.UpdateQuizAnswers  = async (req, res, next) => {
    const answerList = req.body;
    let responses = [];

    await answerList.map((answer) =>{
        const response = updateAnswer(answer.id,answer);
        responses.push(response);
    })

    Promise.all(responses).then((values) => {
        if(values.length === answerList.length){
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json({data:values});
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json({data:"Error"});
        }
    })

    
};

const updateAnswer = async (id,answer) => {
    return await Answer.findByIdAndUpdate(id,{
        $set:{answer:answer.answer,isCorrect:answer.isCorrect}
    },{ new :true })
        .then((answer) => {
            return answer;
        },(err) => {
            next(err);
        })
        .catch((err) => {
            next(err);
        })
};

