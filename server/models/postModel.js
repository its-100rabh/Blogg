const mongoose = require("mongoose");

//schema
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Please add the title."],
    },
    description: {
      type: String,
      require: [true, "Please add the post description"],
    },
    postedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
