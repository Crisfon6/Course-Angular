import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClasesComponent } from './ng-clases.component';

describe('NgClasesComponent', () => {
  let component: NgClasesComponent;
  let fixture: ComponentFixture<NgClasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
