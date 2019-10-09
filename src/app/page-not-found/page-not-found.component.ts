import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  errorMessage: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.errorMessage=this.route.snapshot.data['message'];

    this.route.data.subscribe(
      (data: Data)=>{
        this.errorMessage = data['message'];
      }
    );
  }

  onLoadHome(){
    this.router.navigate(['/']);
  }

}
