const mongoose = require("mongoose");

const qusShema =  new mongoose.Schema({
      answer: String,
  ansId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "questions",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
});

module.exports = mongoose.model("question", qusShema);