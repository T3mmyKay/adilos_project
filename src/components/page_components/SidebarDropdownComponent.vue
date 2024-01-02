<script setup>
import { ref } from 'vue'
import SidebarLinkComponent from '@/components/ui_components/SidebarLinkComponent.vue'

const props = defineProps({
  text: String,
  items: Array,
  link: String,
  icon: String
})

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div @click="toggleDropdown" class="relative">
    <SidebarLinkComponent :link="link" :icon="icon" :text="text">
      <i class="fa" :class="{ 'fa-chevron-right': !isOpen, 'fa-chevron-down': isOpen }"></i>
    </SidebarLinkComponent>
    <ul v-if="isOpen" class="absolute w-full backdrop-blur-md bg-white shadow-md cursor-pointer">
      <li v-for="(item, index) in items" :key="index" class="p-2 hover:bg-gray-200 text-grey-text">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
