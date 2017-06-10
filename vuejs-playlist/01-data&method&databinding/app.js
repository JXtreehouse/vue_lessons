new Vue({
  el:'#vue-app',
  data: {
  	name:'AlexZ33',
  	job: '工程师',
  	website: 'http://jxdxsw.com',
  	websiteTag: '<a href="http://jxdxsw.com"> 镜心书社网站</a> '
  },
  methods: {
  	greet: function(time) {
  		return  time + "好啊"  + ' ' + this.name;
  	}
  }
});