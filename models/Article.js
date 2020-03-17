// Article model

const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ArticleSchema = new Schema({
  title: {
    type: String,
    required: false
  },
  img: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  },
  note: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ]
});

let Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
