import { combineReducers } from 'redux';
import todos from './listReducer'


const rootReducer = combineReducers({
  todos
});

export default rootReducer;
