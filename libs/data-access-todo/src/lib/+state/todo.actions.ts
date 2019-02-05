import { Action } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

export enum TodoActionTypes {
  LoadAllTodo = '[Todo] Load All Todo',
  TodoAllLoaded = '[Todo] All Todo Loaded',
  TodoAllLoadError = '[Todo] All Todo Load Error',
  AddTodo = '[Todo] Add Todo',
  RemoveTodo = '[Todo] Remove Todo'
}

export class LoadAllTodo implements Action {
  readonly type = TodoActionTypes.LoadAllTodo;
}

export class TodoAllLoadError implements Action {
  readonly type = TodoActionTypes.TodoAllLoadError;

  constructor(public payload: any) {
  }
}

export class TodoAllLoaded implements Action {
  readonly type = TodoActionTypes.TodoAllLoaded;

  constructor(public payload: Todo[]) {
  }
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;

  constructor(public payload: Todo) {
  }
}

export class RemoveTodo implements Action {
  readonly type = TodoActionTypes.RemoveTodo;

  constructor(public payload: string) {
  }
}

export type TodoAction = AddTodo | LoadAllTodo | TodoAllLoadError | TodoAllLoaded | RemoveTodo;

export const fromTodoActions = {
  LoadAllTodo,
  TodoAllLoadError,
  TodoAllLoaded,
  AddTodo,
  RemoveTodo
};
