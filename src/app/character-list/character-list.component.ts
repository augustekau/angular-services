import { Component, OnInit } from "@angular/core";
import { CharacterService } from "../character.service";

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  styleUrls: ["./character-list.component.scss"],
})
export class CharacterListComponent implements OnInit {
  public characters: any = [];
  public charactersInfo: any = {};

  constructor(private _characterService: CharacterService) {}

  ngOnInit(): void {
    this._characterService
      .getCharacters()
      // Subscribe funkcija naudojama dirbant su Observable tipo objektais (Angular httpClient visada grazina Observabile tipa)
      // data - kintamasis su grazintais duomenimis is musu uzklausos
      .subscribe((data: any) => {
        // Gautus duomenis priskiriame komponento kintamajam
        // Characters kintamajam, priskiriame duomenis is characterService getCharaters funkcijos

        this.characters = data.results;
        this.charactersInfo = data.info;
        console.log(data);
        /*
          Dokumentacija kokie duomenys grazinami:
          https://rickandmortyapi.com/documentation/#character-schema
          */
      });
  }
}
