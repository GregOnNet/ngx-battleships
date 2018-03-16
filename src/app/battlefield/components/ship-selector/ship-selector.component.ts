import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { WarshipSkeleton } from '../../../lib/battleships';

@Component({
  selector: 'bs-ship-selector',
  templateUrl: './ship-selector.component.html',
  styleUrls: ['./ship-selector.component.scss']
})
export class ShipSelectorComponent {
  selectedSkeleton: WarshipSkeleton;
  @Output() change = new EventEmitter<WarshipSkeleton>();

  warshipSkeletons = [
    new WarshipSkeleton('Destroyer', 2),
    new WarshipSkeleton('Submarine', 3),
    new WarshipSkeleton('Cruiser', 3),
    new WarshipSkeleton('Battleship', 4),
    new WarshipSkeleton('Carrier', 5)
  ];

  emitSelectedShip(shipSkeleton: WarshipSkeleton) {
    this.selectedSkeleton = shipSkeleton;
    this.change.emit(this.selectedSkeleton);
  }
}
