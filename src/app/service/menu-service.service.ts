import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../model/article';


@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  public article: Article;
  private appUrl =  'http://localhost:8080/api/';


  constructor(private http: HttpClient) { }

  getMenu() {
    return this.http.get<Article>(this.appUrl + 'getarticle/1');
  }
}
