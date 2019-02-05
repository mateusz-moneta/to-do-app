import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  getTodoList(): Todo[] {
    if (localStorage.getItem('TodoList')) {
      return <Todo[]> JSON.parse(localStorage.getItem('TodoList'));
    }
  }

  updateTodoList(data: Todo[]) {
    localStorage.setItem('TodoList', JSON.stringify(data));
  }
}
