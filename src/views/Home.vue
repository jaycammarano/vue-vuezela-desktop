<template>
  <Header msg="Welcome to VueVuezela Task App" />
  <button
    @click="showHideToggle()"
    class="
      absolute
      left-0
      p-2
      mx-4
      font-bold
      border-2 border-green-500
      rounded-md
      hover:bg-green-500 hover:text-black
    "
  >
    {{ showAddTask ? "Hide Form" : "Add Task" }}
  </button>
  <div v-show="this.showAddTask">
    <AddTask @add-task="addTask" :taskNumber="this.taskNumber()" />
  </div>
  <h3 class="w-2/3 m-4 mt-32 text-lg font-bold text-left">Tasks:</h3>
  <TaskListContainer
    @on-complete="onComplete"
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
import "../assets/audio/vuvuzela.mp3";
export default defineComponent({
  name: "Home",
  components: {
    Header,
    TaskListContainer,
    AddTask,
  },
  data() {
    return {
      showAddTask: false,
      tasks: [] as TTask[],
    };
  },
  methods: {
    addTask(newTask: TTask): void {
      console.log(newTask);
      console.log("hello");
      this.tasks = [...this.tasks, newTask];
    },
    onComplete(id: number): void {
      this.tasks = this.tasks.map((task) => {
        if (task.id === id) {
          task.complete = !task.complete;
          if (task.complete === true) {
            var audio = new Audio(require("../assets/audio/vuvuzela.mp3"));
            audio.play();
          }
        }
        return task;
      });
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
    showHideToggle(): void {
      this.showAddTask = !this.showAddTask;
    },
  },

  created() {
    this.tasks = [
      { id: 1, text: "decotrs", day: "today", reminder: true, complete: false },
      {
        id: 2,
        text: "decoratiors",
        day: "day",
        reminder: true,
        complete: false,
      },
    ];
  },
});
</script>
