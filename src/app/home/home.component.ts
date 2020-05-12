import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from "@angular/forms";

import { ErrorStateMatcher } from "@angular/material/core";
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

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

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

  tabData = [
    { label: "tab1", content: "This is fake content" },
    { label: "tab2", content: "This is fake content" },
    { label: "tab3", content: "This is fake content" },
  ];

  colors = [
    { id: 1, name: "Red" },
    { id: 2, name: "Yellow" },
    { id: 1, name: "Green" },
  ];

  ngOnInit() {
    this.isLoading = true;
    this.getCourses().subscribe((d) => (this.isLoading = false));
  }

  getCourses() {
    return timer(2000);
  }

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
}
