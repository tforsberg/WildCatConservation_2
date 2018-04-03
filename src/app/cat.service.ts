import { Injectable } from '@angular/core';
import { Cat } from './interfaces';

import { BehaviorSubject } from 'rxjs/behaviorsubject';

@Injectable()
export class CatService {

  jungleCats: Cat[] = [
    {
      species: 'kodkod',
      isHealthy: true
    },
    {
      species: 'kodkod',
      isHealthy: true
    },
    {
      species: 'kodkod',
      isHealthy: true
    }
  ];
  mountainCats: Cat[] = [
    {
      species: 'pallas',
      isHealthy: true
    },
    {
      species: 'pallas',
      isHealthy: true
    },
    {
      species: 'pallas',
      isHealthy: true
    }
  ];
  swampCats: Cat[] = [
    {
      species: 'iriomote',
      isHealthy: true
    },
    {
      species: 'iriomote',
      isHealthy: true
    },
    {
      species: 'iriomote',
      isHealthy: true
    },
  ];

  jungleCatListSubject: BehaviorSubject<Cat[]> = new BehaviorSubject<Cat[]>(this.jungleCats);
  mountainCatListSubject: BehaviorSubject<Cat[]> = new BehaviorSubject<Cat[]>(this.mountainCats);
  swampCatListSubject: BehaviorSubject<Cat[]> = new BehaviorSubject<Cat[]>(this.swampCats);

  constructor() {
  }

  createCat(species: string) {

      const newCat: Cat = {
      species: species,
      isHealthy: true
    };

    if (species === 'kodkod') {
      this.jungleCats.push(newCat);
      this.jungleCatListSubject.getValue();
    } else if (species === 'pallas') {
      this.mountainCats.push(newCat);
      this.mountainCatListSubject.getValue();
    } else if (species === 'iriomote') {
      this.swampCats.push(newCat);
      this.swampCatListSubject.getValue();
    }
  }

  getCatArraySubject(habitat: string): BehaviorSubject<Cat[]> {
    if (habitat === 'jungle') {
      return this.jungleCatListSubject;
    } else if ( habitat === 'mountain') {
      return this.mountainCatListSubject;
    } else if ( habitat === 'swamp') {
      return this.swampCatListSubject;
    }
  }

}
