import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private httpClient: HttpClient) {

  }


  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:8080/api/servicos');
  }

  getAllIndisponibilidade(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:8080/api/servicos/orderDisp');
  }


  getByEstado(estado: String): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/api/servicos/${estado}`);
  }



}
