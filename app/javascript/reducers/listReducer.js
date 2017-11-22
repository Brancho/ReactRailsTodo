import { ADD_ITEM, REMOVE_ITEM, TOGGLE_CHECKED, UPDATE_PRIORITY, REORDER_LIST } from '../actions/types'

const todo = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        id: action.item.id,
        text: action.item.text,
        priority: action.item.priority,
        checked: action.item.checked
      };
    case TOGGLE_CHECKED:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        checked: action.checked,
      };
    case UPDATE_PRIORITY:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        priority: action.priority,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        todo(undefined, action),
        ...state
      ];
    case TOGGLE_CHECKED:
      return state.map(t =>
        todo(t, action)
      );
    case REORDER_LIST:
      return state.slice().sort(function(a, b) {
        if(a.priority == b.priority){
          return 1
        }
        return a.priority - b.priority;
      }).reverse();
    case REMOVE_ITEM:
      return state.filter(item => item.id !== action.id);
    case UPDATE_PRIORITY:
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

export default todos;




