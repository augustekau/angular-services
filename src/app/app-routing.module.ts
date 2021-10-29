import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CharacterDetailsComponent } from "./character-details/character-details.component";
import { CharacterListComponent } from "./character-list/character-list.component";

const routes: Routes = [
  { path: "", component: CharacterListComponent },
  { path: "character/:id", component: CharacterDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
