import axios from 'axios';

export const addItem = (item) => async dispatch => {
  const res = await axios.post(`/items.json`, {item: { text: item }} );
  dispatch({ type: 'ADD_ITEM', item: res.data });
};


export const removeItem = (item) => async dispatch => {
  await axios.delete(`/items/${item.id}.json`, {item} );
  dispatch({ type: 'REMOVE_ITEM', id: item.id });
};

export const toggleChecked = (item) => async dispatch => {
  const res =  await axios.patch(`/items/${item.id}.json`, {item} );
  dispatch({ type: 'TOGGLE_CHECKED', id: res.data.id });
};

export const reorderList = (list) => {
  return {
    type: 'REORDER_LIST',
    list
  };
};



