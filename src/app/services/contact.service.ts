import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


export interface Contact {
  id?: number;
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private api = `${environment.apiUrl}/contacts`;


  constructor(private http: HttpClient) {}

  list(): Observable<Contact[]> { return this.http.get<Contact[]>(this.api); }
  add(contact: Contact): Observable<Contact> { return this.http.post<Contact>(this.api, contact); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.api}/${id}`); }
}
