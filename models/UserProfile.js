const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profile = new Schema(
    {
        userID: {
            type: String,
            default: "",
            required: true,
        },
        name: {
            type: String,
            default: "",
            required: true,
        },
        displayName: {
            type: String,
            default: "",
            required: true,
        },
        email:{
            type: String,
            default: "",
            required: true,
        },
        country:{
            type: String,
            default: "",
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
