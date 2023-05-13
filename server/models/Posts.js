import mongoose from "mongoose";
const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    post_Id: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: String,
    text: String,
    location: Array,
    replies: {
      author: {
      type: String,
      required: true,
      },
      date: String,
      reply: String,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;