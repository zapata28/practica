import { Component } from "@angular/core";

@Component({

  templateUrl: './counter-page.components.html',

  styles: `
    button{
      padding: 5 px;
      margin: 5px 10px;
      width: 75px;
    }`,

})


export class CounterPageComponent {

  counter = 10;

  increaseBy(value: number){

    this.counter += value;
  }
  resetCounter() {

    this.counter = 10;
  }

}
