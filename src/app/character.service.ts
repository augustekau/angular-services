import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  constructor(private http: HttpClient) {}
  //klaustukas reiskia kad sis parametras nera privalomas

  getCharacters(page?: number) {
    console.log("Page parametras");
    console.log(page);
    // Lokalus kintamasis, pasiekiamas tik sios funkcijos viduje

    // url kintamasis, nurodo i koki API endpoint'a krepsimes

    // Dokumentacija kokie duomenys grazinami:
    // https://rickandmortyapi.com/documentation/#character-schema
    let url: string = "";

    // Patikriname ar perduotas page parametras ir perduodame ji i uzklausos URL
    if (page) {
      // Neteisingas budas perduoti parametrus
      url = "https://rickandmortyapi.com/api/character?page=" + page;
    } else {
      url = "https://rickandmortyapi.com/api/character";
    }
    console.log(url);
    let data = this.http.get(url);
    return data;
  }
}
