import { Injectable } from '@angular/core';

@Injectable()
export class AddDelArrayItemService {

  constructor() { }

  inputText: string;
  
  add(inputValue, arrayName){
    if (inputValue) {
      arrayName.push(inputValue);
    }
  }

  del(id, arrayName){
    arrayName.splice(id, 1);
  }
}
