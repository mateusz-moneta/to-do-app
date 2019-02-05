import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { TodoDataService } from '../services/todo-data.service';
import { TODO_FEATURE_KEY, TodoPartialState } from './todo.reducer';
import { AddTodo, LoadAllTodo, RemoveTodo, TodoActionTypes, TodoAllLoaded, TodoAllLoadError } from './todo.actions';

@Injectable()
export class TodoEffects {
  @Effect() addTodo = this.dataPersistence.pessimisticUpdate(TodoActionTypes.AddTodo, {
    run: (action: AddTodo, state: TodoPartialState) => {
      this.todoDataService.updateTodoList(state[TODO_FEATURE_KEY].list);
    },

    onError: (action: AddTodo, error: any) => {
      return null;
    }
  });

  @Effect() loadTodo$ = this.dataPersistence.fetch(TodoActionTypes.LoadAllTodo, {
    run: (action: LoadAllTodo, state: TodoPartialState) => {
      const data = this.todoDataService.getTodoList();
      if (data) {
        return new TodoAllLoaded(data);
      }
    },

    onError: (action: LoadAllTodo, error: any) => {
      console.error('Error', error);
      return new TodoAllLoadError(error);
    }
  });

  @Effect() removeTodo = this.dataPersistence.pessimisticUpdate(TodoActionTypes.RemoveTodo, {
    run: (action: RemoveTodo, state: TodoPartialState) => {
      this.todoDataService.updateTodoList(state[TODO_FEATURE_KEY].list);
    },

    onError: (action: RemoveTodo, error: any) => {
      return null;
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TodoPartialState>,
    private todoDataService: TodoDataService
  ) {}
}
