import { Component, OnInit } from '@angular/core';
import {Article} from "../model/article";
import {ArticleServiceService} from "../service/article-service.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  articles: Article[];
  constructor(private articleservice: ArticleServiceService,) { }
  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleservice.getArticles().subscribe((data: Article[]) => {
      this.articles = data;
    });
  }
}
