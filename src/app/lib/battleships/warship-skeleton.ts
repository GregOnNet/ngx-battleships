export class WarshipSkeleton {
  icon: string;

  constructor(
    public type: string,
    public length: number
  ) {
    this.icon = type.toLocaleLowerCase();
  }
}
