import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from '../../components/InputField/InputField.jsx';
import Task from '../../components/Task/Task.jsx';
import Info from '../../components/Info/Info.jsx';
import './App.sass';
import { addTask, typeText, closeTask, removeTask, hideCompletedTasks } from '../../actions/index.js';

class App extends Component {

    constructor () {
        super();

        this.closeTask = this.closeTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.hideCompleted = this.hideCompleted.bind(this);
    }

    addTask () {
        const { state, addTask } = this.props;
        const { typedText } = state;

        if (typedText) {
            const id = parseInt(Math.random() * 1000);
            addTask(typedText, id);
        }
    }

    hideCompleted () {
        this.props.hideCompletedTasks();
    }

    inputHandler (event) {
        const { value } = event.target;
        this.props.typeText(value);
    }

    closeTask (event) {
        const id = event.target.parentElement.getAttribute('data-id');
        this.props.closeTask(parseInt(id));
    }

    removeTask (event) {
        const id = event.target.parentElement.getAttribute('data-id');
        this.props.removeTask(parseInt(id));
    }


    render () {
        const { state } = this.props;
        return (
            <div className='todo'>
                <h1 className='todo__title'>Todo List</h1>
                <InputField input={this.inputHandler}
                            add={this.addTask}
                            typedText={state.typedText}/>
                <div className={"tasks-list " + (state.hideCompleted ? "tasks-list_hide-completed" : '')}>
                    {state.tasks.map((el) => {
                        return <Task data={el} key={el.id} closeTask={this.closeTask} removeTask={this.removeTask}/>
                    })}
                </div>
                <Info count={state.tasks.length} hideFunc={this.hideCompleted} hidden={state.hideCompleted}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = {
    typeText,
    addTask,
    closeTask,
    removeTask,
    hideCompletedTasks
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
