const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Courses
let Course = new Schema(
  {
    course_title: {
      type: String
    },
    course_description: {
      type: String
    },
    course_price: {
      type: Number
    }
  },
  {
    collection: "course"
  }
);

// Exports model
module.exports = mongoose.model("Course", Course);
