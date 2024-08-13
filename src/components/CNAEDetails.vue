<script setup lang="ts">
const primary = defineModel<string>('primary');
</script>

<template>
  <div>
    <h2 class="mx-4">{{ $t('component.cnaeDetails.title') }}</h2>

    <v-container class="mt-2">
      <v-row>
        <v-col>
          <v-text-field
            v-model="primary"
            hide-details="auto"
            :label="$t('component.cnaeDetails.mainActivity')"
            variant="outlined"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
