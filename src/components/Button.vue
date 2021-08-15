<template>
  <button
    @click="onClick()"
    class="
      p-2
      font-bold
      text-right
      border-2 border-green-500
      rounded
      hover:bg-green-500 hover:text-black
    "
  >
    Add Task
  </button>
</template>

<script lang="ts">
import { TTask } from "@/utils/types";
export default {
  name: "AddTaskButton",
  props: {
    title: String,
  },
  methods: {
    onClick(): TTask {
      return { id: 0, text: "hellotask", day: "june 3rd", reminder: true };
    },
  },
};
</script>
