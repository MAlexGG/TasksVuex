<template>
     <div class="col-12 ct">
        <form @submit="onSubmit">
            <input type="text" class="form-check" v-model="title" required placeholder="Add New Task..." >
            <button type="submit" class="btn bt m-1" value="submit">Crear Tarea</button>
        </form>
      </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "AddTasks",
    data(){
        return {
            title:''
        }
    },
    methods: {
        ...mapActions(["addTask"]),
        onSubmit(event){
            event.preventDefault();
            this.addTask(this.title);

            this.title = '';
        }
    },
}
</script>

<style scoped>
.ct{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.bt{
    background-color: #9B72AA;
    color: #FFF5DE;
    font-family: 'Gloria Hallelujah', cursive;
}
</style>