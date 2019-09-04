import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

fetch('http://localhost:1337/emoji-shop')
  .then(responce=>responce.json())
  .then(data=>{ReactDOM.render(<App emoji={data.emoji}/>, document.getElementById('root'));});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
