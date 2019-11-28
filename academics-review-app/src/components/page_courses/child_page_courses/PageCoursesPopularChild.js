import React, { Component } from "react";

class PageCoursesPopularChild extends Component {
  render() {
    return (
        <div className="col-lg-4 course_box">
            <div className="card">
                <img className="card-img-top" src="images/course_1.jpg" alt="" />
                    <div className="card-body text-center">
                        <div className="card-title">
                            <a href="courses.html">A complete guide to design</a>
                        </div>
                        <div className="card-text">
                            Adobe Guide, Layes, Smart Objects etc...
                        </div>
                    </div>
                <div className="price_box d-flex flex-row align-items-center">
                    <div className="course_author_image">
                        <img src="images/author.jpg" alt="https://unsplash.com/@mehdizadeh"/>
                    </div>
                    <div className="course_author_name">
                        Michael Smith, <span>Author</span>
                    </div>
                    <div className="course_price d-flex flex-column align-items-center justify-content-center">
                        <span>$29</span>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default PageCoursesPopularChild;
