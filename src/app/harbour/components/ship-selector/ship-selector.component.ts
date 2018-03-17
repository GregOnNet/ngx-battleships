import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';

import { WarshipSkeleton } from '../../../lib/battleships';
import * as Warship from '../../../lib/battleships';
import { WarshipSkeletons } from '../../../lib/battleships/warship-skeleton/warship-skeletons';

@Component({
  selector: 'bs-ship-selector',
  templateUrl: './ship-selector.component.html',
  styleUrls: ['./ship-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipSelectorComponent {
  @Input() selectedShipPlan: WarshipSkeleton;
  @Output() change = new EventEmitter<WarshipSkeleton>();

  warshipSkeletons = WarshipSkeletons.all();

  emitSelectedShip(shipSkeleton: WarshipSkeleton) {
    this.selectedShipPlan = shipSkeleton;
    this.change.emit(shipSkeleton);
  }

  canPreselect(origin: WarshipSkeleton, compare: WarshipSkeleton) {
    if (!origin || !compare) {
      return false;
    }
    return origin.name === compare.name;
  }
}
