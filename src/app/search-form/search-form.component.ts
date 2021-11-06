import { EventEmitter, Output, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"],
})
export class SearchFormComponent implements OnInit {
  // Kintamasis i kuri issaugosime input laukelyje ivesta teksta
  public searchString: string = "";

  @Output() onFormSubmit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  searchFormSubmit() {
    // Istransliuoti/pranesti apie ivykusi onFormSubmit event'a kitiems komponentams
    this.onFormSubmit.emit(this.searchString);
    // alert("You are searching for" + this.searchString);
  }
}
