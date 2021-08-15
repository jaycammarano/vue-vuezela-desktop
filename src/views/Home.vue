<template>
  <Header msg="Welcome to VueVuezela Task App" />
  <TaskListContainer @delete-task="deleteTask" :tasks="tasks" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import TaskListContainer from "../components/TaskListContainer.vue";
import { TTask } from "../utils/types";
export default defineComponent({
  name: "Home",
  components: {
    Header,
    TaskListContainer,
  },
  methods: {
    deleteTask(id: number) {
      if (confirm("Are You Sure?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
  },
  data() {
    return {
      tasks: [] as TTask[],
    };
  },
  created() {
    this.tasks = [
      { id: 1, text: "decotrs", day: "today", reminder: true },
      { id: 2, text: "decoratiors", day: "day", reminder: true },
    ];
  },
});
</script>
