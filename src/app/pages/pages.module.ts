import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { PracticeFhComponent } from './practice-fh/practice-fh.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, PracticeFhComponent],
  imports: [CommonModule, ComponentsModule, FormsModule, ReactiveFormsModule],
})
export class PagesModule {}
