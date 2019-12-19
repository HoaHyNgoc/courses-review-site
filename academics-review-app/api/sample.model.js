const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for sample of coures
let Sample = new Schema(
  {
    sample_id_course: {
      type: Number
    },
    sample_description: {
      type: String
    },
    sample_code: {
      type: String
    },
    sample_ans_a: {
      type: String
    },
    sample_ans_b: {
      type: String
    },
    sampple_ans_true: {
      type: String
    }
  },
  {
    collection: "sample"
  }
);

// Exports model
module.exports = mongoose.model("Sample", Sample);
