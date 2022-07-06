import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessosRelacionadosComponent } from './processos-relacionados.component';

describe('ProcessosRelacionadosComponent', () => {
  let component: ProcessosRelacionadosComponent;
  let fixture: ComponentFixture<ProcessosRelacionadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessosRelacionadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessosRelacionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
