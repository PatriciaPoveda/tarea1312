import { NgIf } from '@angular/common';
import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
})
export class PrincipalComponent implements OnInit {
  mostrar: boolean = true;

  constructor() {
    console.log('constructor');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  resultado!: number;
  pintarResultado(resultado: number) {
    this.resultado = resultado;
  }
  resetear(mostrar: boolean) {
    this.mostrar = mostrar;
  }
}
