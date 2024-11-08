import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

fdescribe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('add operation of 2 and 3', () => {
    const addRes = service.addOperation(2,3)
    expect(5).toBe(addRes)
  })
  it('add operation of 2 and 3 negative', () => {
    const addRes = service.addOperation(2,3)
    expect(4).toBe(addRes)
  })

});
