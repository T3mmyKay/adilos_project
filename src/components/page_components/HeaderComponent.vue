<script setup>

import ButtonComponent from '@/components/ui_components/ButtonComponent.vue'
import BreadcrumbComponent from '@/components/ui_components/BreadcrumbComponent.vue'
import { useModalStore } from '@/stores/modal_store.js'
const modalStore = useModalStore();
let toggleModal = () => {
  modalStore.toggleModal();
}
</script>

<template>
  <div class="container pt-2 mx-auto">
    <BreadcrumbComponent class="py-1" />
    <div class="flex flex-col xl:flex-row items-center justify-between mb-4 lg:gap-y-3.5">
      <div class="flex items-center mb-4 lg:mb-0 ">
        <span class="mr-2 text-black text-2xl">My Recordings</span>
        <span class="text-grey-text text-2xl">25</span>
      </div>
      <div class="grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-4">
        <!-- By Date Filter -->
        <ButtonComponent text="By Date" variant="white" icon="bi bi-filter"
                         class="ring-1 ring-gray-300 hover:bg-gray-300 hover:ring-white transition-colors text-grey-text" />
        <!-- Add Filter -->
        <ButtonComponent text="Add Filter" variant="white" icon="bi bi-funnel"
                         class="ring-1 ring-gray-300 hover:bg-gray-300 hover:ring-white transition-colors text-grey-text" />
        <!-- New Request Button -->
        <ButtonComponent text="New Request" variant="primary" icon="bi bi-camera-video"
                         class="ring-1 ring-gray-300 hover:ring-white transition-colors" />
        <!-- Start Recording -->
        <ButtonComponent @click="toggleModal" text="Start Recording" variant="danger"
                         icon="bi bi-record-circle-fill"
                         class="ring-1 ring-gray-300 hover:ring-white transition-colors" />
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
