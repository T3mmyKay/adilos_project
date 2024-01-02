<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: "#"
  }
});


const route = useRoute();
const normalizedLink = props.link.startsWith('/') ? props.link : `/${props.link}`;
const isActiveLink = computed(() => {
  return route.matched.some((record) => record.path === normalizedLink);
});
</script>

<template>
  <router-link
    class="mt-7 px-4 py-2 rounded-lg hover:bg-sidebar-hover transition-width duration-200 flex items-center space-x-8 text-sidebar-text whitespace-nowrap"
    :to="props.link"
    :class="{ 'bg-sidebar-hover': isActiveLink }"
  >
    <i :class="props.icon"></i>
    <span class="ml-2">{{ props.text }}</span>
    <slot></slot>
  </router-link>
</template>

<style scoped>
</style>
