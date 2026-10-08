import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

const loadFromLocalStorage = (): Character[] =>{
  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters) : [];
}

/* El Injectable es un decorador que convierte mi clase en un servicio inyectable */
@Injectable({providedIn: 'root'})
export class DragonballService {

  characters = signal<Character[]>( loadFromLocalStorage() );

  /*
    Los efectos secundarios se manejan con signals y sirven para actualizar el estado de manera reactiva

  */

  saveToLocalStorage = effect(() => {

    localStorage.setItem('characters', JSON.stringify(this.characters()));

  });

  addCharacter(newCharacter: Character){

    this.characters.update( list => [...list, newCharacter] )

  }

}
