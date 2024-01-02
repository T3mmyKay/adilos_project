<script setup>
import {useRouter} from 'vue-router'
import { useRecordSettingsStore } from '@/stores/recordSettings_store.js'

import NavBarComponent from '@/components/page_components/NavBarComponent.vue'
import LeftSidebarComponent from '@/components/page_components/LeftSidebarComponent.vue'
import BreadcrumbComponent from '@/components/ui_components/BreadcrumbComponent.vue'
import ButtonComponent from '@/components/ui_components/ButtonComponent.vue'
import BaseModal from '@/components/ui_components/BaseModal.vue'
import { useModalStore } from '@/stores/modal_store.js'
import SwitchComponent from '@/components/ui_components/SwitchComponent.vue'
import ToastComponent from '@/components/ui_components/ToastComponent.vue'
import { reactive, ref,provide } from 'vue'
import RightSidebarComponent from '@/components/page_components/RightSidebarComponent.vue'

const modalStore = useModalStore()
const router = useRouter()
const recordSettings = useRecordSettingsStore()
const toastMessage = ref('');
const toastState = reactive({
  toastKey: 0,
});
let timeoutId = null;

const toggleModal = () => {
  modalStore.toggleModal()
}


const startRecording = async () => {

  if (!recordSettings.screen && !recordSettings.camera && !recordSettings.mic) {
    toastMessage.value = 'Please select at least one setting ';
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      toastMessage.value = '';
      toastState.toastKey++;
    }, 6000);
    return;
  }
  try {
modalStore.closeModal()
    await router.push('/recording').catch(err => console.error('Error navigating to /recording', err))
  } catch (err) {
    console.error('Error accessing media devices.', err)
  }
}

const isSidebarOpen = ref(false)
provide('isSidebarOpen', isSidebarOpen)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
provide('toggleSidebar', toggleSidebar)

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <ToastComponent v-if="toastMessage" :message="toastMessage" :duration="6000" :toastKey="toastState.toastKey" />
    <NavBarComponent @toggle-sidebar="toggleSidebar" />
    <RightSidebarComponent v-if="isSidebarOpen" />

    <main class="flex flex-1">
      <LeftSidebarComponent />

      <section class="w-full lg:w-3/4 p-4 mx-auto">

        <div class="container py-5">
          <BreadcrumbComponent class="py-1" />
          <div class="flex flex-col lg:flex-row items-center justify-between mb-4">
            <div class="flex items-center mb-4 lg:mb-0">
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

        <BaseModal @close-modal="toggleModal">
          <div class="p-4 md:p-5">
            <form action="#" class="flex flex-col font-poppins" @submit.prevent>
              <div class="pt-2 pb-5">
                <label for="location" class="block mb-3.5 text-sm font-medium text-gray-900">Save the recording
                  in</label>
                <select id="location" name="location"
                        class="mt-2 mb-11 block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 bg-select ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-200 sm:text-sm sm:leading-6">
                  <option selected>Select a project</option>
                  <option>Cloud Storage</option>
                  <option>Local Storage</option>
                </select>
              </div>
              <!-- Record Screen Switch -->
              <div class="flex items-center justify-between mb-7">
                <span class="mr-4 text-sidebar-text font-medium text-lg">Record Screen</span>
                <SwitchComponent v-model="recordSettings.screen" active-text="On" inactive-text="Off" />
              </div>

              <!-- Record Camera Switch -->
              <div class="flex items-center justify-between mb-7">
                <span class="mr-4 text-sidebar-text font-medium text-lg">Record Camera</span>
                <SwitchComponent v-model="recordSettings.camera" active-text="On" inactive-text="Off"></SwitchComponent>
              </div>

              <!-- Record Mic Switch -->
              <div class="flex items-center justify-between mb-11">
                <span class="mr-4 text-sidebar-text font-medium text-lg">Record Mic</span>
                <SwitchComponent v-model="recordSettings.mic" active-text="On" inactive-text="Off"></SwitchComponent>
              </div>
            <ButtonComponent type="button" @click="startRecording" variant="primary" text="Start Recording"  padding="py-3.5 px-4" class="w-10/12 mx-auto" />
            </form>
          </div>

        </BaseModal>
        <router-view></router-view>
      </section>
    </main>

  </div>


</template>

<style scoped>

</style>
