import React, { Component } from 'react';
import InputField from '../InputField/InputField.jsx';
import Task from '../Task/Task.jsx';
import './App.sass';

class App extends Component {

    constructor () {
        super();
        this.state = {
            typedText: '',
            tasks: []
        }
    }

    addTask () {
        const { typedText, tasks } = this.state;

        if (typedText) {
            const newTasks = tasks.slice();
            newTasks.push({
                text: typedText,
                index: tasks.length
            });

            this.setState({
                tasks: newTasks,
                typedText: ''
            });
        }
    }

    inputHandler (event) {
        const newText = event.target.value;
        const { typedText } = this.state;

        this.setState({
            typedText: newText
        });

        console.log(newText);
    }

    closeTask (event) {
        const { tasks } = this.state;
        const number = event.target.parentElement.getAttribute('data-number');
        const newTasks = tasks.slice();
        const done = newTasks[number].done;
        newTasks[number].done = done ? false : true;
        this.setState({
            tasks: newTasks
        });
    }

    removeTask (event) {
        const { tasks } = this.state;
        const number = event.target.parentElement.getAttribute('data-number');
        const newTasks = tasks.slice();
        newTasks.splice(number, 1);
        this.setState({
            tasks: newTasks
        });
    }


    render () {
        return (
            <div className='todo'>
                <h1 className='todo__title'>Todo List</h1>
                <InputField input={this.inputHandler.bind(this)}
                            add={this.addTask.bind(this)}
                            typedText={this.state.typedText}/>
                <div className="tasks-list">
                    {this.state.tasks.map((i, ind) => {
                        return <Task data={i} key={ind} closeTask={this.closeTask.bind(this)} removeTask={this.removeTask.bind(this)}/>
                    })}
                </div>
            </div>
        )
    }
}

export default App;
