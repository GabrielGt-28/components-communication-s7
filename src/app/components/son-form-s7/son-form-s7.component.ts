import { Component, Input } from '@angular/core';

interface DataForm {
  name: string;
  dniNumber: number;
  civilStatus: string;
}

@Component({
  selector: 'app-son-form-s7',
  templateUrl: './son-form-s7.component.html',
  styleUrls: ['./son-form-s7.component.css'],
})
export class SonFormS7Component {
  @Input() formObject!: DataForm;
}
