import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class EpisodeService {
  private url: string = "https://rickandmortyapi.com/api/episode";
  constructor(private http: HttpClient) {}

  getEpisodes(page: number, name?: string) {
    // console.log("Page parametras");
    // console.log(page);

    let params = new HttpParams();

    params = params.append("page", page);

    if (name) {
      params = params.append("name", name);
    }

    let data = this.http.get(this.url, { params });
    return data;
  }
  getEpisode(id: string | null) {
    let data = this.http.get(this.url + "/" + id);

    return data;
  }
  getEpisodeByUrl(url: string) {
    let data = this.http.get(url);

    return data;
  }
}
