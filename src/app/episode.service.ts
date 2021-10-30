import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class EpisodeService {
  private url: string = "https://rickandmortyapi.com/api/episode";
  constructor(private http: HttpClient) {}

  getEpisodes() {
    // console.log("Page parametras");
    // console.log(page);

    let params = new HttpParams();

    let data = this.http.get(this.url);
    return data;
  }
}
