<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    required: true
  },
  outline: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    required: false
  },
  type: {
    type: String,
    default: 'button'
  },
  padding: {
    type: String,
    default: 'px-2 py-2 xl:px-3 xl:py-2'
  }
});

const buttonClass = computed(() => {
  let colorClass = '';
  switch (props.variant) {
    case 'primary':
      colorClass = props.outline ? 'text-primary-500 border-primary-500 hover:bg-primary-500 hover:text-white disabled:cursor-not-allowed' : 'bg-primary-500 text-white hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-50';
      break;
    case 'danger':
      colorClass = props.outline ? 'text-danger border-danger hover:bg-danger hover:text-white' : 'bg-danger text-white hover:bg-red-700';
      break;
    case 'white':
      colorClass = props.outline ? 'text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white' : 'bg-white text-gray-600 hover:bg-gray-300';
      break;
    case 'success':
      colorClass = props.outline ? 'text-green-600 border-green-600 hover:bg-green-600 hover:text-white' : 'bg-green-600 text-white hover:bg-green-700';
      break;
  }
  return `${props.padding} rounded-full text-center text-sm transition-colors ${colorClass}`;
});
</script>

<template>
  <button :class="buttonClass">
    <i :class="props.icon" v-if="props.icon" class="mr-2"></i>
    {{ props.text }}
  </button>
</template>

<style scoped>
</style>
