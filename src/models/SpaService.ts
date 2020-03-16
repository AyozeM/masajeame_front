import { getDefaultStringDate } from '@/utils/Date.utils';

export interface SpaServiceI {
  id: number;
  name: string;
  description: string;
  img: string[];
  price: number;
}

export interface TimetableI {
  start: string;
  end: string;
}

export class SpaService implements SpaServiceI {

  private _id!: number;
  name: string;
  description: string;
  img: string[];
  private _price!: number;
  private _availableHours: Map<string, TimetableI[]> = new Map<string, TimetableI[]>();

  constructor(data: any) {
    this._id = data.id;
    this.name = data?.name;
    this.description = data?.description;
    this.price = data?.price;
    this.img = [...data?.img];
    console.log(data.availableHours);

    data.availableHours.forEach((e: any) => {
      this._availableHours.set(e.date, e.ranges as TimetableI[]);
    })

    console.log(this);
  }

  getavailableHours(date: Date): TimetableI[] {
    return this._availableHours.get(getDefaultStringDate(date)) || [];
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

}