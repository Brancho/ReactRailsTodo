import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';
import List from './List'

const App = (props) => {
  return(
    <Provider store={createStore(
      rootReducer,
      props,
      applyMiddleware(reduxThunk)
    )}>
      <List />
    </Provider>
  )
};

export default App;