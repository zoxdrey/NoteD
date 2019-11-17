import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
export class ContentPageComponent implements OnInit{

  isEditState: boolean = false;
  clicks:number = 0;
  article: string =  "The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,"
  id: number;
  content: string;
  title: string = "Заголовок";
  date = new Date().toLocaleString();
  articleId;
  isArticleEdit:boolean;
  private subscription: Subscription;

  constructor(private articleservice: ArticleServiceService,
              private route: ActivatedRoute,) {
    this.subscription = route.params.subscribe(params=>
      this.getArticle(params['id']),
    );

  }

  getArticle(id:number) {
  }

  createArticle(title: string, content:string)
  {
  }

  ngOnInit() {
  }

  onChanged(increased:any){
    console.log(this.isEditState)
    increased==true?this.clicks++:this.clicks--;
    this.isEditState = !this.isEditState;
  }
}
