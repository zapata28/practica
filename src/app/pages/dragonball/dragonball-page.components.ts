import { Component, signal } from "@angular/core";
import { NavbarComponent } from '../../components/shared/navbar/navbar.component';

interface Character{
  id: number ;
  name: string;
  power: number;
}

@Component({

  templateUrl: './dragonball-page.components.html',

})

export class DragonballPageCmponent {

  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    { id: 1, name:'Goku', power:9001},
    { id: 2, name:'Veggeta', power:7000},
    { id: 3, name:'Picolo', power:3000},
    { id: 4, name:'Yamcha', power:500},
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0){
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    }

    this.characters.update((list) =>[...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
