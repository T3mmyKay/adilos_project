<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import NavLinkComponent from '@/components/ui_components/NavLinkComponent.vue'

const show = ref(false);
const toggleDropdown = () => {
  show.value = !show.value;
};

const props = defineProps({
  text: {
    type: String,
    required: true
  },

  dropdownItems: {
    type: Array,
    default: () => []
  }
});
const closeDropdown = (event) => {
  if (show.value && !event.target.closest('.dropdown-container')) {
    show.value = false;
  }
};
onMounted(() => {
  window.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
  window.removeEventListener('click', closeDropdown);
});
</script>

<template>
  <div class="relative dropdown-container">
    <div @click="toggleDropdown" class="cursor-pointer flex items-center">
      <NavLinkComponent :text="props.text" is-active>
        <i :class="`fa fa-chevron-${show ? 'up' : 'down'} ml-2 font-light text-nav-link text-sm hidden lg:block arrow`"></i>
      </NavLinkComponent>
    </div>
    <transition name="slide-fade">
      <div
        v-if="show && props.dropdownItems.length"
        class="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dropdown z-50"
      >
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <a
            v-for="(item, index) in props.dropdownItems"
            :key="index"
            href="#"
            class="block px-4 py-4 font-poppins text-base text-grey-text hover:text-primary-500"
            :class="{'border-b border-gray-200': index < props.dropdownItems.length - 1,'text-primary-500': index===0}"
            role="menuitem"
          >{{ item }}</a>
        </div>
      </div>
    </transition>
  </div>
</template>
<style lang="less" scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
  transform: translateX(0);
  opacity: 1;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
