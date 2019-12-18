import React, { Component } from "react";
import axios from "axios";
import SubSildeCategory from "./SubSildeCategory";

class ContentSideCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { sections: [] };
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

  // mapping data (database - display frontend)
  subSectionRow = () => {
    var id = parseInt(this.props.idCourse);
    return this.state.sections.map(function(object, i) {
      if (object.section_id_course == id){
        return <SubSildeCategory obj={object} key={i} />;
      }   
      // return <SubSildeCategory obj={object} key={i} />;
    });
  };

  render() {
    return (
      <div className="sidebar_section">
        <div className="sidebar_section_title">
          <h3>Category</h3>
        </div>
        <ul className="sidebar_list">{this.subSectionRow()}</ul>
      </div>
    );
  }
}

export default ContentSideCategory;
