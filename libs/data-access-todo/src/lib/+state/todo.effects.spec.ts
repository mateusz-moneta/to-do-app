import { TestBed } from '@angular/core/testing';
import { Actions, EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { cold, hot } from '@nrwl/nx/testing';

import { DataPersistence, NxModule } from '@nrwl/nx';

import { Observable, of, ReplaySubject } from 'rxjs';

import { TodoEffects } from './todo.effects';
import { TodoDataService } from '../services/todo-data.service';
import { AddTodo, LoadAllTodo, RemoveTodo, TodoActionTypes, TodoAllLoaded, TodoAllLoadError } from './todo.actions';
import { Todo } from '../interfaces/todo.interface';

describe('TodoEffects', () => {
  let actions$: Observable<any>;
  let effects: TodoEffects;
  let todoDataService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        TodoEffects,
        DataPersistence,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TodoEffects);
    todoDataService = TestBed.get(TodoDataService);
    actions$ = TestBed.get(Actions);
  });

  describe('loadTodo$', () => {
    beforeEach(() => {
      it('should dispatch a Load All Todo action', () => {
        const action = new LoadAllTodo();
        const completion = new TodoAllLoaded([]);
        const todo = { description: 'TEST-A', id: '1', title: 'TEST-A' } as Todo;

        actions$ = hot('-a', { a: action });
        const response = cold('-a|', { a: todo })
        const expected = cold('-b', { b: completion });
        expect(effects.loadTodo$).toBeObservable(expected);
      });
    });
  });
});
