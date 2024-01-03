<script setup>

import NavLinkComponent from '@/components/ui_components/NavLinkComponent.vue'
import DropDownComponent from '@/components/page_components/DropDownComponent.vue'
const emits = defineEmits(['toggle-sidebar'])
</script>

<template>
  <nav class="bg-white shadow-sm shadow-slate-300">
    <div class="px-4 md:px-1 xl:px-12 py-3 max-w-screen-xl flex items-center justify-between">
      <div>
        <RouterLink to="/" href="#" class="flex space-x-4 items-center">
          <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect width="100" height="100" fill="#FBBD71" rx="20" ry="20" />
            <circle cx="50" cy="50" r="30" fill="white" />
          </svg>

        <span class="font-helvetica font-bold text-2xl text-cyan-blue sm:block hidden tracking-wider">Adilo</span>
        </RouterLink>
      </div>

      <div class="space-x-4 md:space-x-3.5 sm:space-x-6 ml-4 lg:ml-6 hidden sm:flex items-center">
        <NavLinkComponent text="Projects" />
        <DropDownComponent text="Tools & Apps" :dropdownItems="['Snapbyte Recorder', 'AudioBounce', 'Sugar Voice']" />
        <NavLinkComponent text="Channels" />
        <NavLinkComponent text="Contacts" />
        <NavLinkComponent text="Analytics" />
        <NavLinkComponent text="Settings" />
      </div>

      <div class="flex space-x-4 sm:space-x-6 items-center ml-4 xl:ml-12">
        <div class="flex space-x-4">
          <NavLinkComponent text="Help" />
          <div class="border-l h-6 mx-3 hidden lg:block"></div>
        </div>

        <div class="flex items-center space-x-2">
          <img src="/images/avatar.png" alt="User Avatar" class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg">
          <div>
            <div class="font-semibold text-sm sm:text-md text-gray-900">User Name</div>
            <div class="text-xs sm:text-sm text-nav-link">user@email.com</div>
          </div>
        </div>
        <div id="toggleSidebarButton" class="text-xl text-gray-700 cursor-pointer ml-2 sm:ml-4 lg:hidden block hover:text-blue-700 transition" @click="emits('toggle-sidebar')">
          <i class="fa fa-bars"></i>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>

</style>
