import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
  isSubmited: boolean =false;
  user = {
    name: '',
    email: '',
    gender: '',
    hobbies: [null]
  };

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData1: new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null,[Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'genderOptn': new FormControl('not interested'),
      'hobbies': new FormArray([])
    });

    // this.signupForm.valueChanges.subscribe((value)=>{
    //   console.log(value);
    // });

    // this.signupForm.statusChanges.subscribe((status)=>{
    //   console.log(status);
    // });

  }

  onSubmit(){
    this.isSubmited = true;
    
    this.user.name = this.signupForm.get('userData1.username').value;
    this.user.email = this.signupForm.get('userData1.email').value;
    this.user.gender = this.signupForm.get('genderOptn').value;
    this.user.hobbies = this.signupForm.get('hobbies').value;

    this.signupForm.reset();
  }

  onAddHobbies(){
    this.spaceNeeded = true;
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  removeThisHobby(index: number){
    (<FormArray>this.signupForm.get('hobbies')).removeAt(index);
  }

  forbiddenNames(control: FormControl):{[s: string]: boolean} {
    if(this.forbiddenUserNames.indexOf(control.value) !== -1){
      return {'userNameIsForbidden': true};
    }
    else
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject)=> {
      setTimeout(()=>{
        if(control.value === 'ar@ar.com'){
          resolve({'emailIsInvalid': true});
        }else
        {
          resolve(null);
        }
      },2000);
    });
    return promise;
  }

}
