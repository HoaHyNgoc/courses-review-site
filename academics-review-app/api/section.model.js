const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for section of coures
let Section = new Schema(
  {
    section_id_course: {
      type: Number
    },
    section_title: {
      type: String
    },
    section_description: {
      type: String
    },
    section_code: {
      type: String
    },
    section_link_code: {
      type: String
    }
  },
  {
    collection: "section"
  }
);

// Exports model
module.exports = mongoose.model("Section", Section);
