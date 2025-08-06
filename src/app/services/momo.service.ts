import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MomoPayload {
  fullName: string;
  momoNumber: string;
  amount: number;
}

@Injectable({ providedIn: 'root' })
export class MomoService {
  private api = 'http://localhost:5000/api/payments';

  constructor(private http: HttpClient) {}

  requestMomo(data: MomoPayload): Observable<{ message: string; reference: string }> {
    return this.http.post<{ message: string; reference: string }>(this.api, data);
  }
}
