import React, { Component } from 'react';
import propTypes from 'prop-types';


 class TodoItem extends Component {
    getStyle = () => {
        return{
            backgroundColor:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            color: this.props.todo.completed ? 'red' : '#333'
        }
    }

   

    render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p> 
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
            { title }
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
         </p>
      </div>
    )
  }
}

// Proptypes
TodoItem.propTypes = {
    todo: propTypes.object.isRequired
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color:'#fff',
    border: 'none',
    padding:'7px 9px',
    float:'right'
}

export default TodoItem