import Chip from "@/components/Chip.vue";
import { shallowMount, Wrapper } from "@vue/test-utils";

describe('Test chip component', () => {

  let wrapper: Wrapper<Chip>;

  beforeEach(() => {
    wrapper = shallowMount(Chip, {
      propsData: {
        isClickable: true,
        text: 'prueba'
      },
      slots: {
        default: '<span>prueba</span>'
      }
    })
  })

  it('render a div', () => {
    expect(wrapper.contains('div')).toBeTruthy();
  });

  it('has chip css class', () => {
    expect(wrapper.contains('.chip')).toBeTruthy();
  });

  it('select event returns text value', () => {
    wrapper.find('.chip').trigger('click');
    expect(wrapper.emitted().select[0][0]).toBe('prueba')
  });
})