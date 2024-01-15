import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-itens',
  templateUrl: './add-itens.component.html',
  styleUrl: './add-itens.component.scss',
})
export class AddItensComponent {
  @Output() public emitItem = new EventEmitter();
  public addItem: string = '';
  public submitItem() {
    this.addItem = this.addItem.trim();
    if (this.addItem) {
      this.emitItem.emit(this.addItem);
      this.addItem = '';
    }
  }
}
