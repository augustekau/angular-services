import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  private url: string = "https://rickandmortyapi.com/api/location";
  constructor(private http: HttpClient) {}

  getLocations(page: number) {
    let params = new HttpParams();

    params = params.append("page", page);

    let data = this.http.get(this.url, { params });
    return data;
  }
  getLocation(id: string | null) {
    let data = this.http.get(this.url + "/" + id);

    return data;
  }
}
