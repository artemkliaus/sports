import React, { Component } from 'react';
import './InputField.sass';

class InputField extends Component {

    render () {
        return (
            <div className="inputField">
                <input onChange={this.props.input} type='text' className='inputField__input' value={this.props.typedText}/>
                <button type='button' className='inputField__button' onClick={this.props.add}>Add</button>
            </div>
        )
    }
}

export default InputField;
