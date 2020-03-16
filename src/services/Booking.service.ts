import { SpaService } from '@/models/SpaService';
import { GenericService } from './Generic.service';
import store from "@/store/index";

export class BookingService extends GenericService {

  constructor() {
    super();
    this.prefix = 'booking';
  }

  async getServices(): Promise<SpaService[]> {
    let { serviceList } = store.state;
    if (!serviceList) {
      store.commit('updateServiceList', (await this.getAll()).data.map(e => new SpaService(e)));
      serviceList = store.state.serviceList;
    }
    return serviceList || [];
  }

  async getServiceById(id: number): Promise<SpaService | undefined> {
    let service = store.getters.getServiceDetail(id);
    if (!service) {
      store.commit('addServiceDetail', new SpaService((await this.getById(id)).data));
      service = store.getters.getServiceDetail(id);
    }
    return service;
  }
}