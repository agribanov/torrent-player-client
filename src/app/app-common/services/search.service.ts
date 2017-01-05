import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService {
  private _events: BehaviorSubject<string> = new BehaviorSubject<string>('');

  get search() { return this._events.asObservable(); }
  get value() { return this._events.getValue(); }

  constructor() { }

  setSearchValue(query: string) {
    if (query !== this.value) {
      this._events.next(query);
    }
  }
}
