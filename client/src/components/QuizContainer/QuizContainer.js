import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup } from "react-transition-group";
import Question from "../Question/Question";
import QuestionCount from "../QuestionCount/QuestionCount";
import AnswerOption from "../AnswerOption/AnswerOption";
import "./style.css";

function QuizContainer(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <TransitionGroup
      className="container"
      component="div"
      // transitionName="fade"
      // transitionEnterTimeout={800}
      // transitionLeaveTimeout={500}
      // transitionAppear
      // transitionAppearTimeout={500}
    >
      <div key={props.questionId}>
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
    </TransitionGroup>
  );
}

QuizContainer.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default QuizContainer;

// const Quiz = (props) => {

//     return (
//         <div className="quizWrapper">
//             Quiz

//         </div>
//     )
// };

// export default Quiz;
