import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { GuardComponent } from "./guards/guard-component.service";
import { CanDeactivateGuard } from "./guards/can-deact-guard.service";

const appRoot: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]},
    {path: 'servers',canActivateChild: [GuardComponent], component: ServersComponent, children:[
      {path: ':id', component: ServerComponent},
      {path: ':id/edit',canDeactivate:[CanDeactivateGuard], component: EditServerComponent}
    ]},
    {path: 'no-water-here', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/no-water-here'}
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoot)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}