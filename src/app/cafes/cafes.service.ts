// 8. Binding servicio Http
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cafes } from './cafes';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  //9. Binding con enviroment ----> course.component.ts
  private apiUrl = environment.baseUrl + 'cafes.json';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Cafes[]> {
    return this.http.get<Cafes[]>(this.apiUrl);
  }
}
