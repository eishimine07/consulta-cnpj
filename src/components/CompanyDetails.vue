<script setup lang="ts">
type CompanyDetails = {
  cnpj: string
  name: string
  businessName: string
  email: string
  establishmentDate: string
  status: string
  address: string
  phone: string
  legalNature: string
}

const companyDetails = defineModel<CompanyDetails>()
</script>

<template>
  <div v-if="companyDetails">
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
            variant="outlined"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="companyDetails.legalNature"
            hide-details="auto"
            :label="$t('component.companyDetails.legalNature')"
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
            variant="outlined"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="companyDetails.establishmentDate"
            hide-details="auto"
            :label="$t('component.companyDetails.establishmentDate')"
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
            variant="outlined"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="companyDetails.email"
            hide-details="auto"
            :label="$t('component.companyDetails.email')"
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
            variant="outlined"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
