import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login/Login.js'
import MessageBar from './discord/MessageBar.js'


ReactDOM.render(<MessageBar />, document.getElementById('login'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
