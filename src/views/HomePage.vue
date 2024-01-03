<script setup>

import ButtonComponent from '@/components/ui_components/ButtonComponent.vue'
import { useModalStore } from '@/stores/modal_store.js'
import HeaderComponent from '@/components/page_components/HeaderComponent.vue'

const modalStore = useModalStore()
let toggleModal = () => {
  modalStore.toggleModal()
}
</script>

<template>
  <div>

    <HeaderComponent class="pb-6" />

    <div class="container mx-auto flex items-center flex-col justify-center">
      <div class="w-full p-4 border-2 border-dashed border-ash rounded-lg flex flex-col items-center space-y-4 py-12">
        <img alt="Illustration" class="w-64 h-64" src="/images/undraw_video_files.svg" />
        <p class="text-center text-xl font-poppins font-medium">Say hello to the world!</p>
        <p class="text-grey-text text-center text-xs font-light">Record your first video/audio and share it what your
          team, friends,<br /> followers and customers.</p>
        <div class="flex space-x-4">
          <!-- Start Recording -->
          <ButtonComponent class="ring-1 ring-gray-300 hover:ring-white transition-colors" icon="bi bi-record-circle-fill" text="Start Recording" variant="danger"
                           @click="toggleModal" />
          <!-- New Request Button -->
          <ButtonComponent class="ring-1 ring-gray-300 hover:ring-white transition-colors" icon="bi bi-camera-video" text="New Request"
                           variant="primary" />
        </div>
      </div>

      <div class="w-full p-4 flex items-center flex-col md:flex-row space-y-12 md:space-x-12 py-10">
        <img alt="preview" class="w-[491px] h-[262px] shadow" src="/images/preview.png">
        <div class="flex flex-col items-center justify-center space-y-4">
          <p class="text-xl font-poppins font-medium text-cyan-blue">Want more controls & better <br> quality recording?
          </p>
          <ButtonComponent class="ring-1 ring-gray-300 hover:ring-white transition-colors" text="Download the desktop recorder"
                           variant="primary" />
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
