const mongoose = require("mongoose");

const ansShema =  new mongoose.Schema({
      answer: String,
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "questions",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
});

module.exports = mongoose.model("Answer", ansShema);