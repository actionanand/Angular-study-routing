import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../guards/auth.service';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  login:boolean;
  homeSubscription: Subscription;

  constructor(private router: Router, private authservice: AuthService){}
  ngOnInit(){
    this.login = this.authservice.loggedIn;

  //  this.homeSubscription = interval(1000).subscribe({
  //    next: count =>{
  //       console.log(count);
  //     }
  //   });

    const customObservable = Observable.create(observer => {
      let count = 0;
      setInterval(()=> {
        observer.next(count);
        count++;
      },1000);
    });

    this.homeSubscription = customObservable.subscribe(data => {
      console.log(data);
    });

  }

  ngOnDestroy(){
    this.homeSubscription.unsubscribe();
  }

  onLoadServers(){
    this.router.navigate(['/servers']);
  }

  onLogin(){
    this.authservice.login();
    this.login = this.authservice.loggedIn;
  }

  onLogOut(){
    this.authservice.logout();
    this.login = this.authservice.loggedIn;
  }



}
