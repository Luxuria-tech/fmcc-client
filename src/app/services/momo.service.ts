import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';



export interface MomoPayload {
  fullName: string;
  momoNumber: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class MomoService {
  // Corrected with backticks and single endpoint definition
  private apiUrl = `${environment.apiUrl}/payments`;

  constructor(private http: HttpClient) {}

  // For requesting Momo payment
  requestMomo(data: MomoPayload): Observable<{ message: string; reference: string }> {
    return this.http.post<{ message: string; reference: string }>(
      this.apiUrl,
      data
    );
  }

  // Example: Fetch payment logs or data
  getPayments(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
