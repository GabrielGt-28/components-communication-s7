import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonFormS7Component } from './son-form-s7.component';

describe('SonFormS7Component', () => {
  let component: SonFormS7Component;
  let fixture: ComponentFixture<SonFormS7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonFormS7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonFormS7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
