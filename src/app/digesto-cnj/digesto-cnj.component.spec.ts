import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigestoCnjComponent } from './digesto-cnj.component';

describe('DigestoCnjComponent', () => {
  let component: DigestoCnjComponent;
  let fixture: ComponentFixture<DigestoCnjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigestoCnjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigestoCnjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
