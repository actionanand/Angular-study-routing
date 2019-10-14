import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TDFormComponent implements OnInit {

  @ViewChild('f',{static: true}) signUpForm: NgForm;

  constructor() { }

  ngOnInit() {
  }
  defaultQn = 'person';
  answer = '';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signUpForm);
  }
}
