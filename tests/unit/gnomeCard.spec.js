import { shallowMount } from '@vue/test-utils'
import GnomeCard from '@/components/GnomeCard.vue'

describe('GnomeCard.vue', () => {
  it('It has the correct base structure', () => {
    const gnome = {
        "id": 0,
        "name": "Tobus Quickwhistle",
        "thumbnail": "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
        "age": 306,
        "weight": 39.065952,
        "height": 107.75835,
        "hair_color": "Pink",
        "professions": [
            "Metalworker",
            "Woodcarver",
            "Stonecarver",
            " Tinker",
            "Tailor",
            "Potter"
        ],
        "friends": [
            "Cogwitz Chillwidget",
            "Tinadette Chillbuster"
        ]
    };

    const wrapper = shallowMount(GnomeCard, {
        propsData: {
            gnome: gnome
        }
    });

    expect(wrapper.classes()).toContain('cardContainer', 'card');
    //Shows the gnome Name
    expect(wrapper.find('h2').text()).toEqual(gnome.name);
    //It shows the profesions
    expect(wrapper.find('h3').exists()).toBe(true);
    //It has the correct link detail
    expect(wrapper.find('a').attributes().href).toEqual('/#/detail/' + gnome.id);
  });
});

describe('GnomeCard.vue', () => {
    it('It has the correct base structure', () => {
      const gnome = {
          "id": 0,
          "name": "Tobus Quickwhistle",
          "thumbnail": "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
          "age": 306,
          "weight": 39.065952,
          "height": 107.75835,
          "hair_color": "Pink",
          "professions": [],
          "friends": []
      };
  
      const wrapper = shallowMount(GnomeCard, {
          propsData: {
              gnome: gnome
          }
      });
  
      //Does not shows the profesions if the gnome doe not have one
      expect(wrapper.find('h3').exists()).toBe(false);
    });
  });