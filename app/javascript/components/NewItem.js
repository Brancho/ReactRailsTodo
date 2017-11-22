import React, {Component} from 'react';
import Icon from 'react-fontawesome';
import { addItem } from '../actions'
import {connect} from 'react-redux'


class NewItem extends Component{

  _handleKeyPress = (e) => {
    e.key === 'Enter' ? this.createItem() : ''
  };

  createItem = () => {
    if(this.itemInput.value){
      this.props.addItem(this.itemInput.value);
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

export default connect(null, {addItem})(NewItem)