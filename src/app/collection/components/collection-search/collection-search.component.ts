import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CollectionService } from '../../services/collection.service';
import { CollectionItem } from '../../services/collection-item.model';

@Component({
  selector: 'app-collection-search',
  templateUrl: './collection-search.component.html',
  styleUrls: ['./collection-search.component.sass']
})
export class CollectionSearchComponent implements OnInit {
  private query: string;

  list: Observable<CollectionItem[]>;
  page: number;

  constructor(private collectionService: CollectionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.query = params['query'];
      this.page = 1;
      this.search();
    });
  }

  search() {
    console.log('searching');
    this.list = this.collectionService.search(this.query, this.page);
  }

  openPage(page) {
    console.log('open page', page);
    if (page > 0) {
      this.page = page;
    }

    this.search();
  }

}
