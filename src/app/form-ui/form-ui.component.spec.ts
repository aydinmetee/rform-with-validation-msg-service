/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormUiComponent } from './form-ui.component';

describe('FormUiComponent', () => {
  let component: FormUiComponent;
  let fixture: ComponentFixture<FormUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
