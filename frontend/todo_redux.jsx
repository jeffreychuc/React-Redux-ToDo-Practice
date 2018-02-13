import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './components/root';
import configureStore from './store/store';
import { receiveTodo } from './actions/todo_actions';
// import style from '../stylesheets/application.scss';

document.addEventListener("DOMContentLoaded", () => {
	let store = configureStore();
	window.dispatch = store.dispatch;
	window.getState = store.getState;
	window.receiveTodo = receiveTodo;
	const root = document.getElementById("root");
  const test = <h1>Todos App</h1>;
  // ReactDOM.render(<Root store={store}/>, root);
  ReactDOM.render(test, root);
});
