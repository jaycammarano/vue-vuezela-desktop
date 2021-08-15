<template>
  <div class="relative m-auto">
    <div class="m-auto text-center">
      <h1 class="font-bold">{{ msg }}</h1>
    </div>
    <div class="absolute right-10">
      <AddTaskButton title="Add Task" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddTaskButton from './Button.vue';

export default defineComponent({
  name: 'Header',
  components: { AddTaskButton },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
