export class PriceModel {
  constructor(
    public title: string,
    public price: number,
    public category: string,
    public id?: number
  ) {}
}
