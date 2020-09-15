import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormUiComponent } from './form-ui/form-ui.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './errorMessage/errorMessage.component';

@NgModule({
  declarations: [			
    AppComponent,
      FormUiComponent,
      ErrorMessageComponent
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
