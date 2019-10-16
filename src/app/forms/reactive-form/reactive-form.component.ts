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
  spaceNeeded:boolean = false;
  forbiddenUserNames = ['Anand','AR','AnandRaja','superUser'];

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData1: new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
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
    this.spaceNeeded = true;
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl):{[s: string]: boolean} {
    if(this.forbiddenUserNames.indexOf(control.value) !== -1){
      return {'userNameIsForbidden': true};
    }
    else
    return null;
  }

}
