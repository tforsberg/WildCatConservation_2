import { Component } from '@angular/core';
import { Cat } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WildCat Conservation';

  cat: Cat;

  buttonArray: string[];

  constructor() {
    this.buttonArray = [
      'pallas',
      'iriomote',
      'kodkod'
    ];
  }

  addCat(species: string) {
    this.cat = {
      species: species,
      isHealthy: true
    };

  }
}
