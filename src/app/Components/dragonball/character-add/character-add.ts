import { Component, signal, output } from '@angular/core';
import { Character } from '../../../interfaces/character.interfaces';

@Component({
  selector: 'drangonball-character-add',
  templateUrl: './character-add.html',
})
export class CharacterAdd {

  name = signal('');
  power = signal(0);

  //Esto es lo que ocupamos para indicar que nuestro componente emite algo
  newCharacter = output<Character>();

  addCharacter(){

    if( !this.name() || !this.power() || this.power() <= 0 ) return;

    const newCharacter: Character ={
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    };

    /*this.characters.update(
      (list) => [...list, newCharacter]
    )*/

    //console.log(`Estp se esta agregando ${ this.name() } - ${ this.power() }`);
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

}
