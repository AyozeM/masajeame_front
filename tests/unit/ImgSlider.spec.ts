import { shallowMount, Wrapper } from "@vue/test-utils";
import ImgSlider from "@/components/ImgSlider.vue";

describe('test img slider component', () => {
  let wrapper: Wrapper<ImgSlider>;
  let vm: any;
  const images: string[] = [
    'test1',
    'test2',
    'test3',
  ];
  
  const genericTest = (expectedIndex: number) => {
    expect(vm.index).toBe(expectedIndex);
    expect(vm.paginator).toBe(`${expectedIndex + 1}/${images.length}`);
    expect(vm.actualImage).toBe(images[expectedIndex]);
  }

  beforeEach(() => {
    wrapper = shallowMount<ImgSlider>(ImgSlider, {
      propsData: {
        images
      }
    });
    vm = wrapper.vm;
  });

  it('must have paginator at initial position', () => {
    genericTest(0);
  });

  it('must advance paginator', () => {
    vm.changeImg(1);
    genericTest(1);
  })

  it('must go to last when go back before first', () => {
    vm.changeImg(-1);
    const expectedIndex = images.length - 1;
    genericTest(expectedIndex);
  })

  it('must go to first when go after last index', () => {
    wrapper.setData({ index: images.length - 1 });
    vm.changeImg(1);
    genericTest(0);
  })

});