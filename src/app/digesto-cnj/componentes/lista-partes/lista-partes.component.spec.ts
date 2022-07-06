import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPartesComponent } from './lista-partes.component';

describe('ListaPartesComponent', () => {
  let component: ListaPartesComponent;
  let fixture: ComponentFixture<ListaPartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPartesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
