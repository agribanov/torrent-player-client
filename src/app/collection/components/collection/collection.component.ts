import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CollectionService } from '../../services/collection.service';
import { CollectionItem } from '../../services/collection-item.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.sass'],
  providers: []
})
export class CollectionComponent implements OnInit {
  list: Observable<CollectionItem[]>;
  category: string;

  private page: number;

  constructor(private collectionService: CollectionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.page = 1;
      this.getList();
    });
  }

  getList() {
    this.list = this.collectionService.getList(this.category, this.page);
  }

  openPage(page) {
    console.log('open page', page);
    if (page > 0) {
      this.page = page;
    }

    this.getList();
  }
}
