import React from 'react';
import AnswerFormContainer from '../answer/answer_form_container';
// import { fetchUser } from "../../actions/user_action";

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuestionLink = this.handleQuestionLink.bind(this);
  }


  handleQuestionLink(e) {
    e.preventDefault();
    location.href = `/#/questions/${this.props.question.id}`;
  };


  render() {

    const { question, deleteQuestion, openModal, answers, users } = this.props;
    let a = null;
    let answerId = null;
    let answerObject;
    for (let i = 0; i < answers.length; i++) {
      if (question.id === answers[i].question_id) {
        answerObject = answers[i];
        a = answers[i].answer;
        answerId = answers[i].id;
      }
      break;
    }

    // let responderId = answerObject.responder_id

    // let responder
    // let responderFirst
    // let responderLast
    // for (let i = 0; i < users.length; i++) {
    //   if (users[i].id === responderId) {
    //     responder = users[i];
    //     responderFirst = users[i].first_name;
    //     responderLast = users[i].last_name;
    //   }
    //   break;
    // }


    let questionId = question.id;


    return (

      <div className="feed-item">
        <p className="feed-header">Answer * Recommended for you</p>
        <p className="feed-header">Asker's First and Last Name</p>

        <p className="feed-question" onClick={this.handleQuestionLink}>{ question.ask }</p>
        {/* <button onClick={() => openModal({ editQuestion: questionId })}>Edit Question</button>
        <button onClick={() => deleteQuestion(questionId)}>Delete Question</button> */}

        <br/>
        <p className="feed-answer">
        { a }  
        </p>
        {/* <AnswerFormContainer questionId={questionId} /> */}

        {/* <button onClick={() => openModal({ answer: questionId })}>Answer</button>
        <button onClick={() => openModal({ editAnswer: answerId })}>Edit Answer</button>
        <button onClick={() => deleteAnswer(answerId)}>Delete Answer</button> */}
        
        <ul className="dropdown">
          <p className="drop-button-dots">* * *</p>
          <li className="dropdown-content">
            <button onClick={() => openModal({ editQuestion: questionId })}>Edit Question</button>
            <button onClick={() => deleteQuestion(questionId)}>Delete Question</button>
            <button onClick={() => openModal({ answer: questionId })}>Answer</button>
            <button onClick={() => openModal({ editAnswer: answerId })}>Edit Answer</button>
            <button onClick={() => deleteAnswer(answerId)}>Delete Answer</button>          
          </li>
          {/* <li className="dropdown-content"><button onClick={() => openModal({ editAnswer: answerId })}>Edit Answer</button></li>
          <li className="dropdown-content"><button onClick={() => deleteAnswer(answerId)}>Delete Answer</button></li> */}
        </ul>
        <br/>
      <AnswerFormContainer questionId={questionId} />

      </div>
    );
  }
}


export default FeedItem;