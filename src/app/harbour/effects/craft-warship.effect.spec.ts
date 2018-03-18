import { Actions } from '@ngrx/effects';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { IProvideWarshipPlan } from '../../lib/battleships/contracts';
import { ChooseWarshipPlan, ChooseWarshipPlanSuccess } from '../actions';
import { CraftWarshipEffects } from './craft-warship.effects';

/** Docs: https://github.com/ReactiveX/rxjs/blob/master/doc/writing-marble-tests.md */

describe('[Notes] Effects', () => {
  describe('When notes loaded successfully', () => {
    it('the action LOAD_ALL_SUCCESS is raised', () => {
      const warshipPlan: IProvideWarshipPlan = {
        name: 'some',
        icon: 'some.svg',
        parts: 1
      };

      const chooseAction$ = hot('-a-', {
        a: new ChooseWarshipPlan(warshipPlan)
      });
      const expected = hot('-a-', {
        a: new ChooseWarshipPlanSuccess(warshipPlan)
      });

      const actions$ = new Actions(chooseAction$);
      const localStorage = localStorageStub(of(warshipPlan));
      const effects = new CraftWarshipEffects(actions$, localStorage);

      expect(effects.chooseWarshipPlan).toBeObservable(expected);
    });
  });
});

function localStorageStub(value: Observable<IProvideWarshipPlan>) {
  const service = jasmine.createSpyObj('localStorage', ['set']);

  service.set.and.returnValue(value);

  return service;
}
