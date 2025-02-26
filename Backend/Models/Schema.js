const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String, 
      required: true,
      unique: true,
      lowercase: true,
    },
    password: { 
      type: String,
      required: true,
      minlength: 6,
      maxlength: 20,
    },
  },
  { timestamps: true } 
);


const ExperienceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    comments: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);


const Experience = mongoose.model("Experience", ExperienceSchema);
const User = mongoose.model("User", userSchema);


module.exports = { Experience, User };
