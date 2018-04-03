import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Cat } from '../interfaces';
import { Observable } from 'rxjs/observable';
import { CatService } from '../cat.service';
@Component({
  selector: 'app-enclosure',
  templateUrl: './enclosure.component.html',
  styleUrls: ['./enclosure.component.scss']
})
export class EnclosureComponent implements OnInit {

/*   ngOnChanges(changes: SimpleChanges) {
    if (changes.catArrayFromParent.firstChange === true) { return; }
    this.catArray.push(changes.catArrayFromParent.currentValue);

  } */

  @Input() habitat: string;

  $catsObservable: Observable<Cat[]>;

  constructor(private catService: CatService) {
  }

  ngOnInit() {
    // bind our local observable to Subject in service. The Subject will automatically
    // emit value-changes and update our local observable.
    this.$catsObservable = this.catService.getCatArraySubject(this.habitat);
  }

  getBackgroundColor(habitat: string) {
    switch (habitat) {
      case 'jungle':
        return 'olivedrab';
      case 'mountain':
        return 'lightgrey';
      case 'swamp':
        return 'darkolivegreen';
    }
  }

}
