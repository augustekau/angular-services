import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CharacterDetailsComponent } from "./character-details/character-details.component";
import { CharacterListComponent } from "./character-list/character-list.component";
import { EpisodeDetailsComponent } from "./episode-details/episode-details.component";
import { EpisodeListComponent } from "./episode-list/episode-list.component";
import { LocationDetailsComponent } from "./location-details/location-details.component";
import { LocationListComponent } from "./location-list/location-list.component";

const routes: Routes = [
  { path: "", component: CharacterListComponent },
  { path: "character/:id", component: CharacterDetailsComponent },
  { path: "episodes", component: EpisodeListComponent },
  { path: "episodes/:id", component: EpisodeDetailsComponent },
  { path: "locations", component: LocationListComponent },
  { path: "locations/:id", component: LocationDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
