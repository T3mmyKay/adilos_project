<script setup>

import ButtonComponent from '@/components/ui_components/ButtonComponent.vue'
import { useModalStore } from '@/stores/modal_store.js'

const modalStore = useModalStore();
let toggleModal = () => {
  modalStore.toggleModal();
}
</script>

<template>
  <div class="container flex items-center flex-col justify-center">
    <div class="w-full p-4 border-2 border-dashed border-ash rounded-lg flex flex-col items-center space-y-4 py-12">
      <img src="/images/undraw_video_files.svg" alt="Illustration" class="w-64 h-64" />
      <p class="text-center text-xl font-poppins font-medium">Say hello to the world!</p>
      <p class="text-grey-text text-center text-xs font-light">Record your first video/audio and share it what your
        team, friends,<br /> followers and customers.</p>
      <div class="flex space-x-4">
        <!-- Start Recording -->
        <ButtonComponent @click="toggleModal" text="Start Recording" variant="danger" icon="bi bi-record-circle-fill"
                         class="ring-1 ring-gray-300 hover:ring-white transition-colors" />
        <!-- New Request Button -->
        <ButtonComponent text="New Request" variant="primary" icon="bi bi-camera-video"
                         class="ring-1 ring-gray-300 hover:ring-white transition-colors" />
      </div>
    </div>

    <div class="w-full p-4 flex items-center flex-col md:flex-row space-y-12 md:space-x-12 py-10">
     <img src="/images/preview.png" alt="preview" class="w-[491px] h-[262px] shadow">
      <div class="flex flex-col items-center justify-center space-y-4">
        <p class="text-xl font-poppins font-medium text-cyan-blue">Want more controls & better <br> quality recording?</p>
        <ButtonComponent text="Download the desktop recorder" variant="primary"
                         class="ring-1 ring-gray-300 hover:ring-white transition-colors" />
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
