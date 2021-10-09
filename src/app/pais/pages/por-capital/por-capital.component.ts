import { Component, OnInit } from '@angular/core';
import { Country } from '../../intefaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  termino: string = 'Hola Mundo';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private pservice: PaisService) {}

  buscar(termino: string) {
    this.termino = termino;

    this.hayError = false;
    this.pservice.buscarCapital(this.termino).subscribe(
      (resp) => {
        if (resp.status) {
          this.hayError = true;
          this.paises = [];
        } else {
          this.paises = resp;
        }

        console.log('Paises' + JSON.stringify(this.paises));
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }
}
