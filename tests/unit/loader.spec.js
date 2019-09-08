import { shallowMount } from '@vue/test-utils'
import Loader from '@/components/Loader.vue'

describe('Loader.vue', () => {
  it('It has the correct class to apply his styles and the correct markup', () => {
    const cls = 'lds-ring';
    const wrapper = shallowMount(Loader, {});
    const divs = wrapper.findAll('div');

    expect(wrapper.classes()).toContain(cls);
    expect(divs.length).toBe(5);
  });
});