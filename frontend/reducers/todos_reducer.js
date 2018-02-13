import merge from 'lodash/merge';
import { RECEIVE_TODO, RECIEVE_TODOS } from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
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
