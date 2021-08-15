<template v-show="this.showForm">
  {{ this.showForm }}
  <form class="relative w-2/3 p-4 pb-16 m-auto add-form">
    <div class="flex flex-row form-control">
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
        rounded-sm
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
    showForm: String,
  },
  data() {
    return {
      text: "hello",
      day: "today",
      reminder: false,
    };
  },

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
