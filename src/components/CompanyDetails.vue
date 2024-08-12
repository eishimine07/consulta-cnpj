<script setup lang="ts">
type CompanyDetails = {
  cnpj: string
  name: string
  businessName: string
  email: string
  establishmentDate: Date
  status: string
  address: string
  phone: string
  legalNature: string
}

const companyDetails = defineModel<CompanyDetails>()
const rules = [];
</script>

<template>
  <div>
    <h2 class="mx-4">{{ $t('component.companyDetails.title') }}</h2>

    <v-container class="mt-2">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="companyDetails.cnpj"
            hide-details="auto"
            :label="$t('component.companyDetails.cnpj')"
            readonly
            variant="outlined"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="companyDetails.name"
            hide-details="auto"
            :label="$t('component.companyDetails.name')"
            :rules="rules"
            variant="outlined"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="companyDetails.businessName"
            hide-details="auto"
            :label="$t('component.companyDetails.businessName')"
            :rules="rules"
            variant="outlined"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="companyDetails.legalNature"
            hide-details="auto"
            :label="$t('component.companyDetails.legalNature')"
            :rules="rules"
            variant="outlined"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="12" md="6">
          <v-text-field
            v-model="companyDetails.status"
            hide-details="auto"
            :label="$t('component.companyDetails.status')"
            :rules="rules"
            variant="outlined"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="companyDetails.establishmentDate"
            hide-details="auto"
            :label="$t('component.companyDetails.establishmentDate')"
            :rules="rules"
            variant="outlined"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="companyDetails.phone"
            hide-details="auto"
            :label="$t('component.companyDetails.phone')"
            :rules="rules"
            variant="outlined"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="companyDetails.email"
            hide-details="auto"
            :label="$t('component.companyDetails.email')"
            :rules="rules"
            variant="outlined"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="companyDetails.address"
            hide-details="auto"
            :label="$t('component.companyDetails.address')"
            :rules="rules"
            variant="outlined"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
