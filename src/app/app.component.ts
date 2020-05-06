import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
export interface GameSession { players: string[] }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-game';
  private gameSessions: AngularFirestoreCollection<any>;
  private gameSession: AngularFirestoreDocument<GameSession>;
  private gameSessionPlayers: AngularFirestoreCollection<any>;
  game: Observable<any>;
  public code: string;
  private codeLength: number = 4;
  name = new FormControl('');
  codeInput = new FormControl('');
  constructor(private afs: AngularFirestore) {
    this.gameSessions = afs.collection<any>('game-sessions');
    this.game = this.gameSessions.valueChanges();
  }

  createGame() {
    this.code = "";
    for (var i = 0; i < this.codeLength; i++) {
      this.code = this.code + String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65));
    }
    console.log(this.name.value);
    this.gameSessions.doc(this.code).set({ started: false });
    this.gameSession = this.afs.doc('game-sessions/' + this.code);
    this.addPlayer();
  }

  joinGame() {
    this.gameSession = this.afs.doc('game-sessions/' + this.codeInput.value.toString());
    this.addPlayer();
  }

  addPlayer() {
    var playerRef: AngularFirestoreDocument<any> = this.gameSession.collection('players').doc(this.name.value);
    playerRef.set({ turn: false });
    this.gameSessionPlayers = this.gameSession.collection('players');
  }
}
