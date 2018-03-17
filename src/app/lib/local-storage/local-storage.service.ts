import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';

@Injectable()
export class LocalStorage {
  get<T>(key: string): Observable<T> {
    return of(JSON.parse(window.localStorage.getItem(key)));
  }

  set<T>(key: string, value: T): Observable<T> {
    window.localStorage.setItem(key, JSON.stringify(value));
    return of(value);
  }

  remove(key: string): Observable<void> {
    return of(window.localStorage.removeItem(key));
  }
}
