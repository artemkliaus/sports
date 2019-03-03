import React, { Component } from 'react';
import './InputField.sass';

function InputField ({ input, typedText, add }) {
    return (
        <div className="inputField">
            <input onChange={input} type='text' className='inputField__input' value={typedText}/>
            <button type='button' className='btn btn-primary' onClick={add}>Add</button>
        </div>
    )
}

export default InputField;
