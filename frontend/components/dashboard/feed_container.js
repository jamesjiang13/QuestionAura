import { connect } from 'react-redux';
import Feed from './feed';
import { fetchQuestions, deleteQuestion } from "../../actions/question_actions";

const mapStateToProps = (state) => ({
  questions: Object.values(state.entities.questions),
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  deleteQuestion: (question) => dispatch(deleteQuestion(question)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
