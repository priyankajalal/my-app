import { Component, OnInit } from "@angular/core";
import { NewsService } from "./../services/news.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
})
export class NewsComponent implements OnInit {
  news = [];
  ticker = "aapl";
  displayedColumns: string[] = ["ticker", "summary", "detail"];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService
      .getDetailNews(this.ticker)
      .subscribe((d) => this.setNews(d));
  }

  setNews(d) {
    this.news = d;
  }
}
