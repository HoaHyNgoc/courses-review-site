const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Courses
let Courses = new Schema({
    courses_title: {
        type: String
    },
    courses_description:{
        type: String
    },
    courses_price: {
        type: Number
    }
},{
    collection: 'courses'
});

// Exports model
module.exports = mongoose.model('Courses', Courses);