import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  private url: string = "https://rickandmortyapi.com/api/character";
  constructor(private http: HttpClient) {}
  //klaustukas reiskia kad sis parametras nera privalomas

  getCharacters(page: number) {
    console.log("Page parametras");
    console.log(page);
    // Lokalus kintamasis, pasiekiamas tik sios funkcijos viduje

    // url kintamasis, nurodo i koki API endpoint'a krepsimes

    // Dokumentacija kokie duomenys grazinami:
    // https://rickandmortyapi.com/documentation/#character-schema
    // let url: string = "https://rickandmortyapi.com/api/character";

    // // Patikriname ar perduotas page parametras ir perduodame ji i uzklausos URL
    // if (page) {
    //   // Neteisingas budas perduoti parametrus
    //   url = "https://rickandmortyapi.com/api/character?page=" + page;
    // } else {
    //   url = "https://rickandmortyapi.com/api/character";
    // }

    let params = new HttpParams();

    params = params.append("page", page);
    // console.log(url);
    let data = this.http.get(this.url, { params });
    return data;
  }
  getCharacter(id: string | null) {
    let data = this.http.get(this.url + "/" + id);

    return data;
  }
}
