import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { TodoEffects } from './todo.effects';
import { TodoFacade } from './todo.facade';

import { todoQuery } from './todo.selectors';
import { LoadTodo, TodoLoaded } from './todo.actions';
import { TodoState, Entity, initialState, todoReducer } from './todo.reducer';

interface TestSchema {
  todo: TodoState;
}

describe('TodoFacade', () => {
  let facade: TodoFacade;
  let store: Store<TestSchema>;
  let createTodo;

  beforeEach(() => {
    createTodo = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('todo', todoReducer, { initialState }),
          EffectsModule.forFeature([TodoEffects])
        ],
        providers: [TodoFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(TodoFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allTodo$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allTodo$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `TodoLoaded` to manually submit list for state management
     */
    it('allTodo$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allTodo$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(new TodoLoaded([createTodo('AAA'), createTodo('BBB')]));

        list = await readFirst(facade.allTodo$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
