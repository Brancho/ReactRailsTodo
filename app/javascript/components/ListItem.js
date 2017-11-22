import React, {Component} from 'react';
import Icon from 'react-fontawesome';
import {Draggable} from 'react-beautiful-dnd';
import { toggleChecked, removeItem } from '../actions'
import {connect} from 'react-redux'



const getItemStyle = (draggableStyle, isDragging) => ({
  userSelect: 'none',
  ...draggableStyle,
});


class ListItem extends Component {

  render() {
    const {item} = this.props;
    return (
      <Draggable key={item.id} draggableId={item.id}>
        {(provided, snapshot) => (
          <div>
            <div ref={provided.innerRef} style={getItemStyle(
              provided.draggableStyle,
              snapshot.isDragging
            )}
                 {...provided.dragHandleProps}
            >
              <div className="list_item">
                <div>
                  <Icon name={`${item.checked ? 'check-circle' : 'check-circle-o' }`}
                        size='2x'
                        className="icon check"
                        onClick={() => this.props.toggleChecked(item)}
                        style={{ color: `${item.checked ? '#c7f0bb' : '#D3D3D3'}` }}
                  />
                  <p>{item.text}</p>
                </div>
                <Icon
                  name='trash-o'
                  size='2x'
                  className="icon"
                  onClick={() => this.props.removeItem(item)}
                />
              </div>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    )
  }

}

export default connect(null, { toggleChecked, removeItem })(ListItem)