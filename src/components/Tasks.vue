<template>
    <div>
        <div class="container ct-list">
            <div class="col-12">
                <div @dblclick="onDblClick(task)" :key="task.id" v-for="task in allTasks" class="task" v-bind:class="{'is-complete':task.completed}">
                <p class="txtTasks">{{ task.title }}</p>
                <button class="bt bt-round" v-on:click="deleteTask(task.id)"><img src="../assets/garbage.svg" alt="delete" class="img-garbage"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Tasks",
    methods: {
        ...mapActions(["fetchTasks", "deleteTask", "updateTask"]),
        onDblClick(task){
            const updatedTask ={
                id: task.id,
                title: task.title,
                completed: !task.completed
            }
            this.updateTask(updatedTask);
        }
    },
    computed: mapGetters(["allTasks"]),
    created(){
        this.fetchTasks();
    }
}
</script>

<style scoped>
    .ct-list{
        margin-top: 2rem ;
    }
    .task {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin: 10px;
        border: 1px solid #3C5186;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        position: relative;
    }    
    .bt-round {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: none;
        margin-left: 2%;
        position: absolute;
        bottom: 4px;
        right: 4px;
    }
    .img-garbage{
        width: 13px;
        height:auto;
        filter: invert(95%) sepia(76%) saturate(380%) hue-rotate(304deg) brightness(104%) contrast(102%);
    }      
    .bt{
        background-color: #9B72AA;
        color: #FFF5DE;
        font-family: 'Gloria Hallelujah', cursive;
    }
    .txtTasks{
        text-align: left;
        font-family: 'Gloria Hallelujah', cursive;
    }
    .is-complete {
    color: #9B72AA;
    background: #35495e;
  }
</style>