import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducers from './reducers/rootReducer.js';
import App from './containers/App/App.jsx';
import './styles.sass';

const store = createStore(reducers);

ReactDOM.render(<App />, document.getElementById('root'));
