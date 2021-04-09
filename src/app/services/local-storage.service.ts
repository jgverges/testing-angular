import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, data : any):void {
    try{
      localStorage.setItem(key, data)
    }
    catch (e){
      console.log(e)
    }
  }

  getItem(key:string):any {
    try{
      return localStorage.getItem(key)
    }
    catch (e){
      console.log(e)
    }
  }
}
