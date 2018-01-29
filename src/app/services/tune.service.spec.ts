import { TestBed, inject } from '@angular/core/testing';

import { TuneService } from './tune.service';

describe('TuneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TuneService]
    });
  });

  it('should be created', inject([TuneService], (service: TuneService) => {
    expect(service).toBeTruthy();
  }));
});
