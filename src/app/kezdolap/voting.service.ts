import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  private apiUrl = 'http://localhost:8000/api/voting'; // Backend URL

  constructor(private http: HttpClient) { }

  submitVote(category: string, plate: string): Observable<any> {
    const body = { car_code: plate }; // A backend car_code kulcsot vár
    return this.http.post(`${this.apiUrl}/${category}`, body);
  }
}
