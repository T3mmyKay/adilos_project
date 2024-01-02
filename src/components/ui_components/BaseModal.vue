<script setup>
import {useModalStore} from '@/stores/modal_store.js'
const modalStore = useModalStore();
let props = defineProps({
  modalActive: Boolean
});
let emit = defineEmits(['close-modal']);
</script>


<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div v-show="modalStore.isModalVisible"
           class="fixed w-full h-[calc(100%+1rem)] max-h-full bg-black bg-opacity-30 top-0 left-0 overflow-y-auto  flex justify-center items-center overflow-x-hidden">
        <Transition name="modal-inner">
          <div v-if="modalStore.isModalVisible"
               class="p-4 bg-white self-start mt-32 max-w-md w-full md:w-[457px] max-h-full rounded-lg">
            <div class="flex items-center justify-between p-4 md:p-5 border-b border-b-gray-200 rounded-t">
              <h3 class="text-[22px] font-semibold font-poppins text-black">
                <slot name="title">New Recording</slot>
              </h3>
              <button @click="$emit('close-modal')" type="button" class="end-2.5 text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <slot/>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>


<style lang="less" scoped>
.modal-outer-enter-active, .modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from, .modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner.enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
