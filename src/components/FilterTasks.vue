<template>
  <div class="txtFilter">
    Filter Tasks:
    <select v-on:change="filterTasks($event)">
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "FilterTasks",
  methods: {
    ...mapActions(["filterTasks"])
  }
}
</script>

<style scoped>
  select {
    margin-left: 15px;
    padding: 6px;
    border: 1px solid gray;
    border-radius: 3px;
  }
  .txtFilter{
    font-family: 'Gloria Hallelujah', cursive;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
  }
</style>
