import { Component, ElementRef, ViewChild } from '@angular/core';
import { LocalStorageService } from './tested-Components/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  @ViewChild('result',{static: true}) result: ElementRef;
  title = 'my-app';

  constructor(
    private ls:LocalStorageService
  ){ 
    this.localStorageTest();
  }

  add(num1:number,num2:number):number {
    return Number(num1)+Number(num2);
  }

  printAdd(num1:number, num2:number):void {
    this.result.nativeElement.value = this.add(num1,num2);
  }

  localStorageTest(){
    this.ls.setItem('greeting', 'Hello World');
    console.log(this.ls.getItem('greeting'));

    this.ls.setJson('json', {name:'Jordi', city:'bcn', numbers :[1,2,3]});
    console.log(this.ls.getJson('json'));
  }

}
