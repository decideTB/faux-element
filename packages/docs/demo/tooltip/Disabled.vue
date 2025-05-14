<script lang="ts" setup>
import { ref } from "vue";

const disabled = ref(false);
</script>

<template>
  <er-tooltip
    :disabled="disabled"
    content="点击按钮可以关闭提示"
    placement="bottom"
  >
    <er-button @click="disabled = !disabled"
      >点击{{ disabled ? "激活" : "关闭" }}文字提示</er-button
    >
  </er-tooltip>
</template>
