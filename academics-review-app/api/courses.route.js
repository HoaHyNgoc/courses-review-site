const express = require('express');
const coursesRoutes = express.Router();

// Require Business model in our routes module
let Courses = require('./courses.model');

// Defined store route
coursesRoutes.route('/add').post(function (req, res) {
    let courses = new Courses(req.body);
    courses.save()
      .then(courses => {
        res.status(200).json({'courses': 'courses in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
});

// Defined get data(index or listing) route
coursesRoutes.route('/').get(function (req, res) {
    Courses.find(function(err, courseses){
    if(err){
      console.log(err);
    }
    else {
      res.json(courseses);
    }
  });
});

// Defined edit route
coursesRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Courses.findById(id, function (err, courses){
        res.json(courses);
    });
});

//  Defined update route
coursesRoutes.route('/update/:id').post(function (req, res) {
    Courses.findById(req.params.id, function(err, courses) {
    if (!courses)
      res.status(404).send("data is not found");
    else {
        courses.courses_title = req.body.courses_title;
        courses.courses_description = req.body.courses_description;
        courses.courses_price = req.body.courses_price;

        courses.save().then(courses => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
coursesRoutes.route('/delete/:id').get(function (req, res) {
    Courses.findByIdAndRemove({_id: req.params.id}, function(err, courses){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = coursesRoutes;