import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer';
import entitiesReducer from './entities_reducer';
import questionsReducer from './question_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  question: questionsReducer,
  errors: errorsReducer,
});

export default rootReducer;
