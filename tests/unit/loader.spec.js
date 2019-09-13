import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Loader from '@/components/Loader.vue'

Vue.use(Vuex)

describe('Loader.vue', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {loading: true}
    })
  });

  it('It has the correct class to apply his styles and the correct markup', () => {
    const cls = 'lds-ring';
    const wrapper = shallowMount(Loader, {store});
    const divs = wrapper.findAll('div');

    expect(wrapper.classes()).toContain(cls);
    expect(divs.length).toBe(5);
  });
});