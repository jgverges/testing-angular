import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
/* new test */
describe('AppComponent', async () => {

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations:[
        AppComponent
      ],
      providers :[]
    }).compileComponents();

    TestBed.configureTestingModule({
      declarations : [AppComponent]
    })
    .createComponent(AppComponent);
  });

  it('suma debe dar 4', async () => {
    (<HTMLInputElement>document.getElementById('num1')).value='2';
    (<HTMLInputElement>document.getElementById('num2')).value='2';
    document.getElementById('calc').click();
    console.log('***',(<HTMLInputElement>document.getElementById('result')).value);
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('4');

  })
})
