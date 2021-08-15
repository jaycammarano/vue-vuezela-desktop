<template>
  <div class="">
    <ol>
      <li><Task taskContent="It's Working" /></li>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Task from './Task.vue';

export default defineComponent({
  name: 'TaskListContainer',
  components: { Task },
});
</script>

<style scoped></style>
