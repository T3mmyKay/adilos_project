<script setup>
import SidebarLinkComponent from '@/components/ui_components/SidebarLinkComponent.vue'
</script>

<template>
  <div class="lg:w-64 hidden lg:block bg-sidebar shadow overflow-auto">
    <div class="px-6 py-4">
      <SidebarLinkComponent link="recordings" icon="fa fa-film" text="My Recordings" />
      <SidebarLinkComponent icon="bi bi-share" text="Requested" link="#" />
    </div>
  </div>
</template>
<style scoped>
</style>
