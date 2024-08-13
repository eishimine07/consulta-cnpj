<script setup lang="ts">
const partners = defineModel<string[]>('partners');
</script>

<template>
  <div v-if="partners">
    <h2 class="mx-4">{{ $t('component.partnersDetails.title') }}</h2>

    <v-container class="mt-2">
      <v-row
        v-for="(_, index) in partners"
        :key="index"
      >
        <v-col>
          <v-text-field
            v-model="partners[index]"
            hide-details="auto"
            :label="$t('component.partnersDetails.partner', { n: index + 1 })"
            variant="outlined"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
