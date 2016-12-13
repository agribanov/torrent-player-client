import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { CollectionItem } from '../../services/collection-item.model';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.sass'],
  providers: []
})
export class CollectionComponent implements OnInit {
  list: Observable<CollectionItem[]>;

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.list = this.collectionService.getList();
  }

  search(query) {
    this.list = query ? this.collectionService.search(query) : this.collectionService.getList();
  }
}
