import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @ViewChild('result',{static: true}) result: ElementRef;
  title = 'my-app';

  add(num1:number,num2:number):number {
    return Number(num1)+Number(num2);
  }

  printAdd(num1:number, num2:number):void {
    this.result.nativeElement.value = this.add(num1,num2);
  }

}
