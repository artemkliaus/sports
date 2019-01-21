import React, { Component } from 'react';
import InputField from '../InputField/InputField.jsx';
import './App.sass';

class App extends Component {

     inputHandler (event) {
        console.log(event.target.value)
     }

    render () {
        return (
            <div className='todo'>
                <h1 className='todo__title'>Todo List</h1>
                <InputField handler={this.inputHandler}/>
            </div>
        )
    }
}

export default App;
