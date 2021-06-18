import uuidv4 from 'uuid/v4';
import moment from 'moment';

let todos = [];

const loadTodos = () => {
  const todosJSON = localStorage.getItem('todos');
  try {
    todos = todosJSON ? JSON.parse(todosJSON) : [];
  } catch (error) {
    todos = [];
  }
};

const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const getTodos = () => todos;

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (text) => {
  todos.push({
    id: uuidv4(),
    text,
    completed: false,

  });
  saveTodos();
};

const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
    saveTodos();
  }
};

const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);

  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
  }
};

loadTodos();

export {
  getTodos, createTodo, removeTodo, toggleTodo, loadTodos,
};
