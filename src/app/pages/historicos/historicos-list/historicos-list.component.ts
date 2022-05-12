import { Component, OnInit } from '@angular/core';
import {HistoricosService} from "../shared/historicos.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Historico} from "../shared/historico.model";

@Component({
  selector: 'app-historicos-list',
  templateUrl: './historicos-list.component.html',
  styleUrls: ['./historicos-list.component.scss']
})
export class HistoricosListComponent implements OnInit {

  historicos: Historico[] = [];


  constructor(private historicoService: HistoricosService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {

    this.route.params.subscribe((params:Params ) => {

      let dataIn = params['dtInicio'];
      let dataFim = params['dtFim'];


      console.log(dataIn);
      console.log(dataFim);

      if(dataIn === undefined || dataFim === undefined) {

        this.router.navigate(["servicos"]);

      } else {
        this.historicoService.getHistoricoByDateInterval(dataIn,
          dataFim).subscribe(data => {
          this.historicos = data;
        })
      }

    })



  }

  corStatus(servico: any): String {

    if (servico.statusServico === "VERDE") {
      return "green";
    } else if (servico.statusServico === "VERMELHO") {
      return "red";
    } else if (servico.statusServico === "AMARELO") {
      return "yellow";
    }


    return "";

  }

}
