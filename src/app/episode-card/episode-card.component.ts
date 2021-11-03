import { Component, OnInit, Input } from "@angular/core";
import { Episode } from "../episode";
import { EpisodeService } from "../episode.service";

@Component({
  selector: "app-episode-card",
  templateUrl: "./episode-card.component.html",
  styleUrls: ["./episode-card.component.scss"],
})
export class EpisodeCardComponent implements OnInit {
  @Input() episodeUrl?: string;
  @Input() episode?: Episode;
  constructor(private _episodeService: EpisodeService) {}

  ngOnInit(): void {
    if (this.episodeUrl) {
      //  undefined
      this._episodeService
        .getEpisodeByUrl(this.episodeUrl)
        .subscribe((data: any) => {
          this.episode = data;
          // console.log(this.episode);
        });
    }
  }
}
