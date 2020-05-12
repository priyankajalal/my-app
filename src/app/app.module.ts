import { NewsService } from "./services/news.service";
import { MaterialModule } from "./modules/material/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Route, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { NewsComponent } from "./news/news.component";
import { NewsRssComponent } from "./news-rss/news-rss.component";
import { NewsRssBootstrapComponent } from "./news-rss-bootstrap/news-rss-bootstrap.component";

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "news", component: NewsRssBootstrapComponent },
  { path: "portfolio", component: PortfolioComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    NewsComponent,
    NewsRssComponent,
    NewsRssBootstrapComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [NewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
