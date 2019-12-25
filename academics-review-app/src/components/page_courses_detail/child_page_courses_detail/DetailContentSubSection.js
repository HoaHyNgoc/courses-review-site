import React, { Component } from "react";
import ContentSubSectionCode from "./ContentSubSectionCode";

class DetailContentSubSection extends Component {
  SubSectionTitle = (titleItem, linkItem) => {
    return (
        <div className="news_post_top d-flex flex-column flex-sm-row">
            <div className="news_post_date_container">
                <div className="news_post_date d-flex flex-column align-items-center justify-content-center">
                    <div>SEC</div>
                    <div>...</div>
                </div>
            </div>
            <div className="news_post_title_container">
                    <div className="news_post_title">
                        <a href="https://repl.it/languages/python3" target="_blank">{titleItem}</a>
                    </div>
            </div>
        </div>
    );
  };

  SubSectionDescription = (description) => {
    return (
      <div className="news_post_text">
        <p>{description}</p>
      </div>
    );
  };

  render() {
    return (
      <div id={this.props.obj.section_title}>
        <div className="news_posts">
            {this.SubSectionTitle(this.props.obj.section_title, this.props.obj.section_link_code)}
            {this.SubSectionDescription(this.props.obj.section_description)}
        </div>
        <ContentSubSectionCode codeExample ={this.props.obj.section_code} />
      </div>
    );
  }
}

export default DetailContentSubSection;
