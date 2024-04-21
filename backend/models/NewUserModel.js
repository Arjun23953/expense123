const mongoose = require("mongoose");

const SignUpSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: 255,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
    confirmPassword: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SignUp", SignUpSchema);
