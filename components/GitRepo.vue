<template>
  <div>
    <li>
      <a :href="repo.html_url" target="_blank">
        <h2 class="isLarge">{{ repo.name }}</h2>
      </a>
      <p>{{ repo.created_at }}</p>
      <p>{{ repo.description }}</p>
    </li>
  </div>
</template>

<script>
export default {
  name: 'GitRepo',
  props: {
    repo: {
      type: Object,
      default() {
        name: ''
        created_at: Date
        description: ''
      }
    }
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}
</style>
