import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';





export interface Event {
  id?: number;
  title: string;
  date: string;       
  description: string;
  location?: string; 
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private api = `${environment.apiUrl}/events`;


  constructor(private http: HttpClient) {}

  list(): Observable<Event[]> {
    return this.http.get<Event[]>(this.api);
  }

  add(event: Event): Observable<Event> {
    return this.http.post<Event>(this.api, event);
  }

  update(id: number, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.api}/${id}`, event);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
