import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function AnswerOption(props) {
  return (
    <li className="answerOption">
      {/* <div class="flexbox-container"> */}
      <input
        // type="radio"
        // className="btn"
        className="categoryBtn"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="btn" htmlFor={props.answerType}>
        {props.answerContent}
        <img src={props.gif} />
      </label>
      {/* </div> */}
    </li>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
