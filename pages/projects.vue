<template>
  <section class="section is-medium">
    <div class="container has-text-centered">
      <h1 class="title">My Projects</h1>
      <ul>
        <GitRepo v-for="repo in filteredRepos" :key="repo.id" :repo="repo"/>
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
  computed: {
    filteredRepos() {
      return this.$store.state.repos.filter(repo => repo.homepage != null)
    }
  },
  async created() {
    store.dispatch('nuxtServerInit')
  },

  async mounted() {}
}
</script>

<style scoped>
</style>
