<template>
  <div>
  <MenuPage :is-admin="true"/>
  </div>
</template>

<script>
import MenuPage from "./MenuPage.vue"

export default {
  name: 'AdminPage',
  components: {MenuPage},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
