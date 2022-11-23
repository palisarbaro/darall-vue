<template>
    <div class="mb-3">
    <b-card  style="height: 100%" class="rounded">
      <img :src="imgSrc"/>
      
      <div class="text-center">
        <h2 class="card-title">{{name}}</h2>
        <h4>Цена: 300 рублей</h4>
        <b-card-text class="text-center">
          {{description}}
        </b-card-text>
        <b-button v-if="isAdmin">asfa</b-button>
      </div>
  </b-card>
  </div>
</template>

<script>
export default {
  name: 'MenuPosition',
  props:{
    name: String,
    description: String,
    imgSrc: String,
    isAdmin: Boolean
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 100%;
  /* height: 300px; */
  max-width: 600px;
}
</style>
