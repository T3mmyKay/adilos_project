import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const isModalVisible = ref(false);


  function toggleModal() {
   isModalVisible.value = !isModalVisible.value

    if (isModalVisible.value) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  function closeModal() {
    isModalVisible.value = false
  }

  return { isModalVisible, toggleModal, closeModal }
})
