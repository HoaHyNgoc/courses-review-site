import React, { Component } from "react";
import PageCoursesPopularChild from "./PageCoursesPopularChild";
import axios from "axios";

class PageCoursesPopular extends Component {
  constructor(props) {
    super(props);
    
    // init state variable
    this.state = { business: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/business")
      .then(response => {
        this.setState({ business: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // mapping data (database - display frontend)
  coursesDataItem = () => {
    return this.state.business.map(function(object, i) {
      return <PageCoursesPopularChild obj={object} key={i} />;
    });
  };

  ComponentHeaderPopular = () => {
    return (
      <div className="row">
        <div className="col">
          <div className="section_title text-center">
            <h1>Popular Courses</h1>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="popular page_section">
        <div className="container">
          {this.ComponentHeaderPopular()}
          <div className="row course_boxes">
            {this.coursesDataItem()}
            {/* <PageCoursesPopularChild />
            <PageCoursesPopularChild />
            <PageCoursesPopularChild />
            <PageCoursesPopularChild />
            <PageCoursesPopularChild />
            <PageCoursesPopularChild /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default PageCoursesPopular;
