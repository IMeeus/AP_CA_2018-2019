import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AccordionModule } from 'primeng/accordion';
import { InputTextareaModule } from 'primeng/inputtextarea'; 
import { PanelModule } from 'primeng/panel';

import { OmdbService } from './omdb.service';
import { MoviePageService } from './movie-page/movie-page.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieListComponent } from './movie-page/movie-search/movie-search.component';
import { MovieCardComponent } from './movie-page/movie-search/movie-card/movie-card.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { TheoriePageComponent } from './theorie-page/theorie-page.component';
import { MovieQueryComponent } from './movie-page/movie-query/movie-query.component';
import { MoviePagerComponent } from './movie-page/movie-pager/movie-pager.component';
import { MoviePageHeaderComponent } from './movie-page/movie-page-header/movie-page-header.component';
import { TheoriePageHeaderComponent } from './theorie-page/theorie-page-header/theorie-page-header.component';
import { TheoriePageResultsComponent } from './theorie-page/theorie-page-results/theorie-page-results.component';
import { TheoriePageQueryComponent } from './theorie-page/theorie-page-query/theorie-page-query.component';
import { TheorieCreatorComponent } from './theorie-page/theorie-creator/theorie-creator.component';
import { AuthGuard } from './auth.guard';
import { TheoriePageService } from './theorie-page/theorie-page.service';
import { TheorieService } from './theorie.service';

var config = {
  apiKey: "AIzaSyB1Zv2y-vW1BurC8ESCGXtkyG6c28VkzlM",
  authDomain: "apmovieapi-242215.firebaseapp.com",
  databaseURL: "https://apmovieapi-242215.firebaseio.com",
  projectId: "apmovieapi-242215",
  storageBucket: "apmovieapi-242215.appspot.com",
  messagingSenderId: "846622984300",
  appId: "1:846622984300:web:334692883ffba22e"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    MovieListComponent,
    MovieCardComponent,
    MoviePageComponent,
    LoginComponent,
    TheoriePageComponent,
    MovieQueryComponent,
    MoviePagerComponent,
    MoviePageHeaderComponent,
    TheoriePageHeaderComponent,
    TheoriePageResultsComponent,
    TheoriePageQueryComponent,
    TheorieCreatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'movies', component: MoviePageComponent, canActivate: [AuthGuard]},
      {path: 'theories', component: TheoriePageComponent, canActivate: [AuthGuard]},
      {path: '', redirectTo: 'login', pathMatch: 'full'}
    ]),
    ButtonModule,
    ToolbarModule,
    TableModule,
    InputTextModule,
    CardModule,
    RadioButtonModule,
    AccordionModule,
    InputTextareaModule,
    PanelModule
  ],
  providers: [
    OmdbService,
    MoviePageService,
    TheorieService,
    TheoriePageService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
