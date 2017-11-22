const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: action.item.id,
        text: action.item.text,
        priority: action.item.priority,
        checked: action.item.checked
      };
    case 'TOGGLE_CHECKED':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        checked: !state.checked,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        todo(undefined, action),
        ...state
      ];
    case 'TOGGLE_CHECKED':
      return state.map(t =>
        todo(t, action)
      );
    case 'REORDER_LIST':
      return action.list;
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id)
    default:
      return state;
  }
};

export default todos;




