<script setup lang="ts">
import { mdiMagnify } from '@mdi/js'
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import validCNPJ from '@/helpers/validCNPJ';
import useCompanyStore from '@/stores/company';

const { t } = useI18n();
const companyStore = useCompanyStore();
const isFormValid = ref(false);
const cnpj = ref<string>();
const showAlert = ref(false);

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

const fetchCompany = () => {
  if (!isFormValid.value || !cnpj.value) {
    return;
  }

  companyStore.fetchCompany(cnpj.value);
};

const onSubmit = () => {
  if (companyStore.dirty) {
    showAlert.value = true;

    return;
  }

  fetchCompany();
};

const onClickConfirm = () => {
  showAlert.value = false;

  fetchCompany();
}
</script>

<template>
  <v-sheet
    border
    class="pa-4"
    rounded
  >
    <h4>{{ $t('component.cnpjSearchform.description') }}</h4>

    <v-form
      v-model="isFormValid"
      class="w-100 mt-4"
      fast-fail
      validate-on="input"
      @submit.prevent="onSubmit"
    >
      <v-text-field
        v-model="cnpj"
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
        :prepend-icon="mdiMagnify"
        type="submit"
      >
        {{ $t('component.cnpjSearchform.submit') }}
      </v-btn>
    </v-form>
  </v-sheet>

  <v-dialog
    v-model="showAlert"
    persistent
    data-test="cnpj-search-form__alert"
  > 
    <v-card
      class="ma-auto"
      max-width="400"
      :title="$t('component.cnpjSearchform.alert.title')"
      :text="$t('component.cnpjSearchform.alert.message')"
    >
      <v-card-actions>
        <v-btn
          variant="text"
          @click="showAlert = false"
        >
          {{ $t('component.cnpjSearchform.alert.cancel') }}
        </v-btn>

        <v-btn
          color="grey-darken-2"
          variant="text"
          @click="onClickConfirm"
        >
          {{ $t('component.cnpjSearchform.alert.confirm') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
