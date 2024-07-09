const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
   BDBid: {
    type: String,
    required: true,
  },
  StrongNumber: {
    type: String,
    required: false,
  },
  Lemma: {
    type: String,
    required: true,
  },
  Language: {
    type: String,
    required: true,
  },
  Entry: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const word = mongoose.model('Word', wordSchema);
module.exports = Word;