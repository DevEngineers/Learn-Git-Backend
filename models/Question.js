const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Question = new Schema(
    {
        topicId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Topic",
        },
        question: {
            type: String,
            default: "",
            required: true,
        },
        answers: {
          type: Array,
          default: "",
          required: true,
        },
        correctAnswer:{
            type: String,
            default: "",
            required: true,
        }
      },
      {
        timestamps: true,
      }
);

module.exports = mongoose.model("Question", Question);