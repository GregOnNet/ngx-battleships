import { IProvideWarshipPlan } from '../contracts';

export class WarshipSkeleton implements IProvideWarshipPlan {
  icon: string;

  constructor(
    public name: string,
    public type: any,
    public parts: number
  ) {
    this.icon = this.name.toLocaleLowerCase();
  }
}
