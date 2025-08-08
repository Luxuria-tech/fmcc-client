import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';



export interface Blog {
  id?: number;
  title: string;
  author: string;
  date: string;
  description: string;
  image?: File | null;
  image_url?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly apiUrl = `${environment.apiUrl}/blogs`;

  constructor(private http: HttpClient) {}

  list(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl);
  }

  getBlogById(id: string | number): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/${id}`);
  }

  add(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.apiUrl, this.prepareFormData(blog));
  }

  update(id: number, blog: Blog): Observable<Blog> {
    return this.http.put<Blog>(`${this.apiUrl}/${id}`, this.prepareFormData(blog));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /** Utility to prepare form data for add/update */
  private prepareFormData(blog: Blog): FormData {
    const fd = new FormData();
    Object.entries(blog).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (value instanceof File) {
          fd.append(key, value, value.name);
        } else {
          fd.append(key, String(value));
        }
      }
    });
    return fd;
  }
}
