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
        var id = parseInt(this.props.idCourse);
        return this.state.sections.map(function(object, i) {
            if (object.section_id_course == id) {
                return <DetailContentSubSection obj={object} key={i} />;
            }  
            // return <DetailContentSubSection obj={object} key={i} />;    
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
                {this.SectionContentTitle("1", "Sections")}
                {this.getDetailContentSubsection()}
            </div>
        );
    }
}

export default DetailContentSection;