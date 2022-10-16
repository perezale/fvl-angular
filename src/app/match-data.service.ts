import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from './match';
import { environment } from 'src/environments/environment';

const endpoint = `${environment.apiUrl}/matchs`;

@Injectable({
  providedIn: 'root',
})
export class MatchDataService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Match[]> {
    return this.http.get<Match[]>(`${endpoint}?populate=true`);
  }
}
