const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profile = new Schema(
    {
        userName: {
            type: String,
            default: "",
            required: true,
        },
        email:{
            type: String,
            default: "",
            required: true,
        },
        isActive:{
            type: Boolean,
            default: false,
            required: true,
        },
        title:{
            type: String,
            default: "",
            required: true,
        },
        password:{
            type: String,
            default: "",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("profile", profile);
