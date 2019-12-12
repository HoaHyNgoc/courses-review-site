import React, { Component } from "react";
import axios from "axios";

export default class SectionAdminCrudEdit extends Component {
  constructor(props) {
    super(props);

    // Binding data
    this.onChangeIdCourse = this.onChangeIdCourse.bind(this);
    this.onChangeSectionTitle = this.onChangeSectionTitle.bind(this);
    this.onChangeSectionDes = this.onChangeSectionDes.bind(this);
    this.onChangeSectionCode = this.onChangeSectionCode.bind(this);
    this.onChangeSectionLinkCode = this.onChangeSectionLinkCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      section_id_course: "",
      section_title: "",
      section_description: "",
      section_code: "",
      section_link_code: ""
    };
  }

  componentDidMount() {
    axios
    .get("http://localhost:4000/section/current/" + this.props.match.params.id)
    .then(response => {
      this.setState({
        section_id_course: response.data.section_id_course,
        section_title: response.data.section_title,
        section_description: response.data.section_description,
        section_code: response.data.section_code,
        section_link_code: response.data.section_link_code
      });
    })
    .catch(function(error) {
      console.log(error);
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
    const obj = {
      section_id_course: this.state.section_id_course,
      section_title: this.state.section_title,
      section_description: this.state.section_description,
      section_code: this.state.section_code,
      section_link_code: this.state.section_link_code
    };
    axios
      .post(
        "http://localhost:4000/section/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    this.props.history.push("/admin-index-section");
  }

  render() {
    return (
      <div style={{ marginTop: 10 }} className="container">
        <h3>CREATE SECTION PROCESS</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Section Id Course: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.section_id_course}
              onChange={this.onChangeIdCourse}
            />
          </div>
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
              value="Update Business"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
