import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CollectionService } from './services/collection.service';
import { CollectionComponent } from './components/collection/collection.component';
import { CollectionItemComponent } from './components/collection-item/collection-item.component';

import { VideoJsPlayerDirective } from '../directives/video-js-player.directive';

import collectionRoutes from './collection.routes';
import { CollectionItemsComponent } from './components/collection-items/collection-items.component';
import { CollectionSearchComponent } from './components/collection-search/collection-search.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    collectionRoutes
  ],
  providers: [CollectionService],
  declarations: [CollectionComponent, CollectionItemComponent, VideoJsPlayerDirective, CollectionItemsComponent, CollectionSearchComponent],
})
export class CollectionModule { }
