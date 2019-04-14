import { TodoAction, TodoActionTypes } from './todo.actions';
import { Todo } from '../interfaces/todo.interface';

export const TODO_FEATURE_KEY = 'todo';

/**
 * Interface for the 'Todo' data used in
 *  - TodoState, and
 *  - todoReducer
 *
 *  Note: replace if already defined in another module
 */

export interface TodoState {
  error?: any; // last none error (if any)
  list: Todo[]; // list of Todo; analogous to a sql normalized table
  loaded: boolean; // has the Todo list been loaded
  selectedId?: string | number; // which Todo record has been selected
}

export interface TodoPartialState {
  readonly [TODO_FEATURE_KEY]: TodoState;
}

export const initialState: TodoState = {
  list: [],
  loaded: false
};

export function todoReducer(state: TodoState = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case TodoActionTypes.AddTodo: {
      state = {
        ...state,
        list: state.list.concat(action.payload)
      };
      break;
    }
    case TodoActionTypes.RemoveTodo: {
      state = {
        ...state,
        list: state.list.filter(todo => todo.id !== action.payload)
      };
      break;
    }
    case TodoActionTypes.TodoAllLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
