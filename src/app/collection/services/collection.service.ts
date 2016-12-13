import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { UtilsService } from '../../services/utils.service';

import { apiUrls } from '../collection.config';

import { CollectionItem } from './collection-item.model';
import { CollectionItemDetailed } from './collection-item-detailed.model';

@Injectable()
export class CollectionService {

  constructor(private http: Http, private utils: UtilsService) { }

  getList() {
    return this.http.get(apiUrls.collection)
      .map((r: Response) => r.json() as CollectionItem[]);
  }

  search(query: string) {
    const url = this.utils.interpolate(apiUrls.search, { query });

    return this.http.get(url)
      .map((r: Response) => r.json() as CollectionItem[])
  }

  getItem(source: any, id: any) {
    const url = this.utils.interpolate(apiUrls.collectionItem, { source, id });

    return this.http.get(url)
      .map((r: Response) => r.json() as CollectionItemDetailed);
  }

  getFileUrl(source: any, id: any) {
    const url = this.utils.interpolate(apiUrls.collectionFileUrl, { source, id });

    return this.http.get(url)
      .map((r: Response) => r.text() as string);
    // return Observable.of(url);
  }

}
