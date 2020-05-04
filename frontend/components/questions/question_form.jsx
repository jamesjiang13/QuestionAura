import React from 'react';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ask: this.props.question.ask,
      asker_id: this.props.currentUser,
      id: this.props.question.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = { ...this.state };
    this.props.action(question)
    .then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    return (
      <div className="question-box">
        <form id="question-form" onSubmit={this.handleSubmit}>
          <p>{this.props.first} {this.props.last} asked</p>
          <input
            type="text"
            value={this.state.ask}
            onChange={this.update('ask')}
            placeholder="Start your question with What, How, Why, etc."
            className="question-input"
          />
          <div id="cancel-or-submit-question-section">
          <button className="ask-question-button">{this.props.formType}</button>
          </div>
        </form>
      </div>
    );
  }
}


export default QuestionForm;
