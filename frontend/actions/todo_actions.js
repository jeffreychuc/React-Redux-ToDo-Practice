export const RECIEVE_TODOS = 'RECIEVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => ({
  type: RECIEVE_TODOS,
  todos: todos
});

export const receiveTodo = (todo) => ({
  type: RECIEVE_TODOS,
  todo: todo
});
