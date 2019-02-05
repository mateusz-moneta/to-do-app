import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../interfaces/todo.interface';
import { generateID } from '../../utils/id-generator';

@Component({
  selector: 'to-do-app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output()
  addTodo = new EventEmitter<Todo>();

  addTodoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initTodoForm();
  }

  onAddTodo(): void {
    if (this.addTodoForm.valid) {
      this.addTodo.emit({
        title: this.addTodoForm.get('title').value,
        description: this.addTodoForm.get('description').value,
        id: generateID()
      });

      this.addTodoForm.reset();
    }
  }

  private initTodoForm(): void {
    this.addTodoForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(6)]],
      description: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}
