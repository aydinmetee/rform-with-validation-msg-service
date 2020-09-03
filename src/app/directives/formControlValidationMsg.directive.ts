import { ValidationMsgService } from './../../services/validationMsg.service';
import { NgControl, ValidationErrors } from '@angular/forms';
import { Directive, OnInit, OnDestroy, ElementRef, Input, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appFormControlValidationMsg]'
})
export class FormControlValidationMsgDirective implements OnInit, OnDestroy {

  constructor(private elRef:ElementRef, private control:NgControl,
    private validationMsgService: ValidationMsgService) { }

    @Input('validationMsgId') validationMsgId:string;
    errorSpanId: string = '';

    statusChangeSubscription: Subscription;

    ngOnInit():void{
      this.errorSpanId= this.validationMsgId + new Date() + '-error-msg';
      this.statusChangeSubscription= this.control.statusChanges.subscribe(
        (status) => {
          if(status == 'INVALID'){
            this.showError();
          }else{
            this.removeError();
          }
        }
      )
    }

    ngOnDestroy():void{
      this.statusChangeSubscription.unsubscribe();
    }

    @HostListener('blur',["$event"])
    handleBlurEvent(event){
      if(this.control.value == null || this.control.value == ''){
        if(this.control.errors)this.showError();
        else this.removeError();
      } 

    }

    private showError() {
      this.removeError();
      const valErrors: ValidationErrors = this.control.errors;
      const firstKey = Object.keys(valErrors)[0];
      const errorMsgKey = this.validationMsgId + '-' + firstKey + '-msg';
      const errorMsg = this.validationMsgService.getValidationMsg(errorMsgKey);
      const errSpan = '<span style="color:red;" id="' + this.errorSpanId + '">' + errorMsg + '</span>';
      this.elRef.nativeElement.parentElement.insertAdjacentHTML('beforeend', errSpan);
    }
  
    private removeError(): void {
      const errorElement = document.getElementById(this.errorSpanId);
      if (errorElement) errorElement.remove();
    }

}