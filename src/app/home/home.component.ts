import { Component, OnInit } from "@angular/core";
import {
  timer,
  Observable,
  Subject,
  asapScheduler,
  pipe,
  of,
  from,
  interval,
  merge,
  fromEvent,
} from "rxjs";

import { map, filter, scan } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  disabled = false;
  isLoading = false;
  favoriteSeason: string;
  seasons: string[] = ["Winter", "Spring", "Summer", "Autumn"];
  constructor() {}

  ngOnInit() {
    this.isLoading = true;
    this.getCourses().subscribe((d) => (this.isLoading = false));
  }

  getCourses() {
    return timer(2000);
  }
}
