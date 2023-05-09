import notes from './modules/notes';
import users from './modules/users';
import Vuex from 'vuex';

const store = new Vuex.Store({
  mutations: {
    initialize_store(state) {
      if(localStorage.getItem('store')) {
        this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store'))));
        notes.state.notes = this.state.notes.notes;
        users.state.user = this.state.users.user
      }
    }
  },
  actions: {
    async initialize_store(context) {
      context.commit('initialize_store');
    }
  },
  modules: {
    notes,
    users,
  },
});
store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});

export default store;