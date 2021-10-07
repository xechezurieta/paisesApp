import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, Error } from '../../intefaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = 'Hola Mundo';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private pservice: PaisService) {}

  buscar(termino: string) {
    this.termino = termino;

    this.hayError = false;
    this.pservice.buscarPais(this.termino).subscribe(
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

  sugerencias(termino: string) {
    this.hayError = false;
    //TODO crear sugerencias
  }
}
