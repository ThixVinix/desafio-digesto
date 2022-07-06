import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessosDetalhesComponent } from './processos-detalhes.component';

describe('ProcessosDetalhesComponent', () => {
  let component: ProcessosDetalhesComponent;
  let fixture: ComponentFixture<ProcessosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessosDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
