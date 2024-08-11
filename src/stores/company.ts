import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Company from '@/models/company';
import getCompanyByCNPJ from '@/services/company/getCompanyByCNPJ';

const useCompanyStore = defineStore('company', () => {
  const { t } = useI18n();
  const company = ref<Company | null>(null);
  const errorMessage = ref<string>('');
  const isLoading = ref<boolean>(false);

  async function fetchCompany(cnpj: string): Promise<void> {
    isLoading.value = true;
    errorMessage.value = '';
    company.value = null;

    const response = await getCompanyByCNPJ(cnpj);

    if (response === null || typeof response === 'string') {
      errorMessage.value = response ?? t('error.companyNotFound');
    } else {
      company.value = response;
    }

    isLoading.value = false;
  }

  return {
    company: readonly(company),
    errorMessage: readonly(errorMessage),
    fetchCompany,
    isLoading: readonly(isLoading),
  };
});

export default useCompanyStore;
