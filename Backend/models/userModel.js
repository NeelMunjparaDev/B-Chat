import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "please provide fullname"],
  },
  username: {
    type: String,
    required: [true, "please provide username"],
  },
  password: {
    type: String,
    required: [true, "please provide password"],
  },
  gender: {
    type: String,
    required: [true, "please select your gender"],
    enum: ["male", "female"],
  },
  profilePic: {
    type: String,
    default: "",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
