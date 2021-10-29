import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { CharacterService } from "../character.service";

@Component({
  selector: "app-character-details",
  templateUrl: "./character-details.component.html",
  styleUrls: ["./character-details.component.scss"],
})
export class CharacterDetailsComponent implements OnInit {
  private id: string | null;
  public character: any;
  constructor(
    private route: ActivatedRoute,
    private _characterService: CharacterService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this._characterService.getCharacter(this.id).subscribe((data) => {
      this.character = data;
    });
  }
}
