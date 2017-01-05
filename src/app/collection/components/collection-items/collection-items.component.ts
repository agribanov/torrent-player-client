import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {CollectionItem} from '../../services/collection-item.model';

@Component({
  selector: 'app-collection-items',
  templateUrl: './collection-items.component.html',
  styleUrls: ['./collection-items.component.sass']
})
export class CollectionItemsComponent implements OnInit {
  @Input() items: CollectionItem[];
  @Input() page: number;
  @Output() previousPage: EventEmitter<number> = new EventEmitter;
  @Output() nextPage: EventEmitter<number> = new EventEmitter;

  constructor() { }

  ngOnInit() { }

  next() {
    this.nextPage.emit();
  }

  prev() {
    this.previousPage.emit();
  }

}
