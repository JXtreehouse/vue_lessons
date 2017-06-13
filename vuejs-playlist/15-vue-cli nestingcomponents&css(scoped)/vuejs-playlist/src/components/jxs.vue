<template>
  <div id="jxs">
    <ul>
      <li v-for="jx in jxs" v-on:click="jx.show =!jx.show">
        <h2>{{jx.name}}</h2>
        <h3 v-show="jx.show">{{jx.specially}}</h3>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      jxs:[
        {name:'Ryu',specially:"Vue Components",show: false},
        {name:'Crystal',specially:"HTML Wizardry",show: false},
        {name:'Hitoshi',specially:"Click Events",show: false},
        {name:'Tango',specially:"Conditionals",show: false},
        {name:'Kami',specially:"Webpack",show: false},
        {name:'Yoshi',specially:"Data Diggin",show: false}
        
      ]
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
