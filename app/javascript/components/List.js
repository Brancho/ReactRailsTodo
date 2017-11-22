import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import axios from 'axios';
import ListItem from './ListItem'
import NewItem from './NewItem'
import { connect } from 'react-redux'


class List extends Component {
  constructor(props){
    super(props);

    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const destination = result.destination.index;
    const source = result.source.index;
    const { todos } = this.props;
    let priority = todos[destination].priority;

    source > destination ? priority++ : priority--;
    todos[source].priority = priority;
    axios.patch(`/items/${todos[source].id}.json`, {item: todos[source]} ).then(response => console.log(response));
  }

  render() {

    console.log(this.props.todos)

    return (
      <div className="list">
        <div className="list_title">
          <p>Task Manager</p>
        </div>
        <NewItem />
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

function mapStateToProps(state){
 return{
   todos: state.todos
 }
}

export default connect(mapStateToProps)(List);

