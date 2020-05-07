import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LobbyComponent } from './lobby/lobby.component';
import { GameComponent } from './game/game.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


const firebaseConfig = {
  apiKey: "AIzaSyDvLG3jcat-12YldkstrIEy8Va4Y2qF0do",
  authDomain: "word-game-508f9.firebaseapp.com",
  databaseURL: "https://word-game-508f9.firebaseio.com",
  projectId: "word-game-508f9",
  storageBucket: "word-game-508f9.appspot.com",
  messagingSenderId: "304878375355",
  appId: "1:304878375355:web:66a8469991ba0a1f2c749e",
  measurementId: "G-T91CN6GBGT"
};
@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    GameComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
