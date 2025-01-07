import { TestBed } from '@angular/core/testing';

import { HasChangesGuard } from './has-changes-guard';

describe('HasChangesGuard', () => {
  let service: HasChangesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HasChangesGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});