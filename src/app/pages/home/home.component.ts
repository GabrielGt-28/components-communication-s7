import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface DataForm {
  name: string;
  dniNumber: number;
  civilStatus: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  contactForm!: FormGroup;

  dataForm!: DataForm;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  onSubmit() {
    console.log('Form->', this.contactForm.value);

    this.dataForm = this.contactForm.value;
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      dniNumber: ['', [Validators.required, Validators.minLength(7)]],
      civilStatus: ['', [Validators.required]],
    });
  }
}
