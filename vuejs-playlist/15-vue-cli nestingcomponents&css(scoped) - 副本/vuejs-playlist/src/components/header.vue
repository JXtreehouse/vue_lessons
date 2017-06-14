<template>
  <header>
  	<h1 v-on:click="changeTitle">{{title}}</h1>
  </header><!-- /header -->
</template>

<script>
export default {
	props:{
    title:{
    	type:String
    }
	},
  data () {
    return {
      title: 'Vue JX'
    }
  },
  methods:{
  	changeTitle: function() {
  		this.title =  "Vue AlexZ33"
  	}
  }

}
</script>

<style scoped>
header{
	background: lightgreen;
	padding: 10px;
}

h1{
	color: #222;
	text-align: center;
}
</style>
