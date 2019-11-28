import React, { Component } from 'react';
import DetailContentSubSection from './DetailContentSubSection';

class DetailContentSection extends Component {
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
                <DetailContentSubSection />
                <DetailContentSubSection />
                <DetailContentSubSection />
                <DetailContentSubSection />
                <DetailContentSubSection />
            </div>
        );
    }
}

export default DetailContentSection;