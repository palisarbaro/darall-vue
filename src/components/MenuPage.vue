<template>
  <div>
    <div v-for="section in sections" :key="section.id">
      <h1 :id="section.id" style="scroll-margin: 60px;" class="text-center">{{section.name}}</h1>
    <b-container>
      <b-row>

      <MenuPosition
        v-for="dish in section.dishes" :key="dish.id"
        :name="dish.name" :description="dish.description" :img-src="dish.img" :is-admin="isAdmin"
        style="max-width: 600px;" class="col-12 col-md-6 col-lg-4" />

      </b-row>
    </b-container>
    </div>
  </div>
</template>

<script>
import MenuPosition from "./MenuPosition.vue"
let dish = {id: 1, name: "Плов ", 
  description: "Плов — блюдо восточной кухни, основу которого составляет варёный рис[4] (в исключительных случаях — другая крупа или мелкие макаронные изделия[5]). Отличительным свойством плова является его рассыпчатость[1], достигаемая соблюдением технологии приготовления риса и добавлением в плов животного или растительного жира, препятствующего слипанию крупинок. ",
  img: "https://mtdata.ru/u1/photo2188/20680531531-0/original.jpg",
}
export default {
  name: 'MenuPage',
  components: {MenuPosition},
  props:{
    isAdmin:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      sections:[
        {id:'snaks', name: 'Закуски', dishes: [dish,dish,dish,dish,dish,dish,]},
        {id:'hot', name: 'Горячие блюда', dishes: [dish,dish,dish,dish,dish,dish,]},
      ]
    }
  },
  async mounted(){
    // const sections = await getSections()
    // for(const section of sections){
    //   if(!(section.id in this.sectionIds)){
    //     this.sections.push(section)
    //   }
    // }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
