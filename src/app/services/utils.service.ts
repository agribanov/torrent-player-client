import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  interpolate(string: string, params: any) {
    return string.replace(/\{(\w+)\}/g, function (match, variable) {
      return params[variable] || variable;
    });
  }

}
