import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { CharacterService } from "../character.service";
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

  public characters: [] = [];

  private charactersIds: any = [];

  constructor(
    private route: ActivatedRoute,
    private _episodeService: EpisodeService,
    private _characterService: CharacterService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this._episodeService.getEpisode(this.id).subscribe((data: any) => {
      this.episode = data;
      this.getCharactersofEpisode();
    });
  }
  getCharactersofEpisode() {
    if (this.episode) {
      for (let i = 0; i < this.episode.characters.length; i++) {
        console.log(this.episode);
        let temp = this.episode.characters[i].replace(
          "https://rickandmortyapi.com/api/character/",
          ""
        );
        this.charactersIds.push(temp);
      }
      this._characterService
        .getCharacter(this.charactersIds)
        .subscribe((data: any) => {
          this.characters = data;
        });
    }
  }
}
