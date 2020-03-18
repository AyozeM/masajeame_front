import { SpaService } from "@/models/SpaService";


describe('SpaService.ts model', () => {
  let service: SpaService;

  beforeEach(() => {
    service = new SpaService({
      id: 0,
      name: '1h de spa',
      descripion: 'disfruta de una hora de spa',
      price: 30,
      img: ['img1', 'img2'],
      availableHours: [
        {
          date: '2020-05-17',
          ranges: [
            {
              start: '10:00',
              end: '11:00'
            }
          ]
        }
      ]
    })
  });


  it('Must update price', () => {
    service.price = 45;
    expect(service.price).toBe(45)
  });

  it('must throw error when price is < 0', () => {
    try {
      service.price = -10;
      fail();
    } catch (error) {
      expect(error).toBe('Price must be higher than 0');
    }
  });

  it('must get array of availables hours', () => {
    const hours = service.getavailableHours(new Date('2020-05-17'));
    expect(hours.length).toBeGreaterThan(0);
    expect(JSON.stringify(hours[0])).toBe(JSON.stringify({
      start: '10:00',
      end: '11:00'
    }))
  });

  it('must get an empty array', () => {
    const hours = service.getavailableHours(new Date());
    expect(hours.length).toBe(0)
  });
});