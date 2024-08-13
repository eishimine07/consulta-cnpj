import { mount } from '@vue/test-utils';
import CNAEDetails from '@/components/CNAEDetails.vue';

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (msg: string, data = null) => `${msg}${ data ? ` | data: ${JSON.stringify(data)}` : ''}`,
  }),
}));

describe('CNAEDetails', () => {
  const primary = 'Primary';

  function render() {
    return mount(CNAEDetails, {
      props: {
        primary,
      },
    });
  }

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders correctly when primary is provided', () => {
    const wrapper = render();

    expect(wrapper.find('h2').text()).toBe('component.cnaeDetails.title');
    expect(wrapper.find('input').element.value).toBe(primary);
  });

  it('updates the model when input is changed', async () => {
    const newValue = 'New Primary';
    const wrapper = render();

    const input = wrapper.find('input');
    await input.setValue(newValue);
 
    expect(wrapper.emitted()['update:primary']).toHaveLength(1);
    expect(wrapper.emitted()['update:primary'][0]).toStrictEqual([newValue]);
  });
});
