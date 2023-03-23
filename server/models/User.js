import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 2,
      max: 40,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    email: {
      type: String,
      required: true,
      max: 40,
      unique: true,
    },
    number: {
      type: String,
      required: true,
      min: 8,
      max: 10,
    },
    picturePath: {
      type: String,
      default: "",
    },
    location: {
      type: Object,
      coordinates: {
        type: Array,
        default: [],
      },
      profile_image: {
        type: String,
        default: "",
      },
      build: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
