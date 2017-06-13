<template>
  <div>
    <app-header></app-header>  
    <app-jxs></app-jxs>
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
      
    }
  }
}
</script>

<style>

</style>
