import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class EpisodeService {
  private url: string = "https://rickandmortyapi.com/api/episode";
  constructor(private http: HttpClient) {}

  getEpisodes(page: number) {
    // console.log("Page parametras");
    // console.log(page);

    let params = new HttpParams();

    params = params.append("page", page);

    let data = this.http.get(this.url, { params });
    return data;
  }
}
