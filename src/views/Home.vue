<template>
  <Header msg="Welcome to VueVuezela Task App" />
  <div class="p-2 text-lg font-bold">Add Task</div>
  <div>
    <AddTask
      @add-task="addTask"
      v-bind:showForm="this.showForm"
      :taskNumber="this.taskNumber()"
    />
  </div>
  <h3 class="w-2/3 m-4 text-lg font-bold text-left">Tasks:</h3>
  <TaskListContainer
    @remind-toggle="remindToggle"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import TaskListContainer from "../components/TaskListContainer.vue";
import { TTask } from "../utils/types";
import AddTask from "../components/AddTask.vue";
export default defineComponent({
  name: "Home",
  components: {
    Header,
    TaskListContainer,
    AddTask,
  },
  methods: {
    addTask(newTask: TTask): void {
      console.log(newTask);
      console.log("hello");
      this.tasks = [...this.tasks, newTask];
    },
    taskNumber: function () {
      return this.tasks.length + 1;
    },
    deleteTask(id: number) {
      if (confirm("Are you sure you want to delete this task?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    remindToggle(id: number) {
      this.tasks = this.tasks.map((task) => {
        if (task.id === id) {
          task.reminder = !task.reminder;
        }
        return task;
      });
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
