<script setup lang="ts">
const cnpj = defineModel<string>('cnpj');
const name = defineModel<string>('name');
const businessName = defineModel<string>('businessName');
const email = defineModel<string>('email');
const establishmentDate = defineModel<string>('establishmentDate');
const status = defineModel<string>('status');
const address = defineModel<string>('address');
const phone = defineModel<string>('phone');
const legalNature = defineModel<string>('legalNature');
</script>

<template>
  <div>
    <h2 class="mx-4">{{ $t('component.companyDetails.title') }}</h2>

    <v-container class="mt-2">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="cnpj"
            hide-details="auto"
            :label="$t('component.companyDetails.cnpj')"
            disabled
            variant="outlined"
            data-test="company-details__input-cnpj"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="name"
            hide-details="auto"
            :label="$t('component.companyDetails.name')"
            variant="outlined"
            data-test="company-details__input-name"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="businessName"
            hide-details="auto"
            :label="$t('component.companyDetails.businessName')"
            variant="outlined"
            data-test="company-details__input-businessName"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="legalNature"
            hide-details="auto"
            :label="$t('component.companyDetails.legalNature')"
            variant="outlined"
            data-test="company-details__input-legalNature"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="12" md="6">
          <v-text-field
            v-model="status"
            hide-details="auto"
            :label="$t('component.companyDetails.status')"
            variant="outlined"
            data-test="company-details__input-status"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="establishmentDate"
            hide-details="auto"
            :label="$t('component.companyDetails.establishmentDate')"
            variant="outlined"
            data-test="company-details__input-establishmentDate"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="phone"
            hide-details="auto"
            :label="$t('component.companyDetails.phone')"
            variant="outlined"
            data-test="company-details__input-phone"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="email"
            hide-details="auto"
            :label="$t('component.companyDetails.email')"
            variant="outlined"
            data-test="company-details__input-email"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="address"
            hide-details="auto"
            :label="$t('component.companyDetails.address')"
            variant="outlined"
            data-test="company-details__input-address"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
