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

  findById(id: any): Observable<Estabelecimento>{
    return this.http.get<Estabelecimento>(`${API_CONFIG.baseUrl}/estabelecimentos/${id}`)
  }

  findAll(): Observable<Estabelecimento[]> {
    return this.http.get<Estabelecimento[]>(`${API_CONFIG.baseUrl}/estabelecimentos`);
  }
  create(estabelecimento: Estabelecimento):Observable<Estabelecimento>{
    return this.http.post<Estabelecimento>(`${API_CONFIG.baseUrl}/estabelecimentos`, estabelecimento);
  }
  update(estabelecimento : Estabelecimento): Observable<Estabelecimento>{
    return this.http.put<Estabelecimento>(`${API_CONFIG.baseUrl}/estabelecimentos/${estabelecimento.id}`,estabelecimento);
  }
}
