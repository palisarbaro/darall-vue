<template>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
        <b-navbar-brand href="#">Меню</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item :href="'#'+section.htmlId" v-for="section in sections" :key="section.htmlId">{{section.name}}</b-nav-item>
            
   
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
  
<script>
import { getSections } from "@/api"
export default {
    name: 'NavBar',
    data(){
        return {
            sections:[
                {htmlId:'snaks', name: 'Закуски'},
                {htmlId:'hot', name: 'Горячие блюда'},
            ]
        }
    },

    computed:{
        sectionIds(){
            return this.sections.map(x=>x.htmlId)
        }
    },

    async mounted(){
        const sections = await getSections()
        for(const section of sections){
            if(!this.sectionIds.includes(section.htmlId)){
                this.sections.push(section)
            }
        }   
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
