import React, { Component } from "react";
import axios from 'axios';
import ExerciseSheet from "./ExerciseSheet";

export default class CourseDetailExercise extends Component {

  constructor(props) {
    super(props);

    this.state = {samples:[]}
  }
  
  componentDidMount(){
    axios
    .get("http://localhost:4000/sample")
    .then(response => {
      this.setState({ samples: response.data });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  // mapping data (database - display frontend)
  subSampleRow = () => {
    var id = parseInt(this.props.idCourse);
    console.log("id: " + id);
      return this.state.samples.map(function(object, i) {
        if (object.sample_id_course == id){
          return <ExerciseSheet obj={object} key={i} />;
        }
        // return <ExerciseSheet obj={object} key={i} />;
    });
  };

  render() {
    return (
      <div className="pbar_container">
        <div className="row">
          <div className="col">
            <div className="section_title text-center">
              <h1>Test Yourself With Exercises</h1>
            </div>
          </div>
        </div>
        {this.subSampleRow()}
        {/* <ExerciseSheet /> */}
      </div>
    );
  }
}
