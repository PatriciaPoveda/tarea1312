import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
})
export class CalcularComponent {
  numeroA!: number;
  numeroB!: number;

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
  }

  @Output() resultado: EventEmitter<number> = new EventEmitter<number>();
  @Output() mostrar: EventEmitter<boolean> = new EventEmitter<boolean>();
}
