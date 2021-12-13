import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-mostrar-resultado',
  templateUrl: './mostrar-resultado.component.html',
})
export class MostrarResultadoComponent implements OnDestroy, OnChanges {
  @Input() mostrarResuldado!: number;
  @Input() mostrar!: boolean;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges ', changes);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
