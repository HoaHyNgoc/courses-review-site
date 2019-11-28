import React, { Component } from 'react';
import ContentSideCategory from './ContentSideCategory';

class DetailContentSide extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <div class="sidebar">
                    <ContentSideCategory />
                </div>
            </div>
        );
    }
}

export default DetailContentSide;