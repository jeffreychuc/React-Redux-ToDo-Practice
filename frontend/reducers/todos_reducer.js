import merge from 'lodash/merge';
import { RECEIVE_TODO, RECIEVE_TODOS } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODO:
      return action.todos
    case RECIEVE_TODOS:
      // [action.todo.id] so that its interpolated
      return (merge({}, state, {[action.todo.id]: action.todo}));
    default:
      return state;
  }
};

export default todosReducer;
