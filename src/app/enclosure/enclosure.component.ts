import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Cat } from '../interfaces';
@Component({
  selector: 'app-enclosure',
  templateUrl: './enclosure.component.html',
  styleUrls: ['./enclosure.component.scss']
})
export class EnclosureComponent implements OnInit, OnChanges {

  @Input() catFromParent: Cat;

  catArray: Cat[];

  constructor() {
    this.catArray = [];
   }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.catFromParent.firstChange === true) { return; }
    this.catArray.push(changes.catFromParent.currentValue);
  }

  ngOnInit() {
  }

}
