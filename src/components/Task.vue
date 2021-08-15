<template>
  <div class="text-white">
    <li>{{ taskContent }}</li>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Task',
  props: {
    taskContent: String,
  },
});
</script>

<style scoped></style>
