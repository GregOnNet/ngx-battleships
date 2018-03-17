import { IDestroyWarShips } from './i-destroy-warships';

export interface IHostBattlefield {
  isReadyToPlays: boolean;
  warships: IDestroyWarShips[];

}
