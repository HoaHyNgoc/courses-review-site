const express = require("express");
const sampleRoutes = express.Router();

// Require sample model in our routes module
let Sample = require("./sample.model");

// Defined store route
sampleRoutes.route("/add").post(function(req, res) {
  let sample = new Sample(req.body);
  sample
    .save()
    .then(sample => {
      res.status(200).json({ sample: "sample in added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
sampleRoutes.route("/").get(function(req, res) {
  Sample.find(function(err, samples) {
    if (err) {
      console.log(err);
    } else {
      res.json(samples);
    }
  });
});

// Defined edit route
sampleRoutes.route("/xsample/:id").get(function(req, res) {
  let id = req.params.id;
  Sample.findById(id, function(err, sample) {
    res.json(sample);
  });
});

//  Defined update route
sampleRoutes.route('/update/:id').post(function (req, res) {
    Sample.findById(req.params.id, function(err, sample) {
    if (!sample)
      res.status(404).send("data is not found");
    else {
        sample.sample_id_course = req.body.sample_id_course;
        sample.sample_description = req.body.sample_description;
        sample.sample_code = req.body.sample_code;
        sample.sample_ans_a = req.body.sample_ans_a;
        sample.sample_ans_b = req.body.sample_ans_b;
        sample.sampple_ans_true = req.body.sampple_ans_true;

        sample.save().then(sample => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
sampleRoutes.route('/delete/:id').get(function (req, res) {
    Sample.findByIdAndRemove({_id: req.params.id}, function(err, sample){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = sampleRoutes;