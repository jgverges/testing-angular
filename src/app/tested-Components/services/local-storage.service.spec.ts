import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should retun value', () =>{
    service.setItem('item','myValue');
    expect(service.getItem('item')).toEqual('myValue');
    expect(service.getItem('item2')).toEqual(null);
  })

});
