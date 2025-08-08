import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod.ts';

export interface MomoPayload {
  fullName: string;
  momoNumber: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class MomoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // For requesting Momo payment
  requestMomo(data: MomoPayload): Observable<{ message: string; reference: string }> {
    return this.http.post<{ message: string; reference: string }>(
      `${this.apiUrl}/payments`,
      data
    );
  }

  // Example: If you want to fetch payment logs or data
  getPayments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/payments`);
  }
}
