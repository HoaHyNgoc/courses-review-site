const express = require("express");
const sectionRoutes = express.Router();

// Require Section model in our routes module
let Section = require("./section.model");

// Defined store route
sectionRoutes.route("/add").post(function(req, res) {
  let section = new Section(req.body);
  section
    .save()
    .then(section => {
      res.status(200).json({ section: "section in added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
sectionRoutes.route("/").get(function(req, res) {
  Section.find(function(err, sections) {
    if (err) {
      console.log(err);
    } else {
      res.json(sections);
    }
  });
});

// Defined edit route
sectionRoutes.route("/current/:id").get(function(req, res) {
  let id = req.params.id;
  Section.findById(id, function(err, section) {
    res.json(section);
  });
});

//  Defined update route
sectionRoutes.route('/update/:id').post(function (req, res) {
    Section.findById(req.params.id, function(err, section) {
    if (!section)
      res.status(404).send("data is not found");
    else {
        section.section_id_course = req.body.section_id_course;
        section.section_title = req.body.section_title;
        section.section_description = req.body.section_description;
        section.section_code = req.body.section_code;
        section.section_link_code = req.body.section_link_code;

        section.save().then(section => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
sectionRoutes.route('/delete/:id').get(function (req, res) {
    Section.findByIdAndRemove({_id: req.params.id}, function(err, section){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = sectionRoutes;