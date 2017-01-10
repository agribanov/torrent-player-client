import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { UtilsService } from '../../services/utils.service';

import { apiUrls } from '../collection.config';

import { CollectionItem } from './collection-item.model';
import { CollectionItemDetailed } from './collection-item-detailed.model';

@Injectable()
export class CollectionService {

  constructor(private http: Http, private utils: UtilsService) { }

  getList(category: string, page: number) {
    const url = this.utils.interpolate(apiUrls.collection, { category, page });

    return this.http.get(url)
      .map((r: Response) => r.json() as CollectionItem[]);
  }

  search(query: string, page: number, category: string = 'all', ) {
    console.log(query);
    const url = this.utils.interpolate(apiUrls.search, { category, query, page });

    return this.http.get(url)
      .map((r: Response) => r.json() as CollectionItem[]);
  }

  getItem(source: any, id: any) {
    const url = this.utils.interpolate(apiUrls.collectionItem, { source, id });

    return this.http.get(url)
      .map((r: Response) => r.json())
      .map(model => {
        this.bindFoldersObservable(model);
        return model as CollectionItemDetailed;
      });
  }

  getFolders(source: string, id: string) {
    const url = this.utils.interpolate(apiUrls.collectionFoldersUrl, { source, id});

    return this.http.get(url)
      .map((r: Response) => r.json() as Array<Object>);
  }

  getSubfolders(source: string, id: string, foldersKey: string, folderId: string) {
    console.log('get dubfolders', source, id, folderId, foldersKey);
    const url = this.utils.interpolate(apiUrls.collectionSubfoldersUrl, { source, id, foldersKey, folderId });

    return this.http.get(url)
      .map((r: Response) => r.json() as Array<Object>);
  }

  getFiles(source: string, id: string, foldersKey: string, folderId: string, subfolderId: string) {
    const url = this.utils.interpolate(apiUrls.collectionFilesUrl, { source, id, foldersKey, folderId, subfolderId });

    return this.http.get(url)
      .map((r: Response) => r.json() as Array<Object>);
  }

  getFileUrl(source: string, videoId: string, folderId: string, subfolderId: string, fileId: string) {
    const url = this.utils.interpolate(apiUrls.collectionFileUrl, { source, videoId, folderId, subfolderId, fileId });

    // return this.http.get(url)
    // .map((r: Response) => r.text() as string);
    return Observable.of(url);
  }

  bindFoldersObservable(model) {
    let observable: Observable<Array<Object>>;

    if (model.folders) {
      observable = Observable.of(model.folders);
    } else {
      observable = this.getFolders(model.source, model.id);
    }

    model.folders = observable.map((folders: Array<Object>) => {
      folders.forEach((folder: Object) => {
        this.bindSubfoldersObservable(model, folder);
      });

      return folders;
    });
  }

  bindSubfoldersObservable(model, folder) {
    let observable: Observable<Array<Object>>;

    if (folder.subfolders) {
      observable = Observable.of(folder.subfolders);
    } else {
      observable = this.getSubfolders(model.source, model.id, model.foldersKey, folder.id);
    }

    folder.subfolders = observable.map((subfolders: Array<Object>) => {
      subfolders.forEach((subfolder: Object) => {
        this.bindFilesObservable(model, folder, subfolder);
      });

      return subfolders;
    });
  }

  bindFilesObservable(model, folder, subfolder) {
    let observable: Observable<Array<Object>>;

    if (subfolder.files) {
      observable = Observable.of(subfolder.files);
    } else {
      observable = this.getFiles(model.source, model.id, model.foldersKey, folder.id, subfolder.id);
    }

    subfolder.files = observable;
    // .map((files: Array<Object>) => {
    //   files.forEach((file: Object) => {
    //     this.bindFilesObservable(subfolder);
    //   })

    //   return files;
    // });
  }

}
