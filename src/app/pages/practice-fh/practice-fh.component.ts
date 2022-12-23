import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-fh',
  templateUrl: './practice-fh.component.html',
  styleUrls: ['./practice-fh.component.css']
})
export class PracticeFhComponent {
  name: string = "Nombre de usuario"

  changeName() {
    this.name = "Angel Gt"
  }

}
