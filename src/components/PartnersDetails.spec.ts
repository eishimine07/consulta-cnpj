import { mount } from '@vue/test-utils';
import PartnersDetails from '@/components/PartnersDetails.vue';

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (msg: string, data = null) => `${msg}${ data ? ` | data: ${JSON.stringify(data)}` : ''}`,
  }),
}));

describe('PartnersDetails', () => {
  const partners = ['Partner 1', 'Partner 2'];

  function render() {
    return mount(PartnersDetails, {
      props: {
        partners,
      },
    });
  }

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders correctly when partners is provided', () => {
    const wrapper = render();

    expect(wrapper.find('h2').text()).toBe('component.partnersDetails.title');
    expect(wrapper.findAll('input')).toHaveLength(2);
    expect(wrapper.findAll('input')[0].element.value).toBe(partners[0]);
    expect(wrapper.findAll('input')[1].element.value).toBe(partners[1]);
  });

  it('updates the model when input is changed', async () => {
    const newValue = 'New Partner 1';
    const wrapper = render();

    const input = wrapper.findAll('input')[0];
    await input.setValue(newValue);

    expect(wrapper.props('partners')).toStrictEqual([newValue, partners[1]]);
  });
});
