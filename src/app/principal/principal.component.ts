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
  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy');
  // }
  resultado: number = 0;
  pintarResultado(resultado: number) {
    this.resultado = resultado;
  }
  resetear(mostrar: boolean) {
    this.mostrar = mostrar;
  }
}
