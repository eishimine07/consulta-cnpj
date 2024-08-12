<script setup lang="ts">
type PartnersDetails = string[]

const partnersDetails = defineModel<PartnersDetails>()
const rules = [];
</script>

<template>
  <div>
    <h2 class="mx-4">{{ $t('component.partnersDetails.title') }}</h2>

    <v-container class="mt-2">
      <v-row
        v-for="(partner, index) in partnersDetails"
        :key="`${partner}-${index}`"
      >
        <v-col>
          <v-text-field
            v-model="partnersDetails[index]"
            hide-details="auto"
            :label="$t('component.partnersDetails.partner', { n: index + 1 })"
            :rules="rules"
            variant="outlined"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
