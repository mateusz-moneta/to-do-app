import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  TODO_FEATURE_KEY,
  initialState as todoInitialState,
  todoReducer
} from './+state/todo.reducer';
import { TodoEffects } from './+state/todo.effects';
import { TodoFacade } from './+state/todo.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_FEATURE_KEY, todoReducer, {
      initialState: todoInitialState
    }),
    EffectsModule.forFeature([TodoEffects])
  ],
  providers: [TodoFacade]
})
export class DataAccessTodoModule {}
