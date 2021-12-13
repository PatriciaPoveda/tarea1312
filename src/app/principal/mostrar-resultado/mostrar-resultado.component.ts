import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-mostrar-resultado',
  templateUrl: './mostrar-resultado.component.html',
})
export class MostrarResultadoComponent implements OnDestroy, OnChanges {
  @Input() mostrarResuldado!: number;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges ', changes);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
