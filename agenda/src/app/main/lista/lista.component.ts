import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FilterPipe } from '../../filter.pipe';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [FilterPipe]
})
export class ListaComponent implements OnChanges {

  dataSource: any = null;

  @Input('new') newItem: any = [];
  @Input() searchCriteria: string = null;
  @Output('onSelect') select: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnChanges(e) {
    if (e.newItem && !e.newItem.firstChange) {
      this.addItem();
    }
  }

  selectItem(e) {
    this.select.emit(e);
  }

  addItem() {
    if (!this.dataSource) this.dataSource = [];
    if (this.dataSource.filter(a => a.Nome == this.newItem.Nome).length > 0) {
      alert('Este contato já existe');
    } else {
      this.dataSource.push(this.newItem);
      alert('Contato Salvo com sucesso.');
    }
  }

  apagarItem(e){
    this.dataSource = this.dataSource.filter(a=> a.Nome !== e.Nome);
  }
}
