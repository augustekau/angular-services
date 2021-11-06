import { Component, OnInit } from "@angular/core";
import { LocationService } from "../location.service";

@Component({
  selector: "app-location-list",
  templateUrl: "./location-list.component.html",
  styleUrls: ["./location-list.component.scss"],
})
export class LocationListComponent implements OnInit {
  public locations: any = [];
  public locationsInfo: any = {};

  public page: number = 1;

  public searchOptions = {
    name: "",
  };

  constructor(private _locationService: LocationService) {}

  ngOnInit(): void {
    this.getLocations();
  }

  filterLocations(name: string) {
    // alert(
    //   "parent component suzinojo apie on form submit eventa is child componento"
    // );
    this.searchOptions.name = name;
    this.getLocations();
  }
  getLocations(name?: string) {
    this._locationService
      .getLocations(this.page, this.searchOptions.name)
      // Subscribe funkcija naudojama dirbant su Observable tipo objektais (Angular httpClient visada grazina Observabile tipa)
      // data - kintamasis su grazintais duomenimis is musu uzklausos
      .subscribe((data: any) => {
        // Gautus duomenis priskiriame komponento kintamajam
        // Characters kintamajam, priskiriame duomenis is characterService getCharaters funkcijos

        this.locations = data.results;
        this.locationsInfo = data.info;
        console.log(data);
      });
  }
  nextPage() {
    if (this.page < this.locationsInfo.pages) {
      this.page++;
    }
    // console.log("Next page:");
    // console.log(this.page);
    this.getLocations();
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
    }
    this.getLocations();
  }
}
