import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        progress: {
            firstStep: 'editing',
            secondStep: '',
            thirdStep: '',
            lastStep: ''
        }
    },
    mutations: {
        changeStep(state, [currentPage, nextPage]) {
            state.progress[currentPage] = 'done';
            state.progress[nextPage] = 'editing';
        }
    },
    actions: {}
})