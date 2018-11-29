import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    selectMenu: 'main'
  },
  mutations: {
    setMenu (state, { menuName }) {
        state.selectMenu = menuName
       }
    }
  }
})

export default store