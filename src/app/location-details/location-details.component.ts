import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { LocationService } from "../location.service";

@Component({
  selector: "app-location-details",
  templateUrl: "./location-details.component.html",
  styleUrls: ["./location-details.component.scss"],
})
export class LocationDetailsComponent implements OnInit {
  private id: string | null;
  public location: any;
  constructor(
    private route: ActivatedRoute,
    private _locationService: LocationService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this._locationService.getLocation(this.id).subscribe((data) => {
      this.location = data;
    });
  }
}
