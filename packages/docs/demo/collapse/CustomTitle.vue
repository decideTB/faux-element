<script setup lang="ts">
import { ref } from 'vue'

const activeNames = ref(['1'])
</script>

<template>
  <er-collapse v-model="activeNames" accordion>
    <er-collapse-item name="1">
      <template #title>
        <span style="color: var(--er-color-danger)"> 自定义标题 </span>
        <er-icon icon="question-circle" />
      </template>
      <div>
        内容1
      </div>
    </er-collapse-item>
    <er-collapse-item title="标题2" name="2">
      <div>
        内容2
      </div>
    </er-collapse-item>
    <er-collapse-item title="标题3" name="3">
      <div>
         内容3
      </div>
    </er-collapse-item>
    <er-collapse-item title="标题4" name="4">
      <div>
         内容4
      </div>
    </er-collapse-item>
  </er-collapse>
</template>
