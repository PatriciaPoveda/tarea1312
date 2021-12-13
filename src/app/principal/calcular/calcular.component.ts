import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
})
export class CalcularComponent {
  numeroA: number = 0;
  numeroB: number = 0;
  // @Input() mostrar!: boolean;
  sumar() {
    const resultado = this.numeroA + this.numeroB;
    return this.resultado.emit(resultado);
  }
  restar() {
    const resultado = this.numeroA - this.numeroB;
    return this.resultado.emit(resultado);
  }
  multiplicar() {
    const resultado = this.numeroA * this.numeroB;
    return this.resultado.emit(resultado);
  }
  dividir() {
    const resultado = this.numeroA / this.numeroB;
    return this.resultado.emit(resultado);
  }
  reset() {
    this.numeroA = 0;
    this.numeroB = 0;
    this.resultado.emit(0);
    this.mostrar.emit(false);
    console.log(this.mostrar, 'MOSTRARRRR');
  }

  @Output() resultado: EventEmitter<number> = new EventEmitter<number>();
  @Output() mostrar: EventEmitter<boolean> = new EventEmitter<boolean>();
}
