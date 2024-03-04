export function addTodo(payload) {
  return {
    type: 'todoList/addTodo',
    payload,
  };
}

export function toggleTodoStatus(id) {
  return {
    type: 'todoList/toggleTodoStatus',
    payload: id,
  };
}

export function searchFilterChange(payload) {
  return {
    type: 'filters/searchFilterChange',
    payload,
  };
}

export function statusFilterChange(payload) {
  return {
    type: 'filters/statusFilterChange',
    payload,
  };
}

export function priorityFilterChange(payload) {
  return {
    type: 'filters/priorityFilterChange',
    payload,
  };
}
