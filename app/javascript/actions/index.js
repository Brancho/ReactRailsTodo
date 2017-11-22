import { ADD_ITEM, REMOVE_ITEM, TOGGLE_CHECKED, UPDATE_PRIORITY, REORDER_LIST } from './types'
import axios from 'axios';

export const addItem = (item) => async dispatch => {
  const res = await axios.post(`/items.json`, {item: { text: item }} );
  dispatch({ type: ADD_ITEM, item: res.data });
};


export const removeItem = (item) => async dispatch => {
  await axios.delete(`/items/${item.id}.json`, {item} );
  dispatch({ type: REMOVE_ITEM, id: item.id });
};

export const toggleChecked = (item) => async dispatch => {
   item.checked = !item.checked;
  const res =  await axios.patch(`/items/${item.id}.json`, {item} );
  dispatch({ type: TOGGLE_CHECKED, id: res.data.id, checked: res.data.checked });
};

export const reorderList = (item) => async dispatch => {
  dispatch({ type: UPDATE_PRIORITY, item: item.id, priority: item.priority });
  dispatch({ type: REORDER_LIST });
  await axios.patch(`/items/${item.id}.json`, {item} );
};
