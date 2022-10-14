import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from './team';

const BASE_URL = 'https://fvl-api.onrender.com/teams';
@Injectable({
  providedIn: 'root',
})
export class TeamDataService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Team[]> {
    return this.http.get<Team[]>(BASE_URL);
  }
}
