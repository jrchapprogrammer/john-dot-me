<template>
  <section class="section is-medium">
    <div class="container has-text-centered">
      <h1 class="title">My Projects</h1>
      <ul>
        <GitRepo v-for="repo in $store.state.repos" :key="repo.id" :repo="repo"/>
      </ul>
      <p>
        To view these repos in their entirety, visit my
        <a
          href="https://github.com/jrchapprogrammer"
          target="_blank"
        >GitHub</a>.
      </p>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import GitRepo from '../components/GitRepo'
export default {
  name: 'Projects',
  components: {
    GitRepo
  },
  // data() {
  //   return {
  //     repos: '',
  //     filteredRepos: ''
  //   }
  // },
  // asyncData({ params }) {
  //   return axios
  //     .get('https://api.github.com/users/jrchapprogrammer/repos?type=owner')
  //     .then(res => {
  //       return {
  //         repos: res.data /* .filter(val => val.description.includes('John')) */
  //       }
  //     })
  // }
  async mounted() {
    store.dispatch('nuxtServerInit')
  }
}
</script>

<style scoped>
</style>
