import { createSelector } from 'reselect';

export function todoListSelector(state) {
  return state.todoList;
}

export function searchTextSelector(state) {
  return state.filters.search;
}

export function statusFilterSelector(state) {
  return state.filters.status;
}

export function priorityFilterSelector(state) {
  return state.filters.priority;
}

export const todoRemainingSelector = createSelector(
  todoListSelector,
  statusFilterSelector,
  searchTextSelector,
  priorityFilterSelector,
  (todoList, status, searchText, priority) =>
    todoList.filter((todo) => {
      if (status === 'All')
        return priority.length
          ? todo.name.includes(searchText) && priority.includes(todo.priority)
          : todo.name.includes(searchText);
      return (
        todo.name.includes(searchText) &&
        (status !== 'All' && status === 'Completed'
          ? todo.completed
          : !todo.completed) &&
        (priority.length
          ? todo.name.includes(searchText) && priority.includes(todo.priority)
          : true)
      );
    })
);
