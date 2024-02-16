import { TestBed } from '@angular/core/testing';

import { AuthIntercepteurService } from './auth.intercepteur.service';

describe('AuthIntercepteurService', () => {
  let service: AuthIntercepteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthIntercepteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
