import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';

export interface Blog {
  id?: number;
  title: string;
  author: string;
  date: string;
  description: string;
  image?: File | null;
  image_url?: string;
}

@Injectable({ providedIn: 'root' })
export class BlogService {
  
  private apiUrl = 'http.get('${environment.apiURL}/blogs');

  constructor(private http: HttpClient) {}

  list(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.api);
  }

  getBlogById(id: string | number): Observable<Blog> {
    return this.http.get<Blog>(`${this.api}/${id}`);
  }

  add(blog: Blog): Observable<Blog> {
    const fd = new FormData();
    Object.entries(blog).forEach(([k, v]) => {
      if (v !== undefined && v !== null) {
        if (v instanceof File) {
          fd.append(k, v, v.name);
        } else {
          fd.append(k, String(v));
        }
      }
    });
    return this.http.post<Blog>(this.api, fd);
  }

  update(id: number, blog: Blog): Observable<Blog> {
    const fd = new FormData();
    Object.entries(blog).forEach(([k, v]) => {
      if (v !== undefined && v !== null) {
        if (v instanceof File) {
          fd.append(k, v, v.name);
        } else {
          fd.append(k, String(v));
        }
      }
    });
    return this.http.put<Blog>(`${this.api}/${id}`, fd);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
