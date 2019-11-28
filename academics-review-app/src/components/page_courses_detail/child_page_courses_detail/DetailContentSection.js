import React, { Component } from 'react';
import DetailContentSubSection from './DetailContentSubSection';

class DetailContentSection extends Component {
    render() {
        return (
            <div className="col-lg-8">
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