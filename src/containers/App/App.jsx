import React, { Component } from 'react';
import InputField from '../../components/InputField/InputField.jsx';
import Task from '../Task/Task.jsx';
import Info from '../../components/Info/Info.jsx';
import './App.sass';

class App extends Component {

    constructor () {
        super();
        this.state = {
            typedText: '',
            tasks: []
        }

        this.closeTask = this.closeTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }

    addTask () {
        const { typedText, tasks } = this.state;

        if (typedText) {
            const newTasks = tasks.slice();
            const id = Math.random().toString();
            newTasks.push({
                text: typedText,
                index: id
            });

            this.setState({
                tasks: newTasks,
                typedText: ''
            });
        }
    }

    inputHandler (event) {
        const { value } = event.target;
        const { typedText } = this.state;

        this.setState({typedText: value});
    }

    closeTask (event) {
        const { tasks } = this.state;
        const number = event.target.parentElement.getAttribute('data-id');
        const newTasks = tasks.slice();
        const currObj = newTasks.find((x, i) => x.index === number);
        const done = currObj.done;
        currObj.done = done ? false : true;
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
        return (
            <div className='todo'>
                <h1 className='todo__title'>Todo List</h1>
                <InputField input={this.inputHandler}
                            add={this.addTask}
                            typedText={this.state.typedText}/>
                <div className="tasks-list">
                    {this.state.tasks.map((el) => {
                        return <Task data={el} key={el.index} closeTask={this.closeTask} removeTask={this.removeTask}/>
                    })}
                </div>
                <Info count={this.state.tasks.length}/>
            </div>
        )
    }
}

export default App;
