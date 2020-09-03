import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationMsgService {
  constructor() {}

  public getValidationMsg(validationId: string): string {
    return this.errorMessages[validationId];
  }

  private errorMessages = {
    'username-required-msg': 'Username required.',

    'email-required-msg': 'Email required',
    'email-pattern-msg': 'Wrong e-mail',

    'password-required-msg': 'Password required.',

    'age-required-msg': 'Age required',
    'age-pattern-msg': 'Age must be higher than 0 and lower than 999'
  };
}
