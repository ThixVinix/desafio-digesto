import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paginador } from '../../modelos/paginador';

import { PaginadorComponent } from './paginador.component';

describe('PaginadorComponent', () => {
  let component: PaginadorComponent;
  let fixture: ComponentFixture<PaginadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginadorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadorComponent);
    component = fixture.componentInstance;
    component.paginator = new Paginador([]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
