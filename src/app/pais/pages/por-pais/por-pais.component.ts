import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, Error } from '../../intefaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino: string = 'Hola Mundo';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

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
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    this.pservice.buscarPais(termino).subscribe(
      (paises) => (this.paisesSugeridos = paises.splice(0, 4)),
      (err) => (this.paisesSugeridos = [])
    );
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
}
