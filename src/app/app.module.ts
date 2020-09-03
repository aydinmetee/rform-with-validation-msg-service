import { FormSubmitValidationMsgDirective } from './directives/formsubmit-validation-msg.directive';
import { FormControlValidationMsgDirective } from './directives/formControlValidationMsg.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormUiComponent } from './form-ui/form-ui.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [		
    AppComponent,
      FormUiComponent,
      FormControlValidationMsgDirective,
      FormSubmitValidationMsgDirective
      
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
