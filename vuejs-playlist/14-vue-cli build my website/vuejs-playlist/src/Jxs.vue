<template>
  <div>

    <h1>hahahaha</h1>
    <ul>
      <li v-for="jx in jxs">{{jx}}</li>
    </ul>
    
  </div>
</template>

<script>
export default {
 
  data () {
    return {
      jxs: ['Alex','Kate','Ryu']
    }
  }


}
</script>

<style scoped>
h1{
  color: green;
}
</style>
