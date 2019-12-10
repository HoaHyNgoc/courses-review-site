const express = require("express");
const courseRoutes = express.Router();

// Require Business model in our routes module
let Course = require("./course.model");

// Defined store route
courseRoutes.route("/add").post(function(req, res) {
  let course = new Course(req.body);
  course
    .save()
    .then(course => {
      res.status(200).json({ courses: "courses in added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
courseRoutes.route("/").get(function(req, res) {
  Course.find(function(err, courses) {
    if (err) {
      console.log(err);
    } else {
      res.json(courses);
    }
  });
});

// Defined edit route
courseRoutes.route("/edit/:id").get(function(req, res) {
  let id = req.params.id;
  Course.findById(id, function(err, course) {
    res.json(course);
  });
});

//  Defined update route
courseRoutes.route('/update/:id').post(function (req, res) {
    Course.findById(req.params.id, function(err, course) {
    if (!course)
      res.status(404).send("data is not found");
    else {
        course.course_title = req.body.course_title;
        course.course_description = req.body.course_description;
        course.course_price = req.body.course_price;

        course.save().then(course => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
courseRoutes.route('/delete/:id').get(function (req, res) {
    Course.findByIdAndRemove({_id: req.params.id}, function(err, course){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = courseRoutes;
