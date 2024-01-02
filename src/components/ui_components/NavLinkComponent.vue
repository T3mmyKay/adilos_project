<script setup>

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  to: {
    type: String,
    default: '#'
  },
  isActive: {
    type: Boolean,
    required: false,
    default: false
  }
})


</script>

<template>
  <div class="lg:flex hidden">
    <router-link :to="props.to" class="flex items-center font-poppins font-light text-nav-link text-lg hover:text-cyan-blue transition relative" active-class="active-link">
      <span>{{ props.text }}</span>
      <slot></slot> <!-- Add this line -->
      <div v-if="props.isActive" class="active-line"></div>
    </router-link>
  </div>

</template>

<style lang="less" scoped>
.active-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #0DABD8;
  margin-top: -18px;
  border-radius: 4px;
}
</style>
