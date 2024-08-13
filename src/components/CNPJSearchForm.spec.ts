import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import CNPJSearchForm from '@/components/CNPJSearchForm.vue';
import useCompanyStore from '@/stores/company';

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (msg: string, data = null) => `${msg}${ data ? ` | data: ${JSON.stringify(data)}` : ''}`,
  }),
}));

describe('CNPJSearchForm', () => {
  function render() {
    return mount(CNPJSearchForm, {
      global: {
        plugins: [
          createTestingPinia(),
        ],
      },
    });
  }

  afterEach(() => {
    document.body.innerHTML = '';
    vi.restoreAllMocks();
  });

  it('renders the form correctly', () => {
    const wrapper = render();

    expect(wrapper.find('h4').text()).toBe('component.cnpjSearchform.description');
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button[type="submit"]').text()).toBe('component.cnpjSearchform.submit');
  });

  it('disables the submit button when the form is invalid', async () => {
    const wrapper = render();

    await wrapper.find('input[type="text"]').setValue('invalid-cnpj');
    await wrapper.vm.$nextTick();

    expect(wrapper.find('button[type="submit"]').attributes()).toHaveProperty('disabled');
  });

  it('enables the submit button when the form is valid', async () => {
    const wrapper = render();

    wrapper.find('input[type="text"]').setValue('12.345.678/0001-95');
    await wrapper.vm.$nextTick();

    expect(wrapper.find('button[type="submit"]').attributes('disabled')).toBeFalsy();
  });

  it('calls fetchCompany on form submit when form is valid', async () => {
    const cnpj = '12.345.678/0001-95';
    const wrapper = render();
    const companyStore = useCompanyStore();

    await wrapper.find('input[type="text"]').setValue(cnpj);
    await wrapper.vm.$nextTick();

    wrapper.find('form').trigger('submit');
    await wrapper.vm.$nextTick();

    expect(companyStore.fetchCompany).toHaveBeenCalledWith(cnpj);
  });
});
