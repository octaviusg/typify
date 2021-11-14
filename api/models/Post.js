const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
    image: {
      type: String,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
