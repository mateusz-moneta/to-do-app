import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODO_FEATURE_KEY, TodoState } from './todo.reducer';

// Lookup the 'Todo' feature state managed by NgRx
const getTodoState = createFeatureSelector<TodoState>(TODO_FEATURE_KEY);

const getLoaded = createSelector(getTodoState, (state: TodoState) => state.loaded);
const getError = createSelector(getTodoState, (state: TodoState) => state.error);

const getAllTodo = createSelector(getTodoState, getLoaded, (state: TodoState, isLoaded) => isLoaded ? state.list : []);

export const todoQuery = {
  getAllTodo,
  getError,
  getLoaded
};
