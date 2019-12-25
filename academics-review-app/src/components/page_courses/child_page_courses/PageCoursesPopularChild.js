import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom';

class PageCoursesPopularChild extends Component {
  render() {
    return (
        <div className="col-lg-4 course_box">
            <div className="card">
                <img className="card-img-top" src="images/course_1.jpg" alt="" />
                    <div className="card-body text-center">
                        <div className="card-title">
                            {/* <a href="courses.html">A complete guide to design</a> */}
                            {/* <a href="courses.html">{this.props.obj.course_title}</a> */}
                            {/* <NavLink  to="/courses-details">{this.props.obj.course_title}</NavLink> */}
                            <Link  to={"/courses-details/" + this.props.obj.course_price}>{this.props.obj.course_title}</Link>
                        </div>
                        {/* <div className="card-text">
                            Adobe Guide, Layes, Smart Objects etc...
                        </div> */}
                        <div className="card-text">
                            {this.props.obj.course_description}
                        </div>
                    </div>
                <div className="price_box d-flex flex-row align-items-center">
                    <div className="course_author_image">
                        <img src="images/author.jpg" alt="https://unsplash.com/@mehdizadeh"/>
                    </div>
                    <div className="course_author_name">
                        UIT Viewer, <span>Author</span>
                    </div>
                    <div className="course_price d-flex flex-column align-items-center justify-content-center">
                        <span>{this.props.obj.course_price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default PageCoursesPopularChild;
