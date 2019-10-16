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
  genders = ['male','female','not interested'];
  isSubmited: boolean = false;

  user = {
    name: '',
    email: '',
    gender: '',
    qtn: '',
    answer: ''
  };

//   interests = ['cooking','singing','drawing','sleeping','chatting','surfing in net',
// 'gaming','online games','coding','reading','writing','meditation','talking','others'];

  suggestUserName() {
    const suggestedName = 'New_user';

    // this.signUpForm.setValue({
    //   userData: {
    //     username1: suggestedName,
    //     email1: ''
    //   },
    //   secret1: 'person',
    //   qtnAnswer: 'Anand',
    //   radio: 'female'
    // });

    this.signUpForm.form.patchValue({
      userData:{
        username1: suggestedName
      }
    });

  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    this.isSubmited = true;
    console.log(this.signUpForm);
    this.user.name = this.signUpForm.value.userData.username1;
    this.user.email = this.signUpForm.value.userData.email1;
    this.user.gender = this.signUpForm.value.radio;
    this.user.qtn = this.signUpForm.value.secret1;
    this.user.answer = this.signUpForm.value.qtnAnswer;
    this.signUpForm.reset();
  }
}
