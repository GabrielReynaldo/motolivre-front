import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Estabelecimento } from '../models/estabelecimento';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Estabelecimento[]> {
    return this.http.get<Estabelecimento[]>(`${API_CONFIG.baseUrl}/estabelecimentos`);
  }
}