import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from './match';
import { environment } from 'src/environments/environment';
import { NewMatchDto } from './add-match/match.dto';

const endpoint = `${environment.apiUrl}/matchs`;

@Injectable({
  providedIn: 'root',
})
export class MatchDataService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Match[]> {
    return this.http.get<Match[]>(`${endpoint}?populate=true`);
  }

  getById(id: number): Observable<Match> {
    return this.http.get<Match>(`${endpoint}/${id}`);
  }

  addMatch(data: NewMatchDto): Observable<Match> {
    return this.http.post<Match>(endpoint, data);
  }

  updateMatch(data: NewMatchDto): Observable<Match> {
    return this.http.put<Match>(`${endpoint}/${data.id}`, data);
  }

  deleteMatch(id: number): Observable<any> {
    return this.http.delete(`${endpoint}/${id}`);
  }
}
