const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const businessRoute = require('./business.route');
const courseRoute = require('./course.route');
const sectionRoute = require('./section.route');
const sampleRoute = require('./sample.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/business', businessRoute);
app.use('/course', courseRoute);
app.use('/section', sectionRoute);
app.use('/sample', sampleRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});