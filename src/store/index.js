import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        messages: [
            { icon: 'far fa-handshake', color: 'info', text: 'Witaj na stronie WebSpace', snackbar: true },
        ],
    },
    getters: {
    },
    mutations: {
        addMessage:(state, msg) => {
            state.messages.push(msg)
        }
    },
    actions: {
        addMessage: (context, msg) => {
            setTimeout(function() {
                context.commit('addMessage', msg)
            }, 500)
        }
    },
    modules: {
    }
})