import { TestBed } from '@angular/core/testing';

import { EditanddelService } from './editanddel.service';

describe('EditanddelService', () => {
  let service: EditanddelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditanddelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
