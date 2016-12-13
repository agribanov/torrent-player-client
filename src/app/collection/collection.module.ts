import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { CollectionService } from './services/collection.service';
import { CollectionComponent } from './components/collection/collection.component';
import { CollectionItemComponent } from './components/collection-item/collection-item.component';

import { VideoJsPlayerDirective } from '../directives/video-js-player.directive';

import collectionRoutes from './collection.routes';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    collectionRoutes
  ],
  providers: [CollectionService],
  declarations: [CollectionComponent, CollectionItemComponent, VideoJsPlayerDirective],
})
export class CollectionModule { }
