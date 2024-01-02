import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useRecordSettingsStore = defineStore('recordSettings', () => {

  const screen = ref(false);
  const camera = ref(false);
  const mic = ref(false);
  const stream = ref(null);

  const permissionsGranted = computed(() => screen.value || camera.value || mic.value);


  const checkAndSetPermissions = async () => {
    try {
      if (screen.value) {
        await navigator.mediaDevices.getDisplayMedia({ video: true });
        screen.value = true;
      }

      if (camera.value) {
        await navigator.mediaDevices.getUserMedia({ video: true });
        camera.value = true;
      }

      if (mic.value) {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        mic.value = true;
      }
    } catch (error) {
      console.error('Error querying permissions:', error);
    }
  };

  return { screen, camera, mic, permissionsGranted, checkAndSetPermissions, stream };
}, { persist: true });
