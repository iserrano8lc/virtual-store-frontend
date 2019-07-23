import { TestBed } from '@angular/core/testing';

import { BackendFacadeService } from './backend-facade.service';

describe('BackendFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendFacadeService = TestBed.get(BackendFacadeService);
    expect(service).toBeTruthy();
  });
});
