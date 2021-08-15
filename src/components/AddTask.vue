<template>
  <form @submit="onSubmit" class="relative w-2/3 p-4 pb-16 m-auto add-form">
    <div class="flex flex-rowform-control">
      <div class="p-2">
        <label>Task</label>
      </div>
      <div>
        <input
          class="text-black rounded-sm"
          type="text"
          name="text"
          v-model="text"
          placeholder="Add Task"
        />
      </div>
    </div>
    <div class="flex flex-row form-control">
      <div class="p-2">
        <label>Day</label>
      </div>
      <div>
        <input
          class="text-black rounded-sm"
          type="text"
          name="day"
          v-model="day"
          placeholder="day"
        />
      </div>
    </div>
    <div class="flex flex-row form-control">
      <div class="p-2">
        <label>Reminder:</label>
      </div>
      <div>
        <input
          class="text-lg"
          type="checkbox"
          name="reminder"
          v-model="reminder"
          placeholder="Add Task"
        />
      </div>
    </div>
    <input
      class="
        absolute
        left-0
        p-2
        mx-4
        font-bold
        text-left text-white
        bg-transparent
        border-2 border-green-500
        rounded-md
        hover:bg-green-500 hover:text-black
      "
      type="submit"
      value="Save Task"
    />
  </form>
  <div class="w-2/3 m-4 text-lg font-bold text-left">
    Preview:
    <Task v-bind:taskContent="taskPreview" />
  </div>
  <hr />
</template>

<script>
import { defineComponent } from "vue";
import Task from "./Task.vue";

export default defineComponent({
  name: "AddTask",
  components: { Task },
  props: {
    taskNumber: Number,
  },
  data() {
    return {
      text: "hello",
      day: "today",
      reminder: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.text) {
        alert("Please add a task");
      }
      const newTask = this.taskPreview;
      this.$emit("add-task", newTask);
      this.text = "";
      this.day = "";
      this.reminder = false;
    },
  },
  emits: ["add-task"],

  computed: {
    taskPreview: function () {
      return {
        id: this.taskNumber,
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
    },
  },
});
</script>
