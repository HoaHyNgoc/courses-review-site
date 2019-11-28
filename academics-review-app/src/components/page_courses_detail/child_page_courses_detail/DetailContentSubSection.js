import React, { Component } from "react";

class DetailContentSubSection extends Component {
  SubSectionTitle = (titleItem) => {
    return (
        <div className="news_post_top d-flex flex-column flex-sm-row">
            <div className="news_post_date_container">
                <div className="news_post_date d-flex flex-column align-items-center justify-content-center">
                    <div>18</div>
                    <div>dec</div>
                </div>
            </div>
            <div className="news_post_title_container">
                    <div className="news_post_title">
                        <a href="news_post.html">{titleItem}</a>
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
      <div className="news_posts">
        {this.SubSectionTitle("This is title subsection")}
        {this.SubSectionDescription("This is description")}
      </div>
    );
  }
}

export default DetailContentSubSection;
