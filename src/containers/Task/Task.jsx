import React, { Component } from 'react';
import './Task.sass';


class Task extends Component {


  render () {
    const { data, closeTask, removeTask} = this.props;
    let className = 'task';
    className += data.done ? ' task_done' : '';
    return (
      <div className={className}>
        <span className="task__text">{data.text}</span>
        <div className="task__button-block">
          <button type='button' className='task__button task__button_green' onClick={closeTask} data-number={data.index}>Complete</button>
          <button type='button' className='task__button task__button_red' onClick={removeTask}>Remove</button>
        </div>
      </div>
    )
  }
}

export default Task;
