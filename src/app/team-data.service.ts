import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from './team';
import { environment } from 'src/environments/environment';

const endpoint = `${environment.apiUrl}/teams`;
@Injectable({
  providedIn: 'root',
})
export class TeamDataService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Team[]> {
    return this.http.get<Team[]>(endpoint);
  }
}
