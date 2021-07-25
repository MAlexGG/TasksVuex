<template>
  <div id="app">
    <h1>Tasks to do</h1>
    <AddTasks/>
    <FilterTasks/>
    <Tasks/>
  </div>
</template>

<script>
 import AddTasks from './components/AddTasks.vue'
 import FilterTasks from './components/FilterTasks.vue'
 import Tasks from './components/Tasks.vue'

export default {
  name: 'App',
  components: {
    AddTasks,
    FilterTasks,
    Tasks
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
h1{
   font-family: 'Gloria Hallelujah', cursive;
   margin-bottom: 2rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-color: rgb(253, 250, 243) ;
}
</style>
