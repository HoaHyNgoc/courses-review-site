import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default class SectionDataTableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios
        .get("http://localhost:4000/section/delete/" + this.props.obj._id)
        .then(console.log("Deleted"))
        .catch(err => console.log(err));
        }

    render() {
        return (
            <tr>
            <td>{this.props.obj.section_id_course}</td>
            <td>{this.props.obj.section_title}</td>
            <td>{this.props.obj.section_description}</td>
            <td>{this.props.obj.section_code}</td>
            <td>{this.props.obj.section_link_code}</td>
            <td>
             <Link to={"/current/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
            </td>
            <td>
                
                <button onClick={this.delete} className="btn btn-danger">Delete</button>
            </td>
        </tr>
        );
    }
}