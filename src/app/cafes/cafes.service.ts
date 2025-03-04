// 8. Binding servicio Http
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cafes } from './cafes';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CafesService {
  //9. Binding con enviroment ----> cafe.component.ts
  private apiUrl = environment.baseUrl + '202212_MISW4104_Grupo3.json';

  constructor(private http: HttpClient) { }

  getCafes(): Observable<Cafes[]> {
    return this.http.get<Cafes[]>(this.apiUrl);
  }
}
