import { Address } from './../models/address';
import { Users } from './../models/users';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-ui',
  templateUrl: './form-ui.component.html',
  styleUrls: ['./form-ui.component.css']
})
export class FormUiComponent implements OnInit {

  userForm:FormGroup;
  user:Users
  

  constructor(private formBuilder:FormBuilder) { 
    this.userForm = this.formBuilder.group({
      userName: [null,Validators.required],
      email: [null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(5)]],
      age:[null,[Validators.required,Validators.min(1),Validators.max(100)]],
      addresses:this.formBuilder.array([]),
    });
  }

  ngOnInit() {
  }

  createAddress(){
    const address = this.userForm.controls.addresses as FormArray;
      address.push(this.formBuilder.group({
      name: [null,Validators.required],
      country: [null,Validators.required],
      city: [null,Validators.required],
      town: ['']
    }));
  }

  removeAddress(index:number){
    const address=this.userForm.controls.addresses as FormArray;
    address.removeAt(index);
  }

  updateForm(){
    this.user=Object.assign({},this.userForm.value);
    this.user.address=Object.assign({},Object.assign({},this.userForm.value).address) as Address[];
    console.log(this.userForm.value);
  }

}
