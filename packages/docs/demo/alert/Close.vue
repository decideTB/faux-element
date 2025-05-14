<script setup>
import { ErMessage } from "eric-ui";

function handleClose() {
  ErMessage.info("close callback");
}
</script>
<template>
  <div class="basic block">
    <er-alert title="无法关闭提示" type="success" :closable="false" />
    <er-alert title="可关闭提示" type="warning" @close="handleClose" />
  </div>
</template>
