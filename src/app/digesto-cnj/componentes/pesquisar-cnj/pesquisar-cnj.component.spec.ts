import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { PesquisarCnjComponent } from './pesquisar-cnj.component';

describe('PesquisarCnjComponent', () => {
  let component: PesquisarCnjComponent;
  let fixture: ComponentFixture<PesquisarCnjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisarCnjComponent ],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisarCnjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('hasCnjErrors()', () => {
    beforeEach(() => {
      component['cnjControl'].reset();
      component['cnjControl'].markAsTouched();
    });

    it('should return true if cnj is touched and value is not provided', () => {
      component['cnjControl'].setValue(null);
      fixture.detectChanges();
      expect(component.hasCnjErrors()).toBeTrue();
    });

    it('should return true if cnj is changed and value is invalid', () => {
      component['cnjControl'].setValue('0002265-89.2011.8.26.00');
      fixture.detectChanges();
      expect(component.hasCnjErrors()).toBeTrue();
    });

    it('should return false if cnj is valid', () => {
      component['cnjControl'].setValue('0002265-89.2011.8.26.0012');
      fixture.detectChanges();
      expect(component.hasCnjErrors()).toBeFalse();
    });
  });

  describe('getCnjErrorMessage()', () => {
    beforeEach(() => {
      component['cnjControl'].reset();
      component['cnjControl'].markAsTouched();
    });

    it('should return message if cnj is not provided', () => {
      component['cnjControl'].setValue(null);
      fixture.detectChanges();
      expect(component.getCnjErrorMessage()).toEqual(
        'Preencha o CNJ.'
      );
    });

    it('should return message if cnj is invalid', () => {
      component['cnjControl'].setValue('0002265-89.2011.8.26.00');
      fixture.detectChanges();
      expect(component.getCnjErrorMessage()).toEqual(
        'Formato inválido. Digite o CNJ no seguinte formato: XXXXXXX-XX.XXXX.X.XX.XXXX'
      );
    });

    it('should return empty message if cnj is valid', () => {
      component['cnjControl'].setValue('0002265-89.2011.8.26.0012');
      fixture.detectChanges();
      expect(component.getCnjErrorMessage()).toEqual('');
    });
  });

  describe('submitForm()', () => {
    beforeEach(() => {
      component['cnjControl'].reset();
      component['cnjControl'].markAsTouched();
    });

    it('should not emit cnj value if is invalid', () => {
      spyOn(component['filterCnj'], 'emit');
      component['cnjControl'].setValue(null);
      component.submitForm();
      expect(component['filterCnj'].emit).not.toHaveBeenCalled();
    });

    it('should emit cnj value if is valid', () => {
      spyOn(component['filterCnj'], 'emit');

      const value = '0002265-89.2011.8.26.0012';
      component['cnjControl'].setValue(value);
      component.submitForm();
      expect(component['filterCnj'].emit).toHaveBeenCalledWith(value);
    });
  });
});
