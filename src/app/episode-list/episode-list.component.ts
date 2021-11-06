import { Component, OnInit } from "@angular/core";
import { Episode } from "../episode";
import { EpisodeService } from "../episode.service";

@Component({
  selector: "app-episode-list",
  templateUrl: "./episode-list.component.html",
  styleUrls: ["./episode-list.component.scss"],
})
export class EpisodeListComponent implements OnInit {
  public episodes?: Episode[];
  public episodesInfo: any = {};

  public page: number = 1;

  public searchOptions = {
    name: "",
  };

  constructor(private _episodeService: EpisodeService) {}

  ngOnInit(): void {
    this.getEpisodes();
  }
  filterEpisodes(name: string) {
    // alert(
    //   "parent component suzinojo apie on form submit eventa is child componento"
    // );
    this.searchOptions.name = name;
    this.getEpisodes();
  }
  getEpisodes(name?: string) {
    this._episodeService
      .getEpisodes(this.page, this.searchOptions.name)
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
  nextPage() {
    if (this.page < this.episodesInfo.pages) {
      this.page++;
    }
    // console.log("Next page:");
    // console.log(this.page);
    this.getEpisodes();
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
    }
    this.getEpisodes();
  }
}
