import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheorieService {

  constructor(private http: HttpClient) { }

  GetTheories(imdbId: string, writer: string) {
    return this.http.get<ITheory[]>(`http://localhost:5000/api/v1/theories?imdb=${imdbId}&writer=${writer}`);
  }

  CreateTheorie(newTheorie: ITheory) {
    return this.http.post<ITheory>(`http://localhost:5000/api/v1/theories`, newTheorie, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}

export interface ITheory {
  imdbID: string;
  writer: string;
  title: string;
  description: string;
}