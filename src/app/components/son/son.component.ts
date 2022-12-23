import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css'],
})
export class SonComponent {
  @Input() nameSon: string = 'no name';

  @Output() changeNameSon = new EventEmitter<string>();

  changeName() {
    this.nameSon = 'Gabriel gt';

    this.changeNameSon.emit(this.nameSon);
  }
}
