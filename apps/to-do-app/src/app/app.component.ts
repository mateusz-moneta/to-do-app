import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Todo } from './interfaces/todo.interface';

@Component({
  selector: 'to-do-app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {

  todoList: Todo[] = [];

  addTodo(data: Todo) {
    this.todoList = this.todoList.concat(data);
  }

  removeTodo(id: string) {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
  }
}

