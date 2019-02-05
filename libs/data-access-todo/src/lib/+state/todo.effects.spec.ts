import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { TodoEffects } from './todo.effects';
import { LoadTodo, TodoLoaded } from './todo.actions';

describe('TodoEffects', () => {
  let actions: Observable<any>;
  let effects: TodoEffects;

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
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(TodoEffects);
  });

  describe('loadTodo$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadTodo() });
      expect(effects.loadTodo$).toBeObservable(
        hot('-a-|', { a: new TodoLoaded([]) })
      );
    });
  });
});
