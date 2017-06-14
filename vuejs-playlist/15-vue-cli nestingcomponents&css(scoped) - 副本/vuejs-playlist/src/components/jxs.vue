<template>
  <div id="jxs">
    <ul>
      <li v-for="jx in jxs" v-on:click="jx.show =!jx.show">
        <h2>{{jx.name}}</h2>
        <h3 v-show="jx.show">{{jx.specially}}</h3>
      </li>
    </ul>

    <button v-on:click="deleteJx">Delete jx</button>
    
  </div>
</template>

<script>
export default {
 props:{
    jxs:{
      type:Array,
      require: true
    }
  },
  data () {
    return {
      
        
    }
  },
  methods:{
    deleteJx: function() {
      this.jxs.pop();
    }
  }
}

</script>

<style scoped>

#jxs{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;

}
li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;

}
</style>
