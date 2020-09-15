import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-errorMessage',
  templateUrl: './errorMessage.component.html',
  styleUrls: ['./errorMessage.component.css']
})
export class ErrorMessageComponent implements OnInit {


  @Input() control:FormControl;

  @Input() errors: {[key:string ]: string} = {};

  constructor() { }

  ngOnInit() {
    
  }

}
