import { Component, EventEmitter, Output } from '@angular/core';

import { WarshipSkeleton } from '../../../lib/battleships';
import * as Warship from '../../../lib/battleships';

@Component({
  selector: 'bs-ship-selector',
  templateUrl: './ship-selector.component.html',
  styleUrls: ['./ship-selector.component.scss']
})
export class ShipSelectorComponent {
  selectedSkeleton: WarshipSkeleton;
  @Output() change = new EventEmitter<WarshipSkeleton>();

  warshipSkeletons = [
    new WarshipSkeleton('Destroyer', Warship.Destroyer, 2),
    new WarshipSkeleton('Submarine', Warship.Submarine, 3),
    new WarshipSkeleton('Cruiser', Warship.Cruiser, 3),
    new WarshipSkeleton('Battleship', Warship.Battleship, 4),
    new WarshipSkeleton('Carrier', Warship.Carrier, 5)
  ];

  emitSelectedShip(shipSkeleton: WarshipSkeleton) {
    this.selectedSkeleton = shipSkeleton;
    this.change.emit(this.selectedSkeleton);
  }
}
