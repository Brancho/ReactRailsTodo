import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ListItem from './ListItem'
import NewItem from './NewItem'
import { connect } from 'react-redux'
import { reorderList, addItem } from '../actions'


class List extends Component {

  onDragEnd = ({ source, destination }) => {
    const { todos, reorderList } = this.props;
    if (!destination) {
      return;
    }

    let priority = todos[destination.index].priority;
    source.index > destination.index ? priority++ : priority--;
    todos[source.index].priority = priority;

    reorderList(todos[source.index])
  };

  render() {
    return (
      <div className="list">
        <div className="list_title">
          <p>Task Manager</p>
        </div>
        <NewItem addItem={(item) => this.props.addItem(item)} />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div ref={provided.innerRef}>
                {this.props.todos.map((item, i) => (
                  <div key={i}>
                  <ListItem item={item} />
                  </div>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

      </div>
    )
  }
}


const mapStateToProps = ({todos}) => ({todos});
export default connect(mapStateToProps, {reorderList, addItem})(List);

