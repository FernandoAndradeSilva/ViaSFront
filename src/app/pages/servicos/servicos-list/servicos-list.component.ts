import {Component, OnInit} from '@angular/core';
import {ServicoService} from "../shared/servico.service";
import {MenuItem} from "primeng/api";
import {HistoricosService} from "../../historicos/shared/historicos.service";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-servicos-list',
  templateUrl: './servicos-list.component.html',
  styleUrls: ['./servicos-list.component.scss']
})
export class ServicosListComponent implements OnInit {

  displayBasic: boolean = false;

  stateOptions: any[] = [];
  dispOptions: any[] = [];
  servicos: any[] = [];

  itemsTableHeader: MenuItem[] = [{
    items: [
      {
        label: 'Mostrar Indispobilidade',

        command: () => {

          this.servicos = [];
          this.servicoService.getAllIndisponibilidade().subscribe(data => {
            this.servicos = data;
          })
          this.showIndisp = true;
        }
      },
      {
        label: 'Ocultar Indispobilidade',

        command: () => {
          this.servicos = [];
          this.servicoService.getAll().subscribe(data => {
            this.servicos = data;
          })
          this.showIndisp = false;
        }
      }
    ]
  },
  ];

  itemsMenuPesquisa: MenuItem[] = [{
    items: [
      {
        label: 'Por Data',

        command: () => {
          this.optPesquisa = 'data';
        }
      },
      {
        label: 'Por Estado',

        command: () => {
          this.optPesquisa = 'es';
        }
      }
    ]
  },
  ];

  optPesquisa: any;
  dataIncial?: Date;
  dataFinal?: Date;

  estado: any;
  showIndisp: boolean = false;


  constructor(private servicoService: ServicoService,
              private historicoService: HistoricosService,
              private router: Router,
              public datepipe: DatePipe) {






  }

  ngOnInit(): void {
    this.servicoService.getAll().subscribe(data => {
      this.servicos = data;
    })

  }


  showBasicDialog() {
    this.displayBasic = true;
  }

  teste() {
    console.log(this.optPesquisa);
  }

  pesquisaModal() {

    if (this.optPesquisa === 'es') {
      this.servicoService.getByEstado(this.estado).subscribe(data => {
        this.servicos = [];
        this.servicos.push(data)
      })
    } else if (this.optPesquisa === 'data') {

            this.router.navigate([
              "historicos", {
                  dtInicio: this.datepipe.transform(this.dataIncial, 'dd/MM/yyyy')
                , dtFim: this.datepipe.transform(this.dataFinal, 'dd/MM/yyyy')}
            ]);
    }

    this.displayBasic = false
  }

  corStatus(servico: any): String {

    if (servico.statusAtual === "VERDE") {
      return "green";
    } else if (servico.statusAtual === "VERMELHO") {
      return "red";
    } else if (servico.statusAtual === "AMARELO") {
      return "yellow";
    }


    return "";

  }

  cancelaPesquisa() {
    this.optPesquisa = undefined;
    this.dataIncial = undefined;
    this.dataFinal =undefined
    this.estado =undefined

  }
}
