<template>
  <button
    @click="onClick()"
    class="p-2 font-bold text-right border-2 border-green-500 rounded  hover:bg-green-500 hover:text-black"
  >
    Add Task
  </button>
</template>

<script lang="ts">
export default {
  name: 'AddTaskButton',
  props: {
    title: String,
  },
  methods: {
    onClick() {
      console.log('click');
    },
  },
};
</script>
