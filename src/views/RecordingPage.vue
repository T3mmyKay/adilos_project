<script setup>
import { ref, onMounted, provide } from 'vue'
import { useRouter } from 'vue-router'
import { useRecordSettingsStore } from '@/stores/recordsettings_store.js'
import NavBarComponent from '@/components/page_components/NavBarComponent.vue'
import ButtonComponent from '@/components/ui_components/ButtonComponent.vue'
import RightSidebarComponent from '@/components/page_components/RightSidebarComponent.vue'

const isSidebarOpen = ref(false)
provide('isSidebarOpen', isSidebarOpen)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
provide('toggleSidebar', toggleSidebar)
const recordSettingsStore = useRecordSettingsStore()
const permissionsGranted = ref(false)
const streamElement = ref(null)
const router = useRouter()
const checkPermissions = async () => {
  try {
    await recordSettingsStore.checkAndSetPermissions();

  } catch (err) {
    console.error('Error querying permissions:', err);
    // If an error occurs (e.g., the user denies the permissions), redirect to recordings page
    await router.push('/recordings');
  }
};
onMounted(async () => {
  await checkPermissions()
})

const startRecording = async () => {
  // Handle logic for starting recording based on permissions
  try {
    if (recordSettingsStore.screen) {
      // Logic for screen recording
      recordSettingsStore.stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: recordSettingsStore.mic
      })
    } else if (recordSettingsStore.camera) {
      // Logic for camera recording
      recordSettingsStore.stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: recordSettingsStore.mic
      })
    } else if (recordSettingsStore.mic) {
      // Logic for audio recording
      recordSettingsStore.stream = await navigator.mediaDevices.getUserMedia({
        audio: true
      })
    }

    // Attach the stream to the video element
    if (recordSettingsStore.stream) {
      streamElement.value = recordSettingsStore.stream;
    }
  } catch (error) {
    console.error('Error starting recording:', error)
  }
}
</script>
<template>
<div>
  <NavBarComponent @toggle-sidebar="toggleSidebar" />
  <RightSidebarComponent v-if="isSidebarOpen" />
  <div class="relative overflow-auto h-screen">
    <div class="absolute inset-0 bg"></div>
    <div
      class="relative z-10 py-12 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-80">
      <div class="text-left w-full flex items-center mb-5">
        <div class="w-4 h-4 rounded-full border-2 border-red-500 mr-2 flex items-center justify-center">
          <div class="w-2 h-2 rounded-full bg-red-500"></div>
        </div>
        <span class="text-grey-text font-poppins text-sm">Live Preview</span>
      </div>
      <div v-if="!recordSettingsStore.stream"
           class="bg-cyan-blue w-full p-4 rounded-lg py-48 sm:py-56 md:py-58 mb-16 display_stream"></div>
      <video v-else ref="streamElement" class="w-full h-full z-50 absolute" autoplay playsinline></video>
      <ButtonComponent :disabled="!permissionsGranted"
                       @click="startRecording" variant="primary" text="Start recording" padding="py-5 px-8"
                       class="w-8/12 sm:w-5/12 md:w-4/12" />
    </div>
  </div>
</div>
</template>

<style lang="less" scoped>
.bg {
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent linear-gradient(117deg, #0DABD8 0%, #EAFAFF 0%, #D3F5FE 100%) 0 0 no-repeat padding-box;
    opacity: 0.25;
    z-index: 0;
  }
}
</style>
