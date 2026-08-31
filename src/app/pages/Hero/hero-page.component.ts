import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html'
})
export class heroPageComponent{

  name = signal('Ironman');
  age = signal(45);

  /* Concatenamos el nombre con la edad */
  getHeroDescription(){
    return `${this.name()} - ${this.age()}`;
  }

  /* Le cambiamos el valor a todas la señales */
  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  /* Reseteamos el valor de nombre y edad */
  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }

  /* Cambiamos la edad a 60 */
  chageAge(){
    this.age.set(60);
  }

}
