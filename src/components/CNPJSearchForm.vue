<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import validCNPJ from '@/helpers/validCNPJ';
import useCompanyStore from '@/stores/company';

const { t } = useI18n();
const companyStore = useCompanyStore();
const isFormValid = ref(false);
const cnpj = ref<string>();

const rules = {
  required: (value: string) => {
    if (!value || value.trim() === '') {
      return t('error.required');
    }

    return true;
  },
  requiredCNPJ: (value: string) => {
    if (!validCNPJ(value)) {
      return t('error.requiredCNPJ');
    }

    return true;
  }
}

const onSubmit = () => {
  if (!isFormValid.value) {
    return;
  }

  companyStore.fetchCompany(cnpj.value);
};
</script>

<template>
  <v-sheet
    border
    class="pa-4"
    color="blue-grey-lighten-5"
    rounded
  >
    <p>{{ $t('component.form.description') }}</p>

    <v-form
      v-model="isFormValid"
      class="w-100 mt-4"
      fast-fail
      validate-on="input"
      @submit.prevent="onSubmit"
    >
      <v-text-field
        v-model="cnpj"
        bg-color="white"
        clearable
        persistent-clear
        placeholder="00.000.000/0000-00"
        :rules="[rules.required, rules.requiredCNPJ]"
        variant="outlined"
      />

      <v-btn
        block
        class="mt-2"
        :disabled="!isFormValid"
        :loading="companyStore.isLoading"
        type="submit"
      >
        {{ $t('component.form.submit') }}
      </v-btn>
    </v-form>
  </v-sheet>
</template>
