import React from 'react';
import Icon from 'react-fontawesome';

const NewItem = ({addItem}) => {

  const createItem = () => {
    if (this.itemInput.value) {
      addItem(this.itemInput.value);
      this.itemInput.value = '';
    }
  };

  return (
    <div className="list_input">
      <Icon name='plus' size='2x' className="icon" onClick={() => createItem()}/>
      <input type="text" onKeyPress={(e) => e.key === 'Enter' ? createItem() : null} ref={(input) => {
        this.itemInput = input;
      }}/>
    </div>
  )
}

export default NewItem