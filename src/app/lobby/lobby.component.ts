import { Component, OnInit } from '@angular/core';
import {GameService} from '../game-service.service';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  public code: string;
  constructor(private gameService: GameService) { }
  public players: Observable<any[]>;
  ngOnInit(): void {
    this.code = this.gameService.getCode();
    this.players = this.gameService.getPlayers();
  }

}
