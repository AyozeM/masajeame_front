export interface SpaServiceI {
  id: number;
  name: string;
  description: string;
  img: string[];
  price: number;
  availableHours: TimetableI[];
}

export interface TimetableI {
  start: Date;
  end: Date;
}

export class SpaService implements SpaServiceI {

  private _id!: number;
  name: string;
  description: string;
  img: string[];
  private _price!: number;
  private _availableHours: TimetableI[];

  constructor(data: any) {
    this._id = data.id;
    this.name = data?.name;
    this.description = data?.description;
    this.price = data?.price;
    this.img = [...data?.img];
    this._availableHours = [...data.availableHours].map(e => ({ start: new Date(e.start), end: new Date(e.end) }));

  }

  get id(): number {
    return this._id;
  }

  get price(): number {
    return this._price;
  }

  set price(amount: number) {
    if (amount < 0) {
      throw 'Price must be higher than 0';
    }
    this._price = amount;
  }

  get availableHours(): TimetableI[] {
    return this._availableHours;
  }
}