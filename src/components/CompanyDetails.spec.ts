import { mount } from '@vue/test-utils';
import CompanyDetails from '@/components/CompanyDetails.vue';

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (msg: string, data = null) => `${msg}${ data ? ` | data: ${JSON.stringify(data)}` : ''}`,
  }),
}));

describe('CompanyDetails', () => {
  const props = {
    cnpj: '12345678901234',
    name: 'name',
    businessName: 'businessName',
    email: 'email',
    establishmentDate: 'establishmentDate',
    status: 'status',
    address: 'address',
    phone: 'phone',
    legalNature: 'legalNature',
  };

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders all fields correctly with initial values', () => {
    const wrapper = mount(CompanyDetails, { props });

    expect(wrapper.find<HTMLInputElement>('[data-test="company-details__input-cnpj"] input').element.value).toBe(props.cnpj);
    expect(wrapper.find<HTMLInputElement>('[data-test="company-details__input-name"] input').element.value).toBe(props.name);
    expect(wrapper.find<HTMLInputElement>('[data-test="company-details__input-businessName"] input').element.value).toBe(props.businessName);
    expect(wrapper.find<HTMLInputElement>('[data-test="company-details__input-email"] input').element.value).toBe(props.email);
    expect(wrapper.find<HTMLInputElement>('[data-test="company-details__input-establishmentDate"] input').element.value).toBe(props.establishmentDate);
    expect(wrapper.find<HTMLInputElement>('[data-test="company-details__input-status"] input').element.value).toBe(props.status);
    expect(wrapper.find<HTMLInputElement>('[data-test="company-details__input-address"] input').element.value).toBe(props.address);
    expect(wrapper.find<HTMLInputElement>('[data-test="company-details__input-phone"] input').element.value).toBe(props.phone);
    expect(wrapper.find<HTMLInputElement>('[data-test="company-details__input-legalNature"] input').element.value).toBe(props.legalNature);
  });

  it('emits the correct event when a field is changed', async () => {
    const newName = 'New name';
    const newEmail = 'New email';
    const wrapper = mount(CompanyDetails, { props });

    const nameInput = wrapper.find('[data-test="company-details__input-name"] input');
    await nameInput.setValue(newName);

    const emailInput = wrapper.find('[data-test="company-details__input-email"] input');
    await emailInput.setValue(newEmail);

    expect(wrapper.emitted()['update:name']).toHaveLength(1);
    expect(wrapper.emitted()['update:name'][0]).toStrictEqual([newName]);
    expect(wrapper.emitted()['update:email']).toHaveLength(1);
    expect(wrapper.emitted()['update:email'][0]).toStrictEqual([newEmail]);
  });
});
