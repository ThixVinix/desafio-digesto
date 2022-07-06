import { ComponentFixture, TestBed } from '@angular/core/testing';
import { cnjMock } from '../../mockups/cnj.mock';

import { ProcessosDetalhesComponent } from './processos-detalhes.component';

describe('ProcessosDetalhesComponent', () => {
  let component: ProcessosDetalhesComponent;
  let fixture: ComponentFixture<ProcessosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcessosDetalhesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessosDetalhesComponent);
    component = fixture.componentInstance;
    component.process = cnjMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
