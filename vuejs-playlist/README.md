# 开始

打开vue_lessions下命令行
分别创建 app.js  index.html  styles.css
![](http://on891bjlf.bkt.clouddn.com/image/44.png)

这里用vim编辑器创建的  在linux系统下大都如此创建   这里用windows下的gitbash 模拟的 

vim  创建文件 进入后 按 Esc  再按 :wq  保存退出


安装 python  启动一个本地服务器
[python -m SimpleHTTPServer](http://www.cnblogs.com/congbo/archive/2012/11/15/2769704.html)


```
python -m SimpleHTTPServer 8000
```

cmd命令行下
![](http://on891bjlf.bkt.clouddn.com/image/cmd%20python%20a%20server.png)

## app.js


```
<!DOCTYPE html>
<html >
<head>
	<meta charset="UTF-8">
	<title>VueJS  Tutorials</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
	<script src="https://unpkg.com/vue"></script>
</head>
<body>
	<div id="vue-app">
	  <h1>{{name}}</h1>
		
	</div>
	<script type="text/javascript" src="app.js"></script>
</body>
</html>
```

## index.html


```
new Vue({
  el:'#vue-app',
  data: {
  	name:'AlexZ33'
  }
});

```
![](http://on891bjlf.bkt.clouddn.com/image/43.png)

# Data & Methods

## app.js


```
new Vue({
  el:'#vue-app',
  data: {
  	name:'AlexZ33',
  	job: '工程师'
  },
  methods: {
  	greet: function(time) {
  		return  time + "好啊"  + ' ' + this.name;
  	}
  }
});
```


## index.html


```
<!DOCTYPE html>
<html >
<head>
	<meta charset="UTF-8">
	<title>VueJS  Tutorials</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
	<script src="https://unpkg.com/vue"></script>
</head>
<body>
	<div id="vue-app">
	  <h1>{{greet('晚上')}}</h1>
	  <p>Name: {{name}}<p>
		<p>Job: {{job}}</p>
	</div>
	<script type="text/javascript" src="app.js"></script>
</body>
</html>
```
![](http://on891bjlf.bkt.clouddn.com/image/24.png)
# Data Binding

## app.js

```
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
```
## index.html


```
<!DOCTYPE html>
<html >
<head>
	<meta charset="UTF-8">
	<title>VueJS  Tutorials</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
	<script src="https://unpkg.com/vue"></script>
</head>
<body>
	<div id="vue-app">
	  <h1>{{greet('晚上')}}</h1>
	  <p>Name: {{name}}<p>
		<p>Job: {{job}}</p>
		<a v-bind:href="website">镜心的小树屋</a>

		<input type="text" v-bind:value="name"/>
		<p v-html="websiteTag"></p>
	</div>
	<script type="text/javascript" src="app.js"></script>
</body>
</html>
```

![](http://on891bjlf.bkt.clouddn.com/image/16.png)

# Events

index.html

```
<!DOCTYPE html>
<html >
<head>
	<meta charset="UTF-8">
	<title>VueJS  Tutorials</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
	<script src="https://unpkg.com/vue"></script>
</head>
<body>
	<div id="vue-app">
	  <h1>Events</h1>
	  <button v-on:click="add">Add a Year</button>
	  <button v-on:click="subtract">Subtract a Year</button>
	  <p>My age is {{age}}</p>
	</div>
	<script type="text/javascript" src="app.js"></script>
</body>
</html>
```

app.js

```
new Vue({
  el:'#vue-app',
  data: {
  	age: 26
  },
  methods: {
  	add: function() {
  		this.age++;
  	},
  	subtract: function() {
  		this.age--;
  	}
  }
});
```

![](http://on891bjlf.bkt.clouddn.com/image/vue-events.gif)

注意  
```
<button v-on:click="add">Add a Year</button>
	  <button v-on:click="subtract">Subtract a Year</button>
```
这里我们 不必用 add()  subtract() 
因为vue会加上的 ，其实加上()也可以运行  


增加

```
<button v-on:dblclick="add(10)">Add 10 Year</button>
<button v-on:dblclick="subtract(10)">Subtract 10 Year</button>
```

更改methods

```
 methods: {
  	add: function(inc) {
  		this.age += inc;
  	},
  	subtract: function(dec) {
  		this.age -= dec;
  	}
```
![](http://on891bjlf.bkt.clouddn.com/gif/dblclick.gif)

增加canvas画布



```
	 <div id="canvas" v-on:mousemove="updateXY">{{x}},{{y}}</div>
```
并写style.css样式

```
#canvas{
	width: 600px;
	padding: 200px 20px;
	textalign: center;
	border: 1px solid #333;
}
```
app.js

```
new Vue({
  el:'#vue-app',
  data: {
  	age: 26,
  	x: 0,
  	y: 0
  },
  methods: {
  	add: function(inc) {
  		this.age += inc;
  	},
  	subtract: function(dec) {
  		this.age -= dec;
  	},
  	updateXY: function(event) {
    this.x = event.offsetX;
    this.y = event.offsetY;
  	}
  }
});
```
![](http://on891bjlf.bkt.clouddn.com/gif/event-vue.gif)
# Event Modifiers
[Event Modifiers](https://vuejs.org/v2/guide/events.html#Event-Modifiers)


```
  <a v-on:click.prevent="click" href="http://jxdxsw.com/" title="">镜心的小树屋</a>
```

```
  	click: function() {
  		alert('你点击了我');
  	}
```

![](http://on891bjlf.bkt.clouddn.com/gif/event-modifiers.gif)

# Keyboard Events


```
<!DOCTYPE html>
<html >
<head>
	<meta charset="UTF-8">
	<title>VueJS  Tutorials</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
	<script src="https://unpkg.com/vue"></script>
</head>
<body>
	<div id="vue-app">
	  <h1>Keyboard Events</h1>
	  <label>Name:</label>
	  <input type="text" v-on:keyup.enter="logName">
	  <label>Age:</label>
	  <input type="text" v-on:keyup.alt.enter="logAge">
	</div>

	<script type="text/javascript" src="app.js"></script>
</body>
</html>
```
app.js

```
new Vue({
  el:'#vue-app',
  data: {
  	
  },
  methods: {
  	logName: function () {
  		console.log('你输入了自己的名字');
  	},
  	logAge: function () {
  		console.log('你输入了自己的年龄');
  	}
  	
  }
});
```

# Two-Way Data Binding
[v-model](https://cn.vuejs.org/v2/api/#v-model)

# Computed Properties

[Computed-属性-vs-Watched-属性](https://cn.vuejs.org/v2/guide/computed.html#Computed-属性-vs-Watched-属性)



```
<!DOCTYPE html>
<html >
<head>
	<meta charset="UTF-8">
	<title>VueJS  Tutorials</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
	<script src="https://unpkg.com/vue"></script>
</head>
<body>
	<div id="vue-app">
	  <h1>Computed Properties</h1>
	  <button v-on:click = "a++">Add to A</button>
	  <button v-on:click = "b++">Add to B</button>
	  <p>A - {{a}}</p>
	  <p>B - {{b}}</p>
	  <p>Age + A = {{addToA}}</p>
	  <P>Age + B = {{addToB}}</P>

	</div>

	<script type="text/javascript" src="app.js"></script>
</body>
</html>
```


```
new Vue({
  el:'#vue-app',
  data: {
  	
  	age:20,
  	a:0,
  	b:0
  },
  methods: {
  /*	addToA: function () {
      return this.a + this.age;
  	},
  	addToB: function () {
  		return this.b + this.age;
  	}
  	*/
  },

  computed:{
  	addToA: function () {
      return this.a + this.age;
  	},
  	addToB: function () {
  		return this.b + this.age;
  	}

  }
});
```

#  Dynamic CSS Classes
![](http://on891bjlf.bkt.clouddn.com/gif/dynamic-css-class.gif)

# Conditionals
[v-if vs v-show](https://cn.vuejs.org/v2/guide/conditional.html#v-if-vs-v-show)

# Looping with v-for

[v-for](https://cn.vuejs.org/v2/guide/list.html#v-for)

# Simple Punchbag Game
![](http://on891bjlf.bkt.clouddn.com/gif/vue-punchgame.gif)

# Multiple Vue Instances


# Components
[组件](https://cn.vuejs.org/v2/guide/components.html)

稍微解释下为什么模板中的data不能用{}对象而要用函数
如果是对象，那么用构造器构造出来的所有 new Vue实例内的内容，一旦data改变   他们都要变。而变成函数以后  只有触发事件以后才会变

具体参考官方教程看 12中的例子

# Refs
[ref](https://cn.vuejs.org/v2/api/#ref)

# The Vue CLI
[vuejs/vue-cli](https://github.com/vuejs/vue-cli)
脚手架


```
cnpm install vue-cli

```

```
vue init webpack-simple vuejs-playlist
```

```
 cd vuejs-playlist

```

```
npm install

```

```
npm run dev


```
目录结构

![](http://on891bjlf.bkt.clouddn.com/image/3.png)



```
   "dev": "cross-env NODE_ENV=development   webpack-dev-server --open --hot",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
```

[使用cross-env解决跨平台设置NODE_ENV的问题](https://segmentfault.com/a/1190000005811347?_ea=934705)


> 遇到的问题:

![](http://on891bjlf.bkt.clouddn.com/image/27.png)

参考
[【解决】Cannot find module 'webpack'](http://blog.csdn.net/bedisdover/article/details/52775386)

#  Nesting Components
![](http://on891bjlf.bkt.clouddn.com/image/vue-nestingcomponents.png)
看  14


#  Component CSS (scoped) & Nesting Components Examples
![](http://on891bjlf.bkt.clouddn.com/vue/93.png)
对应  15

![](http://on891bjlf.bkt.clouddn.com/vue/8.png)

[flex](http://www.runoob.com/try/try.php?filename=trycss3_flex-wrap)

![](http://on891bjlf.bkt.clouddn.com/vue/vue-cli-nesting-components.gif)

# props

[Prop](https://cn.vuejs.org/v2/guide/components.html#Prop)

![](http://on891bjlf.bkt.clouddn.com/vue/vue-props.png)


# Primitive vs Reference Types

# Events
![](http://on891bjlf.bkt.clouddn.com/vue/34.png)

# Life-cycle Hooks
[生命周期钩子](https://cn.vuejs.org/v2/api/#选项-生命周期钩子)
[生命周期图示](https://cn.vuejs.org/v2/guide/instance.html#生命周期图示)

# HTTP Requests
可以使用的方式
- jquery
- fetch API （浏览器提供的异步请求接口）
- vue-resource

[Javascript window.fetch API](http://www.webhek.com/post/javascript-fetch-api.html)

[vue-resource  The HTTP client for Vue.js](https://github.com/pagekit/vue-resource)

[VueResource](https://segmentfault.com/a/1190000007087934)


```
cnpm install vue-resource

```
使用[JSONPlaceholder](http://jsonplaceholder.typicode.com/)
提供简单的REST API ,我们可以发送get请求  和post请求

模拟JSON数据服务器


# Custom Directives

[Vue-directive](https://cn.vuejs.org/v2/api/#Vue-directive)

# Filters

# Custom Search Filter

use a coputed property

[computed](https://cn.vuejs.org/v2/api/#computed)

# Registering Things Locally


```
<div v-for="blog in filteredBlogs" class="single-blog">
     <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
     <article>{{blog.body | snippet}}</article>
   </div>
```



```
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  directives: {
    'rainbow': {
      bind(el,binding,vnode){
        el.style.color = "#"+Math.random().toString().slice(2,8);
      }
    }
  }
```


# Mixins

[mixins](https://cn.vuejs.org/v2/api/#mixins)



# Setting up Routing

[vuejs/vue-router](https://github.com/vuejs/vue-router)
```
npm install vue-router --save
```
main.js

```
import Routes from "./routes";


Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes
});



new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})



```

routes.js

```
import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue'


export default[
  {path:'/',component:showBlogs},
  {path:'/add',component:addBlog}
]
```


# Hash vs History (Routing)

# Route Parameters
![](http://on891bjlf.bkt.clouddn.com/vue/88.png)

```
{path:'/blog/:id', component:singleBlog}
```
# Posting to Firebase

```
www.firebase.com/
```
# Retrieving Posts from Firebase


```
 methods:{
   post:function() {
    this.$http.post('https://myvueblog.firebaseio.com/post.json',this.blog).then(function(data){
      console.log(data);
      this.submitted =true;
    });
   }
```

# myblog效果
![](http://on891bjlf.bkt.clouddn.com/vue/vueblogdemo.gif)
