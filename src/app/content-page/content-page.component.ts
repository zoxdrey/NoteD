import {Component, OnInit} from '@angular/core';
import {ArticleServiceService} from '../service/article-service.service';
import {User} from "../model/user";
import {Article} from "../model/article";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from 'rxjs';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {


  article: Article;
  id: number;
  content: string;
  title: string = "Заголовок";
  date = new Date().toLocaleString();
  articleId;
  private subscription: Subscription;

  constructor(private articleservice: ArticleServiceService,
              private route: ActivatedRoute,) {
    this.subscription = route.params.subscribe(params=>
      this.getArticle(params['id']),
    );

  }

  getArticle(id:number) {
    this.articleservice.getArticle(id).subscribe((data: Article) => {
      this.article = data;
    });
  }

  createArticle(title: NgModel, article_content:NgModel)
  {
    this.article = new Article(title.name, article_content.name)
    this.articleservice.createArticle(this.article).subscribe((data: Article) => {
      this.article = data;
    });
    console.log(title.name + ":::" + article_content.name);
  }

  ngOnInit() {

    console.log(this.id);
  }
}
