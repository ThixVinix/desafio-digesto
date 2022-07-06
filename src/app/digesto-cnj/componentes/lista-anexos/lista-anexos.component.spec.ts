import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAnexosComponent } from './lista-anexos.component';

describe('ListaAnexosComponent', () => {
  let component: ListaAnexosComponent;
  let fixture: ComponentFixture<ListaAnexosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAnexosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAnexosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
