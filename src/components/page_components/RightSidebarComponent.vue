<template>
  <div
    id="drawer-navigation"
    class="fixed top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto bg-white transition-transform lg:hidden"
    :class="{ 'visible': isSidebarOpen, 'hidden': !isSidebarOpen }"
    tabindex="-1"
    aria-labelledby="drawer-navigation-label"
  >
    <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
      Menu</h5>
    <button type="button" @click="toggleSidebar(false)" aria-controls="drawer-navigation"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
      </svg>
      <span class="sr-only">Close menu</span>
    </button>
    <div class="py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
        <li>
          <SidebarLinkComponent link="recordings" icon="fa fa-film" text="My Recordings" />
        </li>
        <li>
          <SidebarLinkComponent icon="bi bi-share" text="Requested" link="#" />
        </li>
        <li>
          <SidebarLinkComponent icon="bi bi-folder" text="Projects" link="#" />
        </li>
        <li>
          <SidebarDropdownComponent icon="bi bi-tools" text="Tools & Apps" :items="['Snapbyte Recorder', 'AudioBounce', 'Sugar Voice']" />
        </li>
        <li>
          <SidebarLinkComponent icon="bi bi-broadcast" text="Channels" link="#" />
        </li>
        <li>
          <SidebarLinkComponent icon="bi bi-book" text="Contacts" link="#" />
        </li>
        <li>
          <SidebarLinkComponent icon="bi bi-graph-up" text="Analytics" link="#" />
        </li>
        <li>
          <SidebarLinkComponent icon="bi bi-gear" text="Settings" link="#" />
        </li>
        <li>
          <SidebarLinkComponent icon="bi bi-question-circle" text="Help" link="#" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, onUnmounted, ref } from 'vue'
import SidebarLinkComponent from '@/components/ui_components/SidebarLinkComponent.vue'
import SidebarDropdownComponent from '@/components/page_components/SidebarDropdownComponent.vue'

const isSidebarOpen = inject('isSidebarOpen')
const toggleSidebar = inject('toggleSidebar')

const sidebarRef = ref(null)

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick)
})

const handleDocumentClick = (event) => {
  if (isSidebarOpen.value && sidebarRef.value && !sidebarRef.value.contains(event.target)) {
    toggleSidebar(false)
  }
}
</script>

<style scoped>
#drawer-navigation {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-left: 1px solid #e5e7eb;
  transition: transform 0.8s ease-in-out;

  &.translucent {
    background-color: rgba(255, 255, 255, 0.7);
  }

  &.hidden {
    transform: translateX(100%);
  }

  &.visible {
    transform: translateX(0);
  }

}
</style>
