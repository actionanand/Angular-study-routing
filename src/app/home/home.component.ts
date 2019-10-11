import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../guards/auth.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  login:boolean;
  homeSubscription: Subscription;

  constructor(private router: Router, private authservice: AuthService, private route: ActivatedRoute){}
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

        if(count === 5){
          observer.complete();
        }
        if(count > 6)
        {
          observer.error(new Error('count is greater than 3'));
        }
        count++;
      },1000);
    });

    this.homeSubscription = customObservable.subscribe(data => {
      console.log(data);
    },error => {
      console.log(error);
      alert(error.message);
    }, ()=>{
      console.log('Observer is completed');
      alert('Observer is completed');
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

  onTdClick(){
    this.router.navigate(['/Template-Driven-Form'], {relativeTo: this.route});
  }

  onReactiveClick(){
    this.router.navigate(['/Reactive-Form'], {relativeTo: this.route});
  }

}
