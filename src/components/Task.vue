<template>
  <div
    class="
      p-4
      m-auto
      my-2
      text-left text-white
      border-2 border-green-500
      rounded-md
    "
  >
    <h3 class="text-lg font-bold">
      {{ taskContent.id }} - {{ taskContent.text }}
    </h3>
    <p>Due: {{ taskContent.day }}</p>
    <i @click="onDelete(taskContent.id)">DeleteIcon</i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Task",
  props: {
    taskContent: Object,
  },
  methods: {
    onDelete(id: number) {
      this.$emit("delete-task", id);
    },
  },
  emits: ["delete-task"],
});
</script>
