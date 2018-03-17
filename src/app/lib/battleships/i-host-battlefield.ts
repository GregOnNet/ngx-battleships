import { IDestroyWarShips } from './warships/i-destroy-warships';

export interface IHostBattlefield {
  isReadyToPlays: boolean;
  warships: IDestroyWarShips[];

}
