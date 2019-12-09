const express = require('express');
const courseRoutes = express.Router();

// Require Business model in our routes module
let Course = require('./course.model');

// Defined store route
courseRoutes.route('/add').post(function (req, res) {
    let course = new Course(req.body);
    course.save()
      .then(course => {
        res.status(200).json({'courses': 'courses in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
});

// Defined get data(index or listing) route
courseRoutes.route('/').get(function (req, res) {
  Course.find(function(err, courses){
  if(err){
    console.log(err);
  }
  else {
    res.json(courses);
  }
});
});

module.exports = courseRoutes;