import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index'

const initBooks = [
  {id: Math.random()*100, title: "Initial Book 1", category: "Kids"},
  {id: Math.random()*100, title: "Initial Book 2", category: "Learning"},
  {id: Math.random()*100, title: "Initial Book 3", category: "History"}
]

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export { initBooks };