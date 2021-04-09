import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

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
    (<HTMLInputElement>document.getElementById('num1')).value = '2';
    (<HTMLInputElement>document.getElementById('num2')).value='2';
    document.getElementById('calc').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('4');
  })

  it('suma debe dar 10', async () => {
    (<HTMLInputElement>document.getElementById('num1')).value = '5';
    (<HTMLInputElement>document.getElementById('num2')).value='5';
    document.getElementById('calc').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('10');
  })
  
  it('suma mayor que 9', async () => {
    (<HTMLInputElement>document.getElementById('num1')).value = '5';
    (<HTMLInputElement>document.getElementById('num2')).value='5';
    document.getElementById('calc').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBeGreaterThan(9);
  })

  it('suma menor 11', async () => {
    (<HTMLInputElement>document.getElementById('num1')).value = '5';
    (<HTMLInputElement>document.getElementById('num2')).value='5';
    document.getElementById('calc').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBeLessThan(11);
  })

  it('title contain Jasmine', async () => {
    expect(document.getElementById('title').innerText).toContain('Jasmin');
  })

  it('cerca de 10', async () => {
    (<HTMLInputElement>document.getElementById('num1')).value = '5.1';
    (<HTMLInputElement>document.getElementById('num2')).value='5';
    document.getElementById('calc').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBeCloseTo(10, 0.2);
  })

  it('Función throw', async () => {
    function foo (){
      return 2+2;
    }
    expect(foo).not.toThrow();
  })
})

