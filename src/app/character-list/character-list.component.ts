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

  public page: number = 1;

  public searchOptions = {
    name: "",
  };

  public errors: any;

  constructor(private _characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  filterCharacters(name: string) {
    // alert(
    //   "Character List Komponentas Suzinojo apie onForm Submit Event'a is SearchForm komponento "
    // );
    this.searchOptions.name = name;
    this.getCharacters();
  }

  getCharacters(name?: string) {
    this._characterService
      .getCharacters(this.page, this.searchOptions.name)
      // Subscribe funkcija naudojama dirbant su Observable tipo objektais (Angular httpClient visada grazina Observabile tipa)
      // data - kintamasis su grazintais duomenimis is musu uzklausos
      .subscribe(
        (data: any) => {
          // Gautus duomenis priskiriame komponento kintamajam
          // Characters kintamajam, priskiriame duomenis is characterService getCharaters funkcijos

          this.characters = data.results;
          this.charactersInfo = data.info;
          console.log(data);
          /*
          Dokumentacija kokie duomenys grazinami:
          https://rickandmortyapi.com/documentation/#character-schema
          */
        },
        (error: any) => {
          if (error.status == "404") {
            // alert("nothing found");
            // console.log(error);

            // Priskiriame error objekta savo komponento errors masyvui,
            // kad galetume atvaizduoti klaidos pranesima template dalyje
            this.errors = error;

            // Nustatome characters masyva i tuscia masyva, nes nebuvo rasta jokiu veikeju
            this.characters = [];
            // Taip pat pakeiciame charactersInfo objekto reiksmes pagal klaidos koda
            this.charactersInfo.count = 0;
            // this.charactersInfo.pages = 0;
          } else {
            alert("Something went wrong");
          }
        }
      );
  }

  nextPage() {
    if (this.page < this.charactersInfo.pages) {
      // alert("works");
      this.page++;
    }

    console.log("Next page:");
    console.log(this.page);

    this.getCharacters();
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
    }
    this.getCharacters();
  }

  // previousPage() {
  //   // alert("works");
  //   if (this.page > 1) {
  //     this.page--;
  //     this.getCharacters();
  //   } else {
  //     return;
  //   }
  // }
}
