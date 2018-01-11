// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './es6/components/IndecisionApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss';


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
