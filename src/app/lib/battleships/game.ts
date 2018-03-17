import { Coordinate } from './coordinate';
import { GameConfig } from './game-config';
import { Warhsip } from './warships/warship';
import { IDestroyWarShips } from './contracts';

export class Game {
  private _warships: IDestroyWarShips[] = [];
  isReadyToPlay = false;

  constructor(private _config: GameConfig) {}

  spawnWarship(warship: IDestroyWarShips) {
    this._throwIfCoordinatesAreAlreadyTaken(warship.coordinates);

    this._warships = [...this._warships, warship];
    this._updateReadiness();
  }

  private _throwIfCoordinatesAreAlreadyTaken(coordinates: Coordinate[]): void {
    const takenCoordinate = this._warships
      .map(warship => warship.coordinates)
      .reduce((prev, curr) => prev.concat(curr), [])
      .find(coordinate => coordinates.some(c => c === coordinate));

    if (takenCoordinate) {
      throw new Error(
        `Sorry, but the field [${takenCoordinate.x}, ${takenCoordinate.y}]` +
          'is already taken.'
      );
    }
  }

  private _updateReadiness(): void {
    this.isReadyToPlay = Object.keys(this._config.neededShips).every(shipName =>
      this._amountOfShipIsSatisfied(shipName)
    );
  }

  private _amountOfShipIsSatisfied(shipName: string) {
    return (
      this._warships
        .map(warship => warship.name)
        .filter(name => name.toLowerCase() === shipName.toLowerCase())
        .length === this._config.neededShips[shipName]
    );
  }
}
