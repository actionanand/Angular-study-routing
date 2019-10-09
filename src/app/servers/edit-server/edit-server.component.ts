import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/guards/can-deact-guard.service';


@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  isSaved: boolean = false;

  constructor(private serversService: ServersService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.queryParams.subscribe(
      (queryParams: Params)=>{
        this.allowEdit = queryParams['allowEdit'] == '1' ? true:false;
    });

    this.route.params.subscribe(
      (params: Params)=>{
        id = +params['id'];
      });

    let id = +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.isSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{

    if(!this.allowEdit)
    {
      return true;
    }

    if((this.serverName != this.server.name || this.serverStatus != this.server.status)&&(!this.isSaved)){
      return confirm('Do you want to discard the changes?');
    }
    else
    {
      return true;
    }
  }

}
