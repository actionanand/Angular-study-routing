import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  genders = ['male','female','not interested'];
  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData1: new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null,[Validators.required, Validators.email])
      }),
      'genderOptn': new FormControl('not interested'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  onAddHobbies(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

}
