<script setup>
import { reactive, ref, watch } from 'vue'

const props = defineProps({
  message: String,
  type: {
    type: String,
    default: 'info',
  },
  duration: {
    type: Number,
    default: 6000,
  },
  toastKey: [String, Number],
});

const toastState = reactive({
  showToast: false,
});
let timeoutId = null;

const closeToast = () => {
  toastState.showToast = false;
  clearTimeout(timeoutId);
};

watch(
  () => props.message,
  (newVal, oldVal) => {
    toastState.showToast = !!newVal;

    clearTimeout(timeoutId);
    if (newVal) {
      timeoutId = setTimeout(() => {
        toastState.showToast = false;
      }, props.duration);
    }
  },
  { immediate: true }
);
</script>

<template>

  <Transition name="slide-fade">
    <div :key="toastKey" v-if="toastState.showToast"
         class="fixed top-16 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow z-[100]"
         role="alert">
      <div
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
             viewBox="0 0 20 20">
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
        </svg>
        <span class="sr-only">Warning icon</span>
      </div>
      <div class="ms-3 text-sm font-normal">{{ props.message }}</div>
    </div>
  </Transition>
</template>

<style lang="less" scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .3s ease;
}

.slide-fade-enter {
  transform: translateX(100%);
  display: none;
}

.slide-fade-leave-to {
  transform: translateX(100%);
}
</style>
