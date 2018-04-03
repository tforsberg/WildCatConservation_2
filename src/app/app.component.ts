import { Component } from '@angular/core';
import { CatService } from './cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WildCat Conservation';

  buttonArray: string[];

  constructor(private catService: CatService) {
    this.buttonArray = [
      'pallas',
      'iriomote',
      'kodkod'
    ];
  }

  addCat(species: string) {
   this.catService.createCat(species);
  }

}
