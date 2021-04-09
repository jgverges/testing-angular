import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app : AppComponent;

  beforeEach(async ()=>{
    app = new AppComponent();
  })

  it('debe dar 2', async () => {
    expect (app.add(2,2)).toEqual(4);
  })
});
