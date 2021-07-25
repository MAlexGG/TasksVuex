import axios from 'axios';

const state = {
    tasks: []
};

const getters = {
    allTasks: (state) => {
        return state.tasks
    }
};

const actions = {
    async fetchTasks({ commit }) {
        const response = await axios.get('http://localhost:3000/tasks');

        commit('setTasks', response.data);
    },
    async deleteTask({ commit }, id) {
        await axios.delete(`http://localhost:3000/tasks/${id}`);

        commit('removeTask', id);
    },
    async updateTask({ commit }, updatedTask) {
        const response = await axios.put(`http://localhost:3000/tasks/${updatedTask.id}`, updatedTask);

        commit('updateTask', response.data);
    },
    async addTask({ commit }, title) {
        const response = await axios.post(`http://localhost:3000/tasks/`, { title: title, completed: false });

        commit('addTask', response.data)
    },
    async filterTasks({ commit }, event) {
        const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText);
        const response = await axios.get(`http://localhost:3000/tasks?_limit=${limit}`);

        commit('setTasks', response.data);
    },

}

const mutations = {
    setTasks: (state, tasks) => (state.tasks = tasks),
    removeTask: (state, id) => state.tasks = state.tasks.filter((task) => task.id !== id),
    updateTask: (state, updatedTask) => {
        const index = state.tasks.findIndex(task => task.id === updatedTask.id);
        if (index !== -1) {
            state.tasks.splice(index, 1, updatedTask);
        }
    },
    addTask: (state, newTask) => state.tasks.unshift(newTask)
};


export default {
    state,
    getters,
    actions,
    mutations
};