import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  public characters: any = [];
  constructor(private _characterService: CharacterService) {}

  ngOnInit(): void {
    this.characters = this._characterService.getCharacters();
  }
}
