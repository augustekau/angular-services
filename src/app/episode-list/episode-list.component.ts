import { Component, OnInit } from "@angular/core";
import { EpisodeService } from "../episode.service";

@Component({
  selector: "app-episode-list",
  templateUrl: "./episode-list.component.html",
  styleUrls: ["./episode-list.component.scss"],
})
export class EpisodeListComponent implements OnInit {
  public episodes: any = [];
  public episodesInfo: any = {};

  constructor(private _episodeService: EpisodeService) {}

  ngOnInit(): void {
    this.getEpisodes();
  }
  getEpisodes() {
    this._episodeService
      .getEpisodes()
      // Subscribe funkcija naudojama dirbant su Observable tipo objektais (Angular httpClient visada grazina Observabile tipa)
      // data - kintamasis su grazintais duomenimis is musu uzklausos
      .subscribe((data: any) => {
        // Gautus duomenis priskiriame komponento kintamajam
        // Characters kintamajam, priskiriame duomenis is characterService getCharaters funkcijos

        this.episodes = data.results;
        this.episodesInfo = data.info;
        console.log(data);
      });
  }
}
