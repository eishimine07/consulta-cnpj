<script setup lang="ts">
import { ref, watch } from 'vue';
import { useDate } from 'vuetify';
import CNAEDetails from '@/components/CNAEDetails.vue';
import CompanyDetails from '@/components/CompanyDetails.vue';
import PartnersDetails from '@/components/PartnersDetails.vue';
import formatCNPJ from '@/helpers/formatCNPJ';
import formatPhone from '@/helpers/formatPhone';
import useCompanyStore from '@/stores/company';

const date = useDate();
const companyStore = useCompanyStore();
const companyDetails = ref(
  companyStore.company ? {
    cnpj: formatCNPJ(companyStore.company.cnpj),
    name: companyStore.company.nome,
    businessName: companyStore.company.razaoSocial,
    email: companyStore.company.email,
    establishmentDate: date.format(companyStore.company.dataDeAbertura, 'keyboardDate'),
    status: companyStore.company.situacao,
    address: companyStore.company.enderecoCompleto,
    phone: formatPhone(companyStore.company.telefone),
    legalNature: companyStore.company.naturezaJuridica,
  } : {
    cnpj: '',
    name: '',
    businessName: '',
    email: '',
    establishmentDate: '',
    status: '',
    address: '',
    phone: '',
    legalNature: '',
  }
);
const cnaeDetails = ref(
  companyStore.company ? {
    primary: `${companyStore.company.atividadePrincipal.codigo} - ${companyStore.company.atividadePrincipal.descricao}`,
    secondary: companyStore.company.atividadesSecundarias.map((aS) => `${aS.codigo} - ${aS.descricao}` ),
  } : {
    primary: '',
    secondary: [],
  }
);
const partnersDetails = ref(companyStore.company?.socios.map((s) => `${s.nome} ${s.qualificacao ? `(${s.qualificacao})` : ''}`) ?? []);
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
      <CompanyDetails
        v-model:cnpj="companyDetails.cnpj"
        v-model:name="companyDetails.name"
        v-model:businessName="companyDetails.businessName"
        v-model:email="companyDetails.email"
        v-model:establishmentDate="companyDetails.establishmentDate"
        v-model:status="companyDetails.status"
        v-model:address="companyDetails.address"
        v-model:phone="companyDetails.phone"
        v-model:legalNature="companyDetails.legalNature"
      />

      <CNAEDetails v-model:primary="cnaeDetails.primary" />

      <PartnersDetails v-model:partners="partnersDetails" />

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
