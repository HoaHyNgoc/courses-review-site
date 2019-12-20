import React, { Component } from "react";
import ContentSubSectionCode from "../ContentSubSectionCode";

function Result(props) {
  console.log("classname: " + props.warn);
  return (
    <div className={props.warn ? "visible-result" : "hide-result"}>
      <div className="w3-code">Result: {props.result}</div>
    </div>
  );
}

function Answer(params) {
  if(params.iscorrect === "")
    return (
      <div></div>
    );
  return (
    // <div className="assignmentNotCorrect">
    //   Correct!
    // </div>
    <div className={params.iscorrect ? "assignmentCorrect" : "assignmentNotCorrect"}>
      {params.iscorrect ? "Correct!" : "Not Correct!"}
    </div>
  );
}

function getLowerCase(content) {
  
}


export default class ExerciseSheet extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showWarning: false,
      isAnswer: ""
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.onSubmitAnswer = this.onSubmitAnswer.bind(this);
  }

  isResult = (trueResult, e) => {
    this.setState({
      isAnswer:""
    });
    
    e.preventDefault();
    console.log("A check:" + document.getElementById("radio1").checked);
    console.log("B:" + document.getElementById("radio2").checked);
    console.log("result:" + trueResult);
  
    var A = document.getElementById("radio1").checked;
    var B = document.getElementById("radio2").checked;
    
    if (A){
      if (document.getElementById("radio1").defaultValue == trueResult){
        console.log("correct");
        this.setState({
          isAnswer:true
        });
      }
      else{
        console.log("not correct");
        this.setState({
          isAnswer:false
        });
      }
    }

    if (B){
      if (document.getElementById("radio2").defaultValue == trueResult){
        console.log("correct")
        this.setState({
          isAnswer:true
        });
      }
      else{
        console.log("not correct")
        this.setState({
          isAnswer:false
        });
      }
    }
    return;
  };

  onSubmitAnswer(e){
    e.preventDefault();
    console.log("A:" + document.getElementById("radio1").checked);
    console.log("B:" + document.getElementById("radio2").checked);
  }

  handleToggleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <div className="accordion_container">
          <div className="accordion d-flex flex-row align-items-center">
            <p>{this.props.obj.sample_description}</p>
          </div>
        </div>
        <div className="code_example">
          <ContentSubSectionCode codeExample={this.props.obj.sample_code} />
        </div>
        <div className="row" style={{ marginLeft: "50px" }}>
          <form style={{ marginBottom: "50px" }}>
            <div className="form-check-inline" style={{ marginLeft: "80px" }}>
              <label className="form-check-label" htmlFor="radio1">
                <input
                  type="radio"
                  className="form-check-input"
                  id="radio1"
                  name="optradio"
                  defaultValue="A"
                />
                {this.props.obj.sample_ans_a}
              </label>
            </div>
            <div className="form-check-inline" style={{ marginLeft: "80px" }}>
              <label className="form-check-label" htmlFor="radio2">
                <input
                  type="radio"
                  className="form-check-input"
                  id="radio2"
                  name="optradio"
                  defaultValue="B"
                />
                {this.props.obj.sample_ans_b}
              </label>
            </div>
            <button
              onClick={(e)=> this.isResult(this.props.obj.sampple_ans_true, e)}
              className="form-check-inline btn btn-primary"
              style={{ marginLeft: "50px" }}
            >
              Submit Answer
            </button>
            <button
              onClick={this.handleToggleClick}
              className="form-check-inline btn btn-primary"
              style={{ marginLeft: "50px" }}
            >
              {this.state.showWarning ? "Hide Andswer" : "Try it Yourself"}
            </button>
            <Answer className="form-check-inline"
              iscorrect={this.state.isAnswer}
            />
            <Result
              warn={this.state.showWarning}
              result={this.props.obj.sampple_ans_true}
            />
          </form>
        </div>
      </div>
    );
  }
}
