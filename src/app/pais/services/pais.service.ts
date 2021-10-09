import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<any> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<any>(url);
  }

  buscarCapital(termino: string): Observable<any> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<any>(url);
  }

  getPaisPorAlpha(termino: string): Observable<any> {
    const url = `${this.apiUrl}/alpha/${termino}`;
    return this.http.get<any>(url);
  }

  buscarRegion(termino: string): Observable<any> {
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<any>(url);
  }
}
