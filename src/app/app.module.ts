import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { ContentPageComponent } from './content-page/content-page.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatExpansionModule} from '@angular/material/expansion';
import { ToolBarComponent } from './content-page/tool-bar/tool-bar.component';
import {
  InputTextareaModule,
  PanelMenuModule,
  PanelModule,
  ScrollPanelModule,
  SplitButtonModule,
  ToggleButtonModule
} from "primeng/primeng";


const appRoutes: Routes = [
  { path: 'about', component: ContentPageComponent},
  { path: 'article/:id',  component: ContentPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ContentPageComponent,
    MainMenuComponent,
    ToolBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CdkTreeModule,
    MatExpansionModule,
    ToggleButtonModule,
    PanelMenuModule,
    PanelModule,
    SplitButtonModule,
    ScrollPanelModule,
    InputTextareaModule,
  ],
  providers: [CdkTreeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
