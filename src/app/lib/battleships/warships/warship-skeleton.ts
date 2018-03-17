export class WarshipSkeleton {
  icon: string;

  constructor(
    public name: string,
    public type: any,
    public length: number
  ) {
    this.icon = this.name.toLocaleLowerCase();
  }
}
