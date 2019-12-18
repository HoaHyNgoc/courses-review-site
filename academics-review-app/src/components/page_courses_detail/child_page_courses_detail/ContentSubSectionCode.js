import React, { Component } from 'react';

class ContentSubSectionCode extends Component {
    render() {
        return (
            <div className="w3-example">
                <div className="w3-code">
                    <span>{this.props.codeExample}</span>                        
                </div>
            </div>
        );
    }
}

export default ContentSubSectionCode;