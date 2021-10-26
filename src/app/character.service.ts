import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  constructor(private http: HttpClient) {}
  getCharacters() {
    let url = "https://rickandmortyapi.com/api/character";
    let data = this.http.get(url);
    return data;
  }
}
