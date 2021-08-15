<template>
  <div
    class="
      relative
      flex flex-row
      p-4
      m-auto
      my-2
      text-left text-white
      border-2 border-green-500
      rounded-md
    "
  >
    <div>
      <h3 class="text-lg font-bold">
        {{ taskContent.id }} - {{ taskContent.text }}
      </h3>
      <p>Due: {{ taskContent.day }}</p>
    </div>

    <div class="absolute right-10">
      <i @click="remindToggle(taskContent.id)" :class="bellColor"></i>
      <i @click="onComplete(taskContent.id)" :class="checkColor"></i>
      <i @click="onDelete(taskContent.id)" class="m-2 fas fa-times"></i>
    </div>
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
    onComplete(id: number) {
      this.$emit("on-complete", id);
    },
    remindToggle(id: number) {
      this.$emit("remind-toggle", id);
    },
    onDelete(id: number) {
      this.$emit("delete-task", id);
    },
  },
  emits: ["delete-task", "remind-toggle", "on-complete"],
  computed: {
    bellColor: function (): string {
      if (this.taskContent?.reminder) {
        return "text-green-500 fas fa-bell";
      }
      return "text-red-500 fas fa-bell";
    },
    checkColor: function (): string {
      if (this.taskContent?.complete) {
        return "m-2 text-green-500 fas fa-check";
      }
      return "m-2 text-red-500 fas fa-check";
    },
  },
});
</script>
