import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Historico} from "./historico.model";

@Injectable({
  providedIn: 'root'
})
export class HistoricosService {

  constructor(private httpClient: HttpClient) {

  }


  getHistoricoByDateInterval(dtInicial: string, dtFinal: string,): Observable <any[]> {

    const params = new HttpParams({
      fromObject: {
        "dtInicial": dtInicial,
        "dtFinal": dtFinal,
      }
    })


    return this.httpClient.get<any[]>(`http://localhost:8080/api/servicos/busca`,
      {params})
      .pipe(
        map((historicos:any[]) => historicos.map(hist => {

          let historico = new Historico();
          historico.data = hist.dataFinal;
          historico.statusServico = hist.statusServico;
          historico.autorizador = hist.servico.siglaEstado;
          return historico;

        }))
      );
  }

}
