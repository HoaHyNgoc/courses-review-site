import React, { Component } from 'react';
import DetailContentSubSection from './DetailContentSubSection';
import axios from 'axios';
import CourseDetailExercise from './ContentCourseExercise/CourseDetailExercise';

class DetailContentSection extends Component {

    constructor(props) {
        super(props);        
        this.state = {sections: []};
    }

    componentDidMount() {
        axios
          .get("http://localhost:4000/section")
          .then(response => {
            this.setState({ sections: response.data });
          })
          .catch(function(error) {
            console.log(error);
          });
    }

    getDetailContentSubsection(){
        return this.state.sections.map(function(object, i) {
            return <DetailContentSubSection obj={object} key={i} />;
        });
    }
    

    SectionContentTitle = (idCourse, titleSection) => {
        return (
            <div className="news_post_title">
                <a href="news_post.html">{titleSection}</a>
            </div>
        );
    };

    render() {
        return (
            <div className="col-lg-8 scroll-add">
                {this.SectionContentTitle("1", "Title Section")}
                {this.getDetailContentSubsection()}
                <CourseDetailExercise />
            </div>
        );
    }
}

export default DetailContentSection;