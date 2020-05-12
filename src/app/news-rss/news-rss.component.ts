import { NewsService } from "./../services/news.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-news-rss",
  templateUrl: "./news-rss.component.html",
  styleUrls: ["./news-rss.component.css"],
})
export class NewsRssComponent implements OnInit {
  constructor(private newsService: NewsService) {}
  newsData = {};
  tabData = [
    { label: "tab1", content: "This is fake content" },
    { label: "tab2", content: "This is fake content" },
    { label: "tab3", content: "This is fake content" },
  ];

  ngOnInit() {
    this.newsService.getNewsRss().subscribe((d) => (this.newsData = d));
  }
}
