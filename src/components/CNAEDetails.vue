<script setup lang="ts">
type CNAEDetails = {
  primary: string
  secondary: string[]
}

const cnaeDetails = defineModel<CNAEDetails>()
</script>

<template>
  <div v-if="cnaeDetails">
    <h2 class="mx-4">{{ $t('component.cnaeDetails.title') }}</h2>

    <v-container class="mt-2">
      <v-row>
        <v-col>
          <v-text-field
            v-model="cnaeDetails.primary"
            hide-details="auto"
            :label="$t('component.cnaeDetails.mainActivity')"
            variant="outlined"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
