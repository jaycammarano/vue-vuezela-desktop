<template>
  <button
    @click="showFormToggle()"
    class="
      p-2
      font-bold
      border-2 border-green-500
      rounded
      hover:bg-green-500 hover:text-black
    "
  >
    Add Task
  </button>
  <div>
    <AddTask v-bind:showForm="this.showForm" :taskNumber="taskNumber" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import AddTask from "./AddTask.vue";

export default defineComponent({
  name: "AddTaskButton",
  props: {
    title: String,
    taskNumber: Number,
  },
  components: { AddTask },
  data() {
    return {
      showForm: true,
    };
  },
  methods: {
    showFormToggle(): void {
      if (this.showForm === true) {
        this.showForm = false;
      } else {
        this.showForm = true;
      }
      console.log(this.showForm);
    },
  },
});
</script>
