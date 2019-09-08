import { mount } from '@vue/test-utils'
import GnomeList from '@/components/GnomeList.vue'

describe('GnomeList.vue', () => {
  it('It has the correct base structure', () => {
    const gnomes = [
        {
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
        },
        {
            "id": 1,
            "name": "Gimli Fasthands",
            "thumbnail": "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
            "age": 306,
            "weight": 39.065952,
            "height": 107.75835,
            "hair_color": "Pink",
            "professions": [],
            "friends": []
        }
    ];

    const wrapper = mount(GnomeList, {
        propsData: {
            list: gnomes
        }
    });

    //The search/filter exists
    expect(wrapper.find('div.gnomeSearch').exists()).toBe(true);
    //It render 2 results
    expect(wrapper.findAll('div.cardContainer').length).toBe(2);
  });
});