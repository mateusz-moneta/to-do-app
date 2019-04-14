import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'to-do-app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Output()
  removeTodo = new EventEmitter<string>();

  @Input()
  todoList$: Observable<Todo[]>;

  onRemoveTodo(id: string): void {
    this.removeTodo.emit(id);
  }
}
