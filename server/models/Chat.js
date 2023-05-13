import mongoose from "mongoose";
const mongoose = require("mongoose");

const chatroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required!",
  },
});

const Post = mongoose.model("Chat", chatSchema);

export default Chat;