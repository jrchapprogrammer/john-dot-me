<template>
  <!-- <div class="container"> -->
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" exact to="/">John Chappelle III</nuxt-link>
      <div :class="{ 'is-active': isActive }" class="navbar-burger" @click="toggleNav">
        <span/>
        <span/>
        <span/>
      </div>
    </div>
    <div :class="{ 'is-active': isActive }" class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link class="navbar-item" exact to="/">Home</nuxt-link>
        <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
        <nuxt-link class="navbar-item" to="/projects">Projects</nuxt-link>
        <nuxt-link class="navbar-item" to="/contact">Contact</nuxt-link>
      </div>
    </div>
  </nav>
  <!-- </div> -->
</template>  

<script>
export default {
  name: 'Navigation',
  data() {
    return { isActive: false }
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>
</style>
