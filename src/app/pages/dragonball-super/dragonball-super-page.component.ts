import { Component,inject,signal } from "@angular/core";
import { CharacterList } from '../../Components/dragonball/character-list/character-list'
import { CharacterAdd } from "../../Components/dragonball/character-add/character-add";
import { DragonballService } from "../../services/dragonball.service";

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterList, CharacterAdd],
})

export class dragonBallSuperPageComponent{

  /* Inyeccion de dependencias */

  public dragonballService = inject(DragonballService);

}
