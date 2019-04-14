import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { TodoPartialState } from './todo.reducer';
import { todoQuery } from './todo.selectors';
import { AddTodo, LoadAllTodo, RemoveTodo } from './todo.actions';
import { Todo } from '../interfaces/todo.interface';

@Injectable()
export class TodoFacade {
  loaded$ = this.store.pipe(select(todoQuery.getLoaded));
  allTodo$ = this.store.pipe(select(todoQuery.getAllTodo));

  constructor(private store: Store<TodoPartialState>) {
  }

  addTodo(data: Todo) {
    this.store.dispatch(new AddTodo(data));
  }

  loadAllTodo() {
    this.store.dispatch(new LoadAllTodo());
  }

  removeTodo(id: string) {
    this.store.dispatch(new RemoveTodo(id));
  }
}
