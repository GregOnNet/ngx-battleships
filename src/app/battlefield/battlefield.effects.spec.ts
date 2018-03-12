import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { BattlefieldEffects } from './battlefield.effects';

describe('BattlefieldService', () => {
  let actions$: Observable<any>;
  let effects: BattlefieldEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BattlefieldEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(BattlefieldEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
