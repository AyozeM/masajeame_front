import Vue from 'vue'
import Vuex from 'vuex'
import { SpaService } from '@/models/SpaService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    serviceList: undefined,
    serviceDetail: new Map<number, SpaService>()
  },
  getters: {
    getServiceDetail: (store) => (id: number) => store.serviceDetail.get(id)
  },
  mutations: {
    updateServiceList: (state, updatedList: SpaService[]) => {
      state.serviceList = [...updatedList] as any;
    },
    addServiceDetail: (store, service: SpaService) => {
      store.serviceDetail.set(service.id, service);
    }
  },
  actions: {
  },
  modules: {
  }
})
