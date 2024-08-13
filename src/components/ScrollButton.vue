<script setup lang="ts">
import { mdiArrowUp } from '@mdi/js';
import { onMounted, onUnmounted, ref } from 'vue';

const show = ref(false);

const onClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const handleScroll = () => {
  show.value = window.scrollY > 320;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <v-btn
    v-show="show"
    :icon="mdiArrowUp"
    class="scroll-button"
    data-test="scroll-button"
    @click="onClick"
  />
</template>

<style
  scoped
  lang="scss"
>
.scroll-button {
  bottom: 2rem;
  position: fixed;
  right: 2rem;
}
</style>
