<script setup lang="ts">
import { type CollapseItemName } from "eric-ui";
import { ref } from "vue";

const activeNames = ref(["1"]);

function handleChange(val: CollapseItemName[]) {
  console.log(val);
}
</script>

<template>
  <er-collapse v-model="activeNames" @change="handleChange">
    <er-collapse-item title="标题1" name="1">
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
