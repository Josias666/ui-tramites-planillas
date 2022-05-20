export const state = () => ({
  counter: 0
})

// contains your actions
export const actions = {
  counterUp({ state, commit }){
    commit('setCounter', state.counter + 1)
  }
}
// contains your mutations
export const mutations = {
  setCounter(state, value){
    state.counter = value
  },
  auth_request(state) {
    state.status = 'loading'
  },
  auth_success(state, token) {
      state.status = 'success'
      state.token = token
  },
  auth_error(state) {
      state.status = 'error'
  },
  set_persona(state, persona) {
    state.persona = persona
  },
  set_roles(state, roles) {
    state.roles = roles
  },
  logout(state) {
      state.status = ''
      state.token = ''
      state.loggedInUser = {}
  },
  auth_success2 (state, loggedInUser) {
      state.loggedInUser = Object.assign({}, loggedInUser)
  }
}
// your root getters
export const getters = {
    myGetter(state){ return state.counter + 1000}
}

