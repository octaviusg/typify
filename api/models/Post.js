const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Post", UserSchema);
