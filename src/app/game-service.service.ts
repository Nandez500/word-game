import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export interface GameSession { players: string[] }

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public code: string;
  private gameSessions: AngularFirestoreCollection<any>;
  private gameSession: AngularFirestoreDocument<GameSession>;
  private gameSessionPlayers: AngularFirestoreCollection<any>;
  public game: Observable<any>;
  constructor(private afs: AngularFirestore,) {
    this.gameSessions = afs.collection<any>('game-sessions');
    this.game = this.gameSessions.valueChanges();
  }
  setCode(c: string){
    this.code = c;
  }
  getCode(){
    return this.code;
  }
  setSession(code: string){
    this.gameSession = this.afs.doc('game-sessions/' + code.toString());
  }
  createSession(code: string){
    this.gameSessions.doc(code).set({ started: false });
    this.setSession(code);
  }
  addPlayer(name: string) {
    var playerRef: AngularFirestoreDocument<any> = this.gameSession.collection('players').doc(name);
    playerRef.set({name: name, turn: false });
    this.gameSessionPlayers = this.gameSession.collection('players');
  }
  getPlayers(){
    return this.gameSession.collection('players').valueChanges();
  }
}
