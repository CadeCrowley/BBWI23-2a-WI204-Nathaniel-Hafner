import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { cvDetailResolver } from './cv-detail.resolver';

describe('cvDetailResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => cvDetailResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
