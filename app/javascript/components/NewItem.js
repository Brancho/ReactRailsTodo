import React, {Component} from 'react';
import Icon from 'react-fontawesome';
import axios from 'axios';

class NewItem extends Component{

  _handleKeyPress = (e) => {
    e.key === 'Enter' ? this.createItem() : ''
  };

  createItem = () => {
    if(this.itemInput.value){
      axios.post(`/items.json`, {item: { text: this.itemInput.value }} ).then(response => console.log(response));
      this.itemInput.value = '';
    }
  };

  render(){
    return(
      <div className="list_input">
        <Icon
          name='plus'
          size='2x'
          className="icon"
          onClick={this.createItem}
        />
        <input type="text" onKeyPress={this._handleKeyPress} ref={(input) => { this.itemInput = input; }}/>
      </div>
    )
  }
}

export default NewItem