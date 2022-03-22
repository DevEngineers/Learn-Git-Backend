const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Answer = new Schema(
  {
    topicId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Topic",
    },
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Question",
    },
    answer: {
      type: String,
      default: "",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Answer", Answer);
