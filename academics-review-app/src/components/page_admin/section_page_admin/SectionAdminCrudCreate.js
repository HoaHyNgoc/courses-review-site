import React, { Component } from "react";
import axios from "axios";

export default class SectionAdminCrudCreate extends Component {
  constructor(props) {
    super(props);

    // Binding data
    this.onChangeIdCourse = this.onChangeIdCourse.bind(this);
    this.onChangeSectionTitle = this.onChangeSectionTitle.bind(this);
    this.onChangeSectionDes = this.onChangeSectionDes.bind(this);
    this.onChangeSectionCode = this.onChangeSectionCode.bind(this);
    this.onChangeSectionLinkCode = this.onChangeSectionLinkCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.onChangeSampleIdCourse = this.onChangeSampleIdCourse.bind(this);
    this.onChangeSampleDes = this.onChangeSampleDes.bind(this);
    this.onChangeSampleCode = this.onChangeSampleCode.bind(this);
    this.onChangeSampleA = this.onChangeSampleA.bind(this);
    this.onChangeSampleB = this.onChangeSampleB.bind(this);
    this.onChangeSampleTrue = this.onChangeSampleTrue.bind(this);
    this.onCreateSample = this.onCreateSample.bind(this);

    this.getIdCourseSelected = this.getIdCourseSelected.bind(this);

    // init state variable
    this.state = {
      // section
      section_id_course: "",
      section_title: "",
      section_description: "",
      section_code: "",
      section_link_code: "",

      // sample
      sample_id_course: "",
      sample_description: "",
      sample_code: "",
      sample_ans_a: "",
      sample_ans_b: "",
      sampple_ans_true: "",

      courses: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/course")
      .then(response => {
        this.setState({ courses: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // mapping data (database - display frontend)
  tabRow = () => {
    return this.state.courses.map(function(object, i) {
      // return <TableRow obj={object} key={i} />;
      return <option value={object.course_price}>{object.course_title}</option>;
    });
  };

  getIdCourseSelected(e){
    // var a = option.options[option.selectedIndex].value;
    var e = document.getElementById("section_course");
    console.log("index: " +  e.options[e.selectedIndex].value);
    this.setState({
      section_id_course: e.options[e.selectedIndex].value
    });
  }

  onChangeIdCourse(e) {
    this.setState({
      section_id_course: e.target.value
    });
  }

  onChangeSectionTitle(e) {
    this.setState({
      section_title: e.target.value
    });
  }

  onChangeSectionDes(e) {
    this.setState({
      section_description: e.target.value
    });
  }

  onChangeSectionCode(e) {
    this.setState({
      section_code: e.target.value
    });
  }

  onChangeSectionLinkCode(e) {
    this.setState({
      section_link_code: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    // this.getIdCourseSelected(document.getElementById("section_course"));
    // if(this.state.section_id_course === ""){
    //   console.log("null");
    // }else{
    //   console.log("error: " + this.state.section_id_course);
    // }
    
    const obj = {
      section_id_course: this.state.section_id_course,
      section_title: this.state.section_title,
      section_description: this.state.section_description,
      section_code: this.state.section_code,
      section_link_code: this.state.section_link_code
    };
    console.log(obj);

    

    axios
      .post("http://localhost:4000/section/add", obj)
      .then(res => console.log(res.data));

    this.setState({
      section_id_course: "",
      section_title: "",
      section_description: "",
      section_code: "",
      section_link_code: ""
    });
  }

  onChangeSampleIdCourse(e) {
    this.setState({
      sample_id_course: e.target.value
    });
  }

  onChangeSampleDes(e) {
    this.setState({
      sample_description: e.target.value
    });
  }

  onChangeSampleCode(e) {
    this.setState({
      sample_code: e.target.value
    });
  }

  onChangeSampleA(e) {
    this.setState({
      sample_ans_a: e.target.value
    });
  }

  onChangeSampleB(e) {
    this.setState({
      sample_ans_b: e.target.value
    });
  }

  onChangeSampleTrue(e) {
    this.setState({
      sampple_ans_true: e.target.value
    });
  }

  onCreateSample(e) {
    e.preventDefault();

    const obj = {
      sample_id_course: this.state.sample_id_course,
      sample_description: this.state.sample_description,
      sample_code: this.state.sample_code,
      sample_ans_a: this.state.sample_ans_a,
      sample_ans_b: this.state.sample_ans_b,
      sampple_ans_true: this.state.sampple_ans_true
    };
    console.log(obj);

    axios
      .post("http://localhost:4000/sample/add", obj)
      .then(res => console.log(res.data));

    this.setState({
      sample_id_course: "",
      sample_description: "",
      sample_code: "",
      sample_ans_a: "",
      sample_ans_b: "",
      sampple_ans_true: ""
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }} className="container">
        <h3>CREATE SECTION PROCESS</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Course: </label>
            <select id="section_course" class="custom-select form-control"
            onChange={this.getIdCourseSelected}>{this.tabRow()}</select>
          </div>
          {/* <div className="form-group">
            <label>Section Id Course: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.section_id_course}
              onChange={this.onChangeIdCourse}
            />
          </div> */}
          <div className="form-group">
            <label>Section title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.section_title}
              onChange={this.onChangeSectionTitle}
            />
          </div>
          <div className="form-group">
            <label>Section description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.section_description}
              onChange={this.onChangeSectionDes}
            />
          </div>
          <div className="form-group">
            <label>Section code: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.section_code}
              onChange={this.onChangeSectionCode}
            />
          </div>
          <div className="form-group">
            <label>Section link code: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.section_link_code}
              onChange={this.onChangeSectionLinkCode}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Register Business"
              className="btn btn-primary"
            />
          </div>
        </form>
        <hr />
        <h3>CREATE SAMPLE PROCESS</h3>
        <form onSubmit={this.onCreateSample}>
          <div className="form-group">
            <label>Course: </label>
            <select class="custom-select form-control">{this.tabRow()}</select>
          </div>
          <div className="form-group">
            <label>Id Course: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.sample_id_course}
              onChange={this.onChangeSampleIdCourse}
            />
          </div>
          <div className="form-group">
            <label>Sample description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.sample_description}
              onChange={this.onChangeSampleDes}
            />
          </div>
          <div className="form-group">
            <label>Samle code: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.sample_code}
              onChange={this.onChangeSampleCode}
            />
          </div>
          <div className="form-group">
            <label>Answer A: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.sample_ans_a}
              onChange={this.onChangeSampleA}
            />
          </div>
          <div className="form-group">
            <label>Answer B: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.sample_ans_b}
              onChange={this.onChangeSampleB}
            />
          </div>
          <div className="form-group">
            <label>Answer True: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.sampple_ans_true}
              onChange={this.onChangeSampleTrue}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create sample"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
