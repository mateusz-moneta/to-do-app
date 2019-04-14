import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './modules/material/custom-material.module';

import { ReactiveFormsModule } from '@angular/forms';

import { NxModule } from '@nrwl/nx';
import { StoreModule } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment} from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { DataAccessTodoModule } from '@to-do-app/data-access-todo';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [AppComponent, FormComponent, ListComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    StoreModule.forRoot({}, {
      metaReducers: !environment.production ? [storeFreeze] : []
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    DataAccessTodoModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    CustomMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
