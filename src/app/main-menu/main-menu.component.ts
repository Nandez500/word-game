import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';
import { GameService } from '../game-service.service';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {

  title = 'word-game';
 
  public code: string;
  private codeLength: number = 4;
  name = new FormControl('');
  codeInput = new FormControl('');
  constructor( private gameService: GameService) {
    
  }

  createGame() {
    this.code = "";
    for (var i = 0; i < this.codeLength; i++) {
      this.code = this.code + String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65));
    }
    console.log(this.name.value);
    this.gameService.createSession(this.code);
    this.gameService.addPlayer(this.name.value);
    this.gameService.setCode(this.code);
  }

  joinGame() {
    this.gameService.setSession(this.codeInput.value.toString().toUpperCase());
    this.gameService.addPlayer(this.name.value);
    this.gameService.setCode(this.codeInput.value.toString());
  }

}
