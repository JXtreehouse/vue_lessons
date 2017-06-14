<template>
  <div>
    <h1>{{title}}</h1>
    <jxs></jxs> 
  </div>
</template>

<script>
import Jxs from "./Jxs.vue"
export default {
 components:{
  "jxs": Jxs
 },
  data () {
    return {
      title: "JX App"
    }
  }


}
</script>

<style scoped>
h1{
  color: purple;
}

</style>
