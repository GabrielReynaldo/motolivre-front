import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Motoboy } from '../models/motoboy';

@Injectable({
  providedIn: 'root'
})
export class MotoboyService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Motoboy>{
    return this.http.get<Motoboy>(`${API_CONFIG.baseUrl}/motoboys/${id}`)
  }

  findAll(): Observable<Motoboy[]> {
    return this.http.get<Motoboy[]>(`${API_CONFIG.baseUrl}/motoboys`);
  }
  create(motoboy: Motoboy):Observable<Motoboy>{
    return this.http.post<Motoboy>(`${API_CONFIG.baseUrl}/motoboys`, motoboy);
  }
  update(motoboy : Motoboy): Observable<Motoboy>{
    return this.http.put<Motoboy   >(`${API_CONFIG.baseUrl}/motoboys/${motoboy.id}`,motoboy);
  }
  delete(id: any): Observable<Motoboy> {
    return this.http.delete<Motoboy>(`${API_CONFIG.baseUrl}/motoboys/${id}`);
  }
}
