import { UpperCasePipe } from '@angular/common';
import { Component, computed, OnInit, signal} from '@angular/core';

@Component ({

  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe]

})

export class HeroPageComponenet {

  heroDescription = computed(() => {
  const description = `${this.name()} - ${this.age()}`;
  return RTCSessionDescription;
});

  name = signal('Ironman');
  age = signal(45);

  getHeroDescription(){
    return `${this.name()} - ${this.age()}`;
  }

  changehero(){
    this.name.set(`Spiderman`)
    this.age.set(22)
  }

  resetForm(){
    this.name.set(`Ironman`)
    this.age.set(45)
  }

  changeAge() {
    this.age.set(60)
    }
}


