import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  items: MenuItem[];
  constructor(){}
  ngOnInit() {
    this.items = [{
      label: 'File',
      items: [
        {label: 'New', icon: 'fa fa-plus', url: 'http://www.primefaces.org/primeng'},
        {label: 'Open', icon: 'fa fa-download', routerLink: ['/pagename']},
        {label: 'Recent Files', icon: 'fa fa-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}},
      ]
    },
      {
        label: 'File',
        items: [
          {label: 'New', icon: 'fa fa-plus', url: 'http://www.primefaces.org/primeng'},
          {label: 'Open', icon: 'fa fa-download', routerLink: ['/pagename']},
          {label: 'Recent Files', icon: 'fa fa-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}},
        ]
      }]
  }

  getArticles() {

  }
}
