import axios from 'axios'

export const state = () => ({
  repos: []
})

export const mutations = {
  setRepos(state, repos) {
    state.repos = repos
  }
}
export const actions = {
  async nuxtServerInit({ commit }) {
    let { data } = await axios.get(
      'https://api.github.com/users/jrchapprogrammer/repos?type=owner'
    )
    commit('setRepos', data)
  }
}

// export const getters = {}
