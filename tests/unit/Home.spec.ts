import { shallowMount, Wrapper } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import { SpaService } from '@/models/SpaService';
import { SortEnum } from "@/typings/Sort.enum";
const data = [
  {
    id: 0,
    name: '1h de spa en Hotel Botánico',
    description: 'Disfruta de una hora de spa libre en el hotel botánico, Puerto de la cruz',
    price: 75,
    img: [
      'http://localhost:3000/botanico1.jpg',
      'http://localhost:3000/botanico2.jpg',
      'http://localhost:3000/botanico3.jpg',
      'http://localhost:3000/botanico4.jpg',
      'http://localhost:3000/botanico5.jpg',
    ],
    availableHours: [
      {
        date: '2020-03-17',
        ranges: [
          {
            start: '10:00',
            end: '11:00',
          },
          {
            start: '14:00',
            end: '15:00',
          },
          {
            start: '16:00',
            end: '17:00',
          },
          {
            start: '18:00',
            end: '19:00',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: 'Masaje facial en Spa la Quinta',
    description: 'Disfruta de un maravilloso masaje facial en el spa La Quinta, Santa Úrsula',
    price: 30,
    img: [
      'http://localhost:3000/laquinta1.jpg',
      'http://localhost:3000/laquinta2.jpg',
    ],
    availableHours: [
      {
        date: '2020-03-20',
        ranges: [
          {
            start: '11:00',
            end: '11:30',
          },
          {
            start: '13:00',
            end: '13:30',
          },
          {
            start: '13:30',
            end: '14:00',
          },

        ],
      },
    ],
  },
  {
    id: 2,
    name: '2h de spa en Hotel Villa cortés',
    description: 'Disfruta de 2h de relax en el hotel Villa Cortés, Playa de las Américas',
    price: 50,
    img: [
      'http://localhost:3000/villacortes1.jpg',
      'http://localhost:3000/villacortes2.jpg',
      'http://localhost:3000/villacortes3.jpg',
      'http://localhost:3000/villacortes4.jpg',
    ],
    availableHours: [
      {
        date: '2020-03-19',
        ranges: [
          {
            start: '11:00',
            end: '11:30',
          },
          {
            start: '13:00',
            end: '13:30',
          },
          {
            start: '13:30',
            end: '14:00',
          },
        ],
      },
      {
        date: '2020-03-21',
        ranges: [
          {
            start: '10:00',
            end: '11:30',
          },
          {
            start: '13:00',
            end: '13:30',
          },
        ],
      },
    ],
  },
]


describe('Home view tests', () => {
  let wrapper: Wrapper<Home>;
  let vm: any;

  beforeEach(() => {
    wrapper = shallowMount(Home);
    vm = wrapper.vm;
    wrapper.setData({ services: data.map(e => new SpaService(e)) });
  });

  it('must filter services', () => {
    wrapper.setData({ filter: 'quinta' });
    const { filteredServices } = vm;
    expect(filteredServices.length).toBeGreaterThan(0);
    expect(filteredServices[0].id).toBe(data[1].id);
  });

  it('must not found services', () => {
    wrapper.setData({ filter: 'empty' });
    const { filteredServices } = vm;
    expect(filteredServices.length).toBe(0);
  })

  it('must order services ascendent', () => {
    vm.sortServices(SortEnum.asc);
    const { services } = vm;
    expect(services[0].id).toBe(data[1].id);
  });

  it('must order services descendent', () => {
    vm.sortServices(SortEnum.desc);
    const { services } = vm;
    expect(services[0].id).toBe(data[0].id);
  })
});