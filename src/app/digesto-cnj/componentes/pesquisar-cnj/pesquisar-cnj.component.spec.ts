import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarCnjComponent } from './pesquisar-cnj.component';

describe('PesquisarCnjComponent', () => {
  let component: PesquisarCnjComponent;
  let fixture: ComponentFixture<PesquisarCnjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisarCnjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisarCnjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
