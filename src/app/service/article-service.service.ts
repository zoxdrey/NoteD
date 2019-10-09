import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../model/article';


@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  public article: Article;
  private appUrl =  'http://localhost:8080/api/';
  private body: {};


  constructor(private http: HttpClient) { }

  getArticle(id:number) {
    return this.http.get<Article>(this.appUrl + 'getarticle/'+id);
  }


  getArticles() {
    return this.http.get<Article[]>(this.appUrl + 'getarticles');
  }

  createArticle(article : Article)
  {
    return this.http.post(this.appUrl + 'createarticle', article);
  }
}
