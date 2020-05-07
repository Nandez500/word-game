import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LobbyComponent} from './lobby/lobby.component';
import {AppComponent} from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';

const routes: Routes = [
  { path: '',   redirectTo: '/main-menu', pathMatch: 'full' },
  {path: 'main-menu', component: MainMenuComponent},
  {path: 'lobby', component: LobbyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
