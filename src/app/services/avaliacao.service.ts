import { Injectable } from '@angular/core';
import { Avaliacao } from '../models/avaliacao';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Avaliacao[]> {
    return this.http.get<Avaliacao[]>(`${API_CONFIG.baseUrl}/avaliacao`);
  }

  create(avaliacao: Avaliacao): Observable<Avaliacao> {
    return this.http.post<Avaliacao>(`${API_CONFIG.baseUrl}/avaliacao`, avaliacao);
  }
}
