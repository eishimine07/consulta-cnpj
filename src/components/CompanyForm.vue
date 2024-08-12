<script setup lang="ts">
import { ref, watch } from 'vue';
import { useDate } from 'vuetify';
import CNAEDetails from '@/components/CNAEDetails.vue';
import CompanyDetails from '@/components/CompanyDetails.vue';
import PartnersDetails from '@/components/PartnersDetails.vue';
import formatCNPJ from '@/helpers/formatCNPJ';
import useCompanyStore from '@/stores/company';

const date = useDate();
const companyStore = useCompanyStore();
const companyDetails = ref({
  cnpj: formatCNPJ(companyStore.company.cnpj),
  name: companyStore.company.nome,
  businessName: companyStore.company.razaoSocial,
  email: companyStore.company.email,
  establishmentDate: date.format(companyStore.company.dataDeAbertura, 'keyboardDate'),
  status: companyStore.company.situacao,
  address: companyStore.company.endereçoCompleto,
  phone: companyStore.company.telefone,
  legalNature: companyStore.company.naturezaJuridica,
});
const cnaeDetails = ref({
  primary: `${companyStore.company.atividadePrincipal.codigo} - ${companyStore.company.atividadePrincipal.descricao}`,
  secondary: companyStore.company.atividadesSecundarias.map((aS) => `${aS.codigo} - ${aS.descricao}` ),
});
const partnersDetails = ref(companyStore.company.socios.map((s) => `${s.nome} ${s.qualificacao ? `(${s.qualificacao})` : ''}`));
const isFormValid = ref<boolean>(false);

const onSubmit = () => {
  // TODO - Salvar as informações
};

watch(
  () => [cnaeDetails.value, companyDetails.value, partnersDetails.value],
  () => {
    companyStore.dirty = true;
  },
  { deep: true },
);
</script>

<template>
  <v-sheet
    border
    class="pa-4"
    rounded
  >
    <v-form
      v-model="isFormValid"
      class="w-100 mt-4"
      fast-fail
      validate-on="input"
      @submit.prevent="onSubmit"
    >
      <CompanyDetails v-model="companyDetails" />

      <CNAEDetails v-model="cnaeDetails" />

      <PartnersDetails v-model="partnersDetails" />

      <v-btn
        block
        class="mt-2"
        :disabled="!isFormValid"
        type="submit"
      >
        {{ $t('component.companyForm.submit') }}
      </v-btn>
    </v-form>
  </v-sheet>
</template>
