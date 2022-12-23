import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SonComponent } from './son/son.component';
import { SonFormS7Component } from './son-form-s7/son-form-s7.component';

@NgModule({
  declarations: [NavbarComponent, SonComponent, SonFormS7Component],
  imports: [CommonModule],
  exports: [NavbarComponent, SonComponent, SonFormS7Component],
})
export class ComponentsModule {}
