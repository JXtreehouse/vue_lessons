<template>
  <div>
    <app-header v-bind:title="title"></app-header>  
    <app-jxs v-bind:jxs="jxs"></app-jxs>
    <app-footer></app-footer>  
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Jxs from "./components/jxs.vue";

export default {
  components:{
    "app-header": Header,
    "app-footer": Footer,
    "app-jxs": Jxs
  },
  data () {
    return {
      jxs:[
        {name:'Ryu',specially:"Vue Components",show: false},
        {name:'Crystal',specially:"HTML Wizardry",show: false},
        {name:'Hitoshi',specially:"Click Events",show: false},
        {name:'Tango',specially:"Conditionals",show: false},
        {name:'Kami',specially:"Webpack",show: false},
        {name:'Yoshi',specially:"Data Diggin",show: false}
      ],
      title:"Vue JXS"
    }
  }
}
</script>

<style>

</style>
