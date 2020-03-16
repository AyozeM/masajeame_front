import { SpaService } from '@/models/SpaService';
import { GenericService } from './Generic.service';

export class BookingService extends GenericService {

  constructor() {
    super();
    this.prefix = 'booking';
  }
  
  async getServices(): Promise<SpaService[]> {
    return (await this.getAll()).data.map(e => new SpaService(e));
  }

  async getServiceById(id: number): Promise<SpaService> {
    return new SpaService((await this.getById(id)).data);
  }
}