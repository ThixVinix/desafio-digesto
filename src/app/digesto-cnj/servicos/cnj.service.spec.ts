import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CnjInterface } from '../interfaces/cnj.interface';
import { cnjFromApiMock, cnjMock } from '../mockups/cnj.mock';
import { CnjService } from './cnj.service';

describe('CnjService', () => {
  let service: CnjService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CnjService],
    });
    service = TestBed.inject(CnjService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return empty object if the process is not found', (done) => {
    const cnj = '5001682-88.2020.8.13.0000';

    service.getProcess(cnj).subscribe((process) => {
      expect(process).toEqual({} as CnjInterface);
      done();
    });

    httpController
      .expectOne(`${service['apiURL']}/${cnj}?tipo_numero=5`)
      .flush({ status_op: 'Processo não encontrado' });
  });

  it('should return process', (done) => {
    const cnj = '5001682-88.2020.8.13.0672';

    service.getProcess(cnj).subscribe((process) => {
      expect(process).toEqual(cnjMock);
      done();
    });

    httpController
      .expectOne(`${service['apiURL']}/${cnj}?tipo_numero=5`)
      .flush(cnjFromApiMock);
  });
});
