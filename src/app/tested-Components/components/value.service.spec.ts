import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });
  
  it('#getObservableValue should return value from observable',
  (done: DoneFn) => {
    service.getObservableValue().subscribe(
      value =>  {expect(value).toBe('observable value'); 
                done()},
      e => console.log(e),
    );
  });

it('#getPromiseValue should return value from a promise',
  (done: DoneFn) => {
    service.getPromiseValue().then(value => {
      expect(value).toBe('promise value');
      done();
    });
  });
  
  it('set value to myValue', () =>{
    service.setValue('myValue');
    expect(service.getValue()).toEqual('myValue')
  });

  it('#getObservableDelayValue should return value from observable', (done:DoneFn) =>{
    service.getObservableDelayValue().subscribe(value=>{
      expect(value).toBe('observable delay value');
      done();
    })
  })
  


});
