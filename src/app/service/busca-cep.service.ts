import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  constructor(private http: HttpClient) { }

  getCep(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

}
