import React, { Component } from "react";
import axios from "axios";

export default class PageAdminCrudEdit extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDes = this.onChangeDes.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);

    // this.state = {
    //   person_name: "",
    //   business_name: "",
    //   business_gst_number: ""
    // };

    this.state = {
      course_title: "",
      course_description: "",
      course_price: ""
    };
  }

  componentDidMount() {
    // axios
    //   .get("http://localhost:4000/business/edit/" + this.props.match.params.id)
    //   .then(response => {
    //     this.setState({
    //       person_name: response.data.person_name,
    //       business_name: response.data.business_name,
    //       business_gst_number: response.data.business_gst_number
    //     });
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    axios
    .get("http://localhost:4000/course/edit/" + this.props.match.params.id)
    .then(response => {
      this.setState({
        course_title: response.data.course_title,
        course_description: response.data.course_description,
        course_price: response.data.course_price
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  onChangeTitle(e) {
    this.setState({
      course_title: e.target.value
    });
  }

  onChangeDes(e) {
    this.setState({
      course_description: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      course_price: e.target.value
    });
  }

  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    });
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    // const obj = {
    //   person_name: this.state.person_name,
    //   business_name: this.state.business_name,
    //   business_gst_number: this.state.business_gst_number
    // };
    // axios
    //   .post(
    //     "http://localhost:4000/business/update/" + this.props.match.params.id,
    //     obj
    //   )
    //   .then(res => console.log(res.data));

    // this.props.history.push("/admin-index-data");

    const obj = {
        course_title: this.state.course_title,
        course_description: this.state.course_description,
        course_price: this.state.course_price
    };
    axios
      .post(
        "http://localhost:4000/course/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    this.props.history.push("/admin-index-data");
  }

  render() {
    return (
      <div style={{ marginTop: 10 }} className="container">
        <h3 align="center">UPDATE COURSE</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Course title: </label>
            <input
              type="text"
              className="form-control"
              //   value={this.state.person_name}
              //   onChange={this.onChangePersonName}
              value={this.state.course_title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Course description: </label>
            <input
              type="text"
              className="form-control"
              //   value={this.state.business_name}
              //   onChange={this.onChangeBusinessName}
              value={this.state.course_description}
              onChange={this.onChangeDes}
            />
          </div>
          <div className="form-group">
            <label>Course price: </label>
            <input
              type="text"
              className="form-control"
              //   value={this.state.business_gst_number}
              //   onChange={this.onChangeGstNumber}
              value={this.state.course_price}
              onChange={this.onChangePrice}
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
