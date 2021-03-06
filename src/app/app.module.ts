import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './guards/auth.service';
import { GuardComponent } from './guards/guard-component.service';
import { CanDeactivateGuard } from './guards/can-deact-guard.service';
import { ResolveServer } from './guards/resolve-server.service';
import { TDFormComponent } from './forms/td-form/td-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    TDFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ServersService, AuthService, GuardComponent, CanDeactivateGuard,ResolveServer],
  bootstrap: [AppComponent]
})
export class AppModule { }
