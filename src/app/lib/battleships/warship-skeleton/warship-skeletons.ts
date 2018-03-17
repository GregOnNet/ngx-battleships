import { WarshipSkeleton } from './warship-skeleton';
import { Destroyer } from '../warships/destroyer';
import { Submarine } from '../warships/submarine';
import { Cruiser } from '../warships/cruiser';
import { Battleship } from '../warships/battleship';
import { Carrier } from '../warships/carrier';


export class WarshipSkeletons {
  static all(): WarshipSkeleton[] {
    return [
      new WarshipSkeleton('Destroyer', Destroyer, 2),
      new WarshipSkeleton('Submarine', Submarine, 3),
      new WarshipSkeleton('Cruiser', Cruiser, 3),
      new WarshipSkeleton('Battleship', Battleship, 4),
      new WarshipSkeleton('Carrier', Carrier, 5)
    ];
  }

  static byName(name: string): WarshipSkeleton {
    return WarshipSkeletons.all().find(ws => ws.name === name);
  }
}
