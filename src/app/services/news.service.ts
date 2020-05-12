import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  getDetailNews(ticker) {
    return this.http.get(environment.baseUrl + "/news/" + ticker);
  }
  getNewsRss() {
    return this.http.get(environment.baseUrl + "/newsDetail");
  }
}
