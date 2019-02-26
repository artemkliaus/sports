import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from '../../components/InputField/InputField.jsx';
import Task from '../../components/Task/Task.jsx';
import Info from '../../components/Info/Info.jsx';
import './App.sass';
import { addTask, typeText } from '../../actions/index.js';

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

    hideCompleted (event) {
        const { tasks, hideCompleted } = this.state;
        const newTasks = tasks.slice();
        const newArr = newTasks.map((el) => {
            if (el.done) el.hide = !el.hide;
            return el;
        });
        this.setState({
            tasks: newArr,
            hideCompleted: !hideCompleted
        });
    }

    inputHandler (event) {
        const { value } = event.target;
        const { typeText } = this.props;
        typeText(value);
    }

    closeTask (event) {
        const { tasks } = this.state;
        const number = event.target.parentElement.getAttribute('data-id');
        const newTasks = tasks.slice();
        const currObj = newTasks.find((x, i) => x.index === number);
        currObj.done = !currObj.done;
        this.setState({
            tasks: newTasks
        });
    }

    removeTask (event) {
        const { tasks } = this.state;
        const number = event.target.parentElement.getAttribute('data-id');
        let position = null;
        const newTasks = tasks.slice();
        const currObj = newTasks.find((x, i) => {
            if (x.index === number) position = i;
        });
        newTasks.splice(position, 1);
        this.setState({
            tasks: newTasks
        });
    }


    render () {
        const { state } = this.props;
        console.log(state);
        return (
            <div className='todo'>
                <h1 className='todo__title'>Todo List</h1>
                <InputField input={this.inputHandler}
                            add={this.addTask}
                            typedText={state.typedText}/>
                <div className="tasks-list">
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
    addTask
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
