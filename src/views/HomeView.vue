<script setup lang="ts">
import CNPJSearchForm from '@/components/CNPJSearchForm.vue';
import CompanyForm from '@/components/CompanyForm.vue';
import ScrollButton from '@/components/ScrollButton.vue';
import useCompanyStore from '@/stores/company';

const companyStore = useCompanyStore();
</script>

<template>
  <v-app class="full-screen">
    <v-container class="d-flex flex-column ga-4">
      <h1>{{ $t('home.title') }}</h1>

      <CNPJSearchForm />

      <div v-if="companyStore.errorMessage">
        <p>{{ companyStore.errorMessage }}</p>
      </div>

      <div v-else-if="companyStore.company">
        <CompanyForm />
      </div>

      <ScrollButton />
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
