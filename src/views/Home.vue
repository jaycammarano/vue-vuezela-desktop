<template>
  <div class="home">
    <Header msg="Welcome to VueVuezela Task App" />
    <TaskListContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue'; // @ is an alias to /src
import TaskListContainer from '../components/TaskListContainer.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    TaskListContainer,
  },
  data() {
    return {
      tasks: [{ id: 0, text: 'decoratiors', day: 'day', reminder: true }],
    };
  },
  created() {
    this.tasks = [{ id: 1, text: 'decotrs', day: 'today', reminder: true }];
  },
});
</script>
