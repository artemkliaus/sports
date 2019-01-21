import React, { Component } from 'react';
import './InputField.sass';

class InputField extends Component {

    render () {
        return (
            <div>
                <input onChange={this.props.handler} type='text' className='inputField__input'/>
                <button type='button' className='inputField__button'>Add</button>
            </div>
        )
    }
}

export default InputField;
