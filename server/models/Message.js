import mongoose from "mongoose";
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    chatroom: {
      type: mongoose.Schema.Types.ObjectId,
      required: "Chatroom is required!",
      ref: "Chat",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: "Chatroom is required!",
      ref: "User",
    },
    message: {
      type: String,
      required: "Message is required!",
    },
  });
  
const Post = mongoose.model("Message", messageSchema);

export default Message;