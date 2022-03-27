const User = require("../models/UserProfile");

exports.getAllUsers = async (req,res,next) =>{
    await User.find({})
        .then((user) =>{
            res.statusCode = 200;
            res.setHeader("Content-Type","application/json")
            res.json(user);
        },(err) =>{
            next(err);
        })
        .catch((err) =>{
            next(err);
        })

};

exports.createUser = async (req,res,next) =>{
    console.log(req.body);
    await User.insertMany(req.body)
        .then((user) =>{
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(user);
        },(err) =>{
            next(err);
        })
        .catch((err) =>{
            next(err);
        })
};

exports.getUserByID = async (req,res,next) => {
    await User.findById(req.params.id)
        .then((user) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(user);
        },(err) => {
            next(err);
        })
        .catch((err) => {
            next(err);
        })
};

exports.editUser = async (req, res, next) => {
    await User.findOneAndUpdate(req.params.id,{
        $set:req.body
    },{ new :true })
        .then((user) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(user);
        },(err) => {
            next(err);
        })
        .catch((err) => {
            next(err);
        })
};

exports.deleteUser = async (req, res, next) => {
    await User.remove(req.params.id,{})
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
