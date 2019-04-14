import { async, TestBed } from '@angular/core/testing';
import { DataAccessTodoModule } from './data-access-todo.module';

describe('DataAccessTodoModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataAccessTodoModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataAccessTodoModule).toBeDefined();
  });
});
