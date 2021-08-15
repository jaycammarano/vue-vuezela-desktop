<template>
  <div :key="task.id" v-for="task in tasks" class="w-2/3 m-4">
    <ol>
      <Task @delete-task="$emit('delete-task', task.id)" :taskContent="task" />
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Task from "./Task.vue";
export default defineComponent({
  name: "TaskListContainer",
  components: { Task },
  props: { tasks: Array },
});
</script>

<style scoped></style>
