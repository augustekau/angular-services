import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Episode } from "../episode";
import { EpisodeService } from "../episode.service";

@Component({
  selector: "app-episode-details",
  templateUrl: "./episode-details.component.html",
  styleUrls: ["./episode-details.component.scss"],
})
export class EpisodeDetailsComponent implements OnInit {
  private id: string | null;
  public episode?: Episode;
  constructor(
    private route: ActivatedRoute,
    private _episodeService: EpisodeService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this._episodeService.getEpisode(this.id).subscribe((data: any) => {
      this.episode = data;
    });
  }
}
