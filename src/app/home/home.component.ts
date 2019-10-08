import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login:boolean;

  constructor(private router: Router, private authservice: AuthService){}
  ngOnInit(){
    this.login = this.authservice.loggedIn;
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
