import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { CollectionService } from '../../services/collection.service';
import { CollectionItemDetailed } from '../../services/collection-item-detailed.model';


@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.sass']
})
export class CollectionItemComponent implements OnInit {
  id: string;
  source: string;
  error: string;
  playbackUrl: string;
  model: CollectionItemDetailed;

  constructor(private collectionService: CollectionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.source = params['source'];
    });

    this.getModel();
  }

  getModel() {
    this.collectionService.getItem(this.source, this.id)
      .subscribe(
      model => this.model = model,
      err => this.error = 'Can\'t get film data'
      );
  }

  playFile(fileId) {
    this.collectionService.getFileUrl(this.source, fileId)
      .subscribe(
      url => this.playbackUrl = url
      );
  }
}
