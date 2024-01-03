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
  console.log('handleDocumentClick', event.target)
  if (isSidebarOpen.value && sidebarRef.value && !event.target.closest('#drawer-navigation') && !event.target.closest('#toggleSidebarButton')) {
    toggleSidebar(false)
  }
}
</script>

<template>
  <Transition name="slide">
    <div
      v-show="isSidebarOpen"
      id="drawer-navigation"
      ref="sidebarRef"
      aria-labelledby="drawer-navigation-label"
      class="opacity-1 fixed top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto bg-white lg:hidden transition-all ease-in-out duration-500"
      tabindex="-1"
      @click.stop
    >
      <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
        Menu</h5>
      <button aria-controls="drawer-navigation"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              type="button"
              @click="toggleSidebar(false)">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                fill-rule="evenodd"></path>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <div class="py-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <li>
            <SidebarLinkComponent icon="fa fa-film" link="recordings" text="My Recordings" />
          </li>
          <li>
            <SidebarLinkComponent icon="bi bi-share" link="home" text="Requested" />
          </li>
          <li>
            <SidebarLinkComponent icon="bi bi-folder" link="#" text="Projects" />
          </li>
          <li>
            <SidebarDropdownComponent :items="['Snapbyte Recorder', 'AudioBounce', 'Sugar Voice']" icon="bi bi-tools"
                                      text="Tools & Apps" />
          </li>
          <li>
            <SidebarLinkComponent icon="bi bi-broadcast" link="#" text="Channels" />
          </li>
          <li>
            <SidebarLinkComponent icon="bi bi-book" link="#" text="Contacts" />
          </li>
          <li>
            <SidebarLinkComponent icon="bi bi-graph-up" link="#" text="Analytics" />
          </li>
          <li>
            <SidebarLinkComponent icon="bi bi-gear" link="#" text="Settings" />
          </li>
          <li>
            <SidebarLinkComponent icon="bi bi-question-circle" link="#" text="Help" />
          </li>
        </ul>
      </div>
    </div>
  </Transition>
</template>

<style lang="less" scoped>
.slide-enter {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

#drawer-navigation {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-left: 1px solid #e5e7eb;
  &.translucent {
    background-color: rgba(255, 255, 255, 0.7);
  }
}
</style>
