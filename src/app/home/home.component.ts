import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../guards/auth.service';
import { interval, Subscription } from 'rxjs';

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

   this.homeSubscription = interval(1000).subscribe({
     next: count =>{
        console.log(count);
      }
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
