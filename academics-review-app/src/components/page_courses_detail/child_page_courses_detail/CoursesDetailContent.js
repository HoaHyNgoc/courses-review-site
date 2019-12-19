import React, { Component } from 'react';
import DetailContentSection from './DetailContentSection';
import DetailContentSide from './DetailContentSide';
import CourseDetailExercise from './ContentCourseExercise/CourseDetailExercise';

class CoursesDetailContent extends Component {
    render() {
        return (
            <div className="news">
                <div className="container">
                    <div className="row">
                        {/* <DetailContentSection idCourse={this.props.idCourseSelected}/> */}
                        {/* <DetailContentSide idCourse={this.props.idCourseSelected}/> */}
                        {/* <DetailContentSection />
                        <DetailContentSide /> */}
                        
                    </div>
                    <CourseDetailExercise idCourse={this.props.idCourseSelected}/>
                </div>
            </div>
        );
    }
}

export default CoursesDetailContent;