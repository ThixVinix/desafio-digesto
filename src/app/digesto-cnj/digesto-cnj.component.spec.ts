import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DigestoCnjComponent } from './digesto-cnj.component';
import { cnjMock } from './mockups/cnj.mock';
import { CnjService } from './servicos/cnj.service';

describe('DigestoCnjComponent', () => {
  let component: DigestoCnjComponent;
  let fixture: ComponentFixture<DigestoCnjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigestoCnjComponent],
      providers: [CnjService],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigestoCnjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getCnj', () => {
    spyOn(component['cnjService'], 'getProcess').and.returnValue(of(cnjMock));
    component.getCnj('5001682-88.2020.8.13.0672');

    component.process$.subscribe((process) => {
      expect(process).toEqual(cnjMock);
    });
  });
});
