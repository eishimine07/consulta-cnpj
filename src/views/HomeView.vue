<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDate } from 'vuetify';
import CNPJSearchForm from '@/components/CNPJSearchForm.vue';
import useCompanyStore from '@/stores/company';

const { t } = useI18n();
const companyStore = useCompanyStore();
const date = useDate();
</script>

<template>
  <v-app class="full-screen">
    <v-container>
      <h1>{{ $t('home.title') }}</h1>

      <CNPJSearchForm />

      <div v-if="companyStore.company">
        <p>{{ companyStore.company.atividadePrincipal }}</p>
        <p>{{ companyStore.company.cnpj }}</p>
        <p>{{ date.format(companyStore.company.dataDeAbertura, 'keyboardDate') }}</p>
        <p>{{ companyStore.company.email }}</p>
        <p>{{ companyStore.company.endereçoCompleto }}</p>
        <p>{{ companyStore.company.nome }}</p>
        <p>{{ companyStore.company.razaoSocial }}</p>
        <p>{{ companyStore.company.situacao }}</p>
        <p>{{ companyStore.company.telefone }}</p>
      </div>

      <div v-else-if="companyStore.errorMessage">
        <p>{{ companyStore.errorMessage }}</p>
      </div>
    </v-container>
  </v-app>
</template>

<style
  scoped
  lang="scss"
>
.full-screen {
  height: 100dvh;
  width: 100dvw;
}
</style>
