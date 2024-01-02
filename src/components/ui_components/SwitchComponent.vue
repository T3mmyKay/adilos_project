<template>
  <label class="switch">
    <input type="checkbox" :checked="modelValue" @change="onChange">
    <span class="slider flex justify-center items-center" @transitionend="onTransitionEnd">
      <i v-show="showCheckMark" class="bi bi-check h-4 w-4 text-green-500 absolute inset-0 m-auto left-7 bottom-1"></i>
    </span>
  </label>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const showCheckMark = ref(false);

const onChange = (event) => {
  emit('update:modelValue', event.target.checked);
};

const onTransitionEnd = () => {
  showCheckMark.value = props.modelValue;
};
</script>
<style lang="less" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  input:checked + .slider {
    background-color: #0AD688;

    &:before {
      transform: translateX(26px);
    }
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #0AD688;
  }
}
</style>
