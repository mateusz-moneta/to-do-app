import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Todo } from './interfaces/todo.interface';
import { TodoFacade } from '@to-do-app/data-access-todo';

@Component({
  selector: 'to-do-app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  todoList = this.todoFacade.allTodo$;

  constructor(private todoFacade: TodoFacade) {
    this.todoFacade.loadAllTodo();
  }

  addTodo(data: Todo) {
    this.todoFacade.addTodo(data);
  }

  removeTodo(id: string) {
    this.todoFacade.removeTodo(id);
  }
}

