# salespos

> 这是为祥华百货做的百货收银管理系统

参考: [AwesomePOS](https://github.com/shenghy/AwesomePOS) [快餐店收银系统](http://jspang.com/2017/05/22/vuedemo/)

感谢开源

## 技术栈
前端 ：Vue + Webpack + Element + Axios+ vueRouter


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# 笔记记录

项目采用Webpack+Vue-router的架构方式

参考以下文章和视频
[Vue实战视频-快餐店收银系统](http://jspang.com/2017/05/22/vuedemo/)

# 技术栈

Vue+Webpack+Element+Axios+vueRouter


# Mockplus画草图

![](http://on891bjlf.bkt.clouddn.com/vue/%E7%99%BE%E8%B4%A7%E5%BA%97%E6%94%B6%E9%93%B6%E7%B3%BB%E7%BB%9F.png)

# vue-cli 脚手架新建项目
![](http://on891bjlf.bkt.clouddn.com/vue/715.png)

修改根目录下的index.html文件


```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>SalesPOS-祥华百货销售管理系统</title>
    <link rel="stylesheet" type="text/css" href="">
    <link rel="stylesheet" href="http://at.alicdn.com/t/font_tuc9jlf1j1yvi.css">
    <style>
      html,body,#app{height:100%;padding: 0;margin:0;}
    </style>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>


```

在src/components/page/目录下新建Pos.vue文件

```

<template>
  <div class="pos">
   Hello Pos Demo!
  </div>
</template>
 
<script>
export default {
  name: 'Pos'
}
</script>
<style scoped>
 
</style>
```
这里注意

```
common  文件夹相当于木偶组件  用于放页面共有的组件 可以复用
page   文件夹相当于智能组件 放我们的页面模板组件
```
修改路由文件，项目根目录/src/router/index.js，url根目录渲染Pos组件。
```
import Vue from 'vue'
import Router from 'vue-router'
import Pos '@/components/page/Pos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    }
  ]
})

```


# 图标Iconfont

[Iconfont](http://www.iconfont.cn)
1. 进入网站：Iconfont网址：http://www.iconfont.cn
2. 点击网站上方的“官方图标库”，选择自己喜欢的图标。在这里我选择天猫的图标库。
3. 选择好自己喜欢的图标，你可以有两个选择，下载代码 和 添加至项目。
4. 我们这两选择添加至项目，然后新建项目，并输入名称。
5. 项目添加好后，会自动给我们转入到我们项目库中。点击查看在线链接。
6. 生产css引入的代码，生成后就可以在项目首页index.html引入了。

```
   <link rel="stylesheet" href="http://at.alicdn.com/t/font_tuc9jlf1j1yvi.css">
```
## 图标的使用：

图标顺利引入到项目中，已经可以使用它们了，在“我的项目中”你会看到图标的font class值。可以直接复制代码粘贴，也可以自己写代码。



```
<i class="icon iconfont icon-dianpu"></i>
```


这样在页面中就可以看到图标了。

#　leftNav.vue文件

在app.vue中注册leftNav时候

```
import leftNav from '@/components/common/leftNav'
export default {
  name: 'app',
  components:{
    leftNav
  }
}
```
这里的 
```
components:{leftNav}
```
就是
```
 components:{
    'leftNav': leftNav
  }
```
es6写法

# 开启Element

Element是一套为开发者、设计师和产品经理准备的基于Vue2.0的组件库，提供了配套设计资源，帮助你的网站快速成型。在项目中自己写组件虽然灵活，但是效率并不高效，所以要学会站在巨人的肩膀上干活，Element就是巨人的肩旁，也是现在国内比较成熟的以一套Vue的组件库。所以我决定 使用这个组件库开发项目。


```
npm install element-ui --save
```

在main.js中写入


```
11
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
 
Vue.use(ElementUI)
 
new Vue({
  el: '#app',
  render: h => h(App)
})
```
以上代码便完成了Element的引入。需要注意的是，样式文件需要单独引入。
```
render: h => h(App)
```

这是Vue 2.0新增的函数，可以直接给绑定节点渲染一个vue组件，如果在Vue 1.x下，就应该使用

```
new Vue({
    el: '#app',
    components: { App }
});
```
然后在页面中写入标记：

```
<div id="app">
    <app></app>
</div>
```



=> 是ES6的箭头语法

```
// ES5  
(function (h) {  
  return h(App);  
});  
  
// ES6  
h => h(App); 
```
将h作为createElement的别名是一个通用惯例

# 用Element的el-row的布局
这里作两栏布局，Element支持用24栏的形式进行布局。
在Pos.vue模板里添加布局

```
<template>
  <div class="pos">
   <div>
   	<el-row>
   		<el-col :span="7">
   			我是订单栏
   		</el-col>
   		<el-col :span="17">
   			我是商品栏
   		</el-col>
   	</el-row>
   </div>
  </div>
</template>
 
<script>
export default {
  name: 'Pos'
}
</script>
<style scoped>
 
</style>
```
# 解决100%高的问题
在页面中使用了Element组件，这样他会自动给我们生产虚拟DOM，我们无法设置高度100%；
这时候可以利用javascript，来设置100%高度问题。先要给我们的`<el-col>`标签上添加一个id，我们这里把ID设置为`order-list`。然后在vue构造器里使用mounted钩子函数来设置高度。

```
export default {
  name: 'Pos',
  mounted: function() {
  	var orderHeight = document.body.clientHeight;
  	document.getElementById('order-list').style.height = orderHeight + 'px';
  }
}
```

## el-tabs标签页组件
Element里提供的el-tabs组件可以快速制作我们的tabs标签页效果

[ElemeFE/element](https://github.com/ElemeFE/element)

[文档](http://element.eleme.io/#/zh-CN/component/installation)

基本用法很简单，可以直接在模板中引入<el-tabs>标签，标签里边用<el-tab-pane>来代表每个每个标签页。


```

<el-tabs>
      <el-tab-pane label="选货">
       点餐   
      </el-tab-pane>
      <el-tab-pane label="挂单">
      挂单
      </el-tab-pane>
      <el-tab-pane label="外送">
      外卖
     </el-tab-pane>
</el-tabs>
```

## el-table组件制作表格

需要在订单的tab标签页里放入表格，把点选的货物放入到待结账列表里,可以使用Element的内置组件el-table。

```
<el-table :data="tableData" border show-summary style="width: 100%" >
 
    <el-table-column prop="goodsName" label="商品"  ></el-table-column>
    <el-table-column prop="count" label="量" width="50"></el-table-column>
    <el-table-column prop="price" label="金额" width="70"></el-table-column>
    <el-table-column  label="操作" width="100" fixed="right">
        <template scope="scope">
            <el-button type="text" size="small">删除</el-button>
            <el-button type="text" size="small">增加</el-button>
 
        </template>
    </el-table-column>
</el-table>
```
这里我们采用了五列布表格， 在第1行中的:data是用来绑定数据源的，它其实是v-bind:data的简写 border代表表格有边框效果。

tableData中的数据源的值，为了布局方便，所以我们进行了写死，以后会改成动态添加的数据。

```
tableData: [{
          
          goodsName: '电水壶',
          price: 8,
          count:1
        }, {
          
          goodsName: '电扇',
          price: 15,
          count:1
        }, {
         
          goodsName: '凉鞋',
          price: 8,
          count:1
        }, {
         
          goodsName: '运动鞋',
          price: 8,
          count:1
        }]

```
# el-button 按钮组件

需要在点货表格的下方放入三个功能性按钮，分别是挂单按钮、删除按钮、结账按钮。同样使用Element里的组件，进行快速写入。el-button 的type属性是设置按钮样式的，为了学习和区分我们这里用三个属性来设置按钮。

```
<el-button type="warning" >挂单</el-button>
<el-button type="danger" >删除</el-button>
<el-button type="success" >结账</el-button>
```

# 常用商品区域布局：

在<el-col :span=17>标签里增加一个层，然后在层内进行布局。因为里边的商品实际意义上是列表，所以用无序列表<li>来布局商品。贴出布局的html代码。


```

<div class="often-goods">
    <div class="title">常用商品</div>
    <div class="often-goods-list">
 
        <ul>
            <li>
                <span>香辣鸡腿堡</span>
                <span class="o-price">￥15元</span>
            </li>
 
        </ul>
    </div>
</div>
```

有了基本html结构后，需要增加一些css样式来美化页面：

```
 .title{
       height: 20px;
       border-bottom:1px solid #D3DCE6;
       background-color: #F9FAFC;
       padding:10px;
   }
   .often-goods-list ul li{
      list-style: none;
      float:left;
      border:1px solid #E5E9F2;
      padding:10px;
      margin:5px;
      background-color:#fff;
   }
  .o-price{
      color:#58B7FF; 
   }
```

现在页面变的漂亮了，我们这时候为了页面更逼近真实效果，我们在Vue的构造器里临时加一个数组，用作常用商品使用。声明的变量叫oftenGoods（真实项目不能这样起名字，这里只是练习使用）。


```
  oftenGoods: [
          {
              goodsId:1,
              goodsName:'运动鞋',
              price:18
          }, {
              goodsId:2,
              goodsName:'电茶壶',
              price:15
          }, {
              goodsId:3,
              goodsName:'保温瓶',
              price:15
          }, {
              goodsId:4,
              goodsName:'电风扇',
              price:80
          }, {
              goodsId:5,
              goodsName:'电饭煲',
              price:10
          }, {
              goodsId:6,
              goodsName:'铁锅',
              price:20
          }, {
              goodsId:7,
              goodsName:'扫把',
              price:10
          }, {
              goodsId:8,
              goodsName:'垃圾桶',
              price:20
          }, {
              goodsId:9,
              goodsName:'白瓷碗',
              price:15
          }, {
              goodsId:20,
              goodsName:'雨衣',
              price:17
          }
          
      ]
```

# 商品分类布局：
这样我们商品的上半部分就布局完成了，现在需要布局下半部分，我们在下半部分先添加一个tabs的标签样式。

```

<div class="goods-type">
 
    <el-tabs>
        <el-tab-pane label="汉堡">
            汉堡
        </el-tab-pane>
            <el-tab-pane label="小食">
            小食
        </el-tab-pane>
        <el-tab-pane label="饮料">
            饮料
        </el-tab-pane>
        <el-tab-pane label="套餐">
            套餐
        </el-tab-pane>
 
    </el-tabs>
</div>
```

制作商品的无序列表：
```

<ul class='cookList'>
    <li>
        <span class="foodImg"><img src="http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg" width="100%"></span>
        <span class="foodName">香辣鸡腿堡</span>
        <span class="foodPrice">￥20.00元</span>
    </li>
</ul>
```
对无序列表进行CSS样式编写：

```

.cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
 
   }
   .cookList li span{
       
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
 
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
```
有了基本的样式，我们可以在Vue的构造器里添加汉堡类的数据。声明一个type0Goods的数据，数据格式如下。

```
type0Goods:[
          {
              goodsId:1,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'香脆鸡柳',
              price:17
          }
          
      ],
```

用v-for改造我们的无序列表：

```
<li v-for="goods in type0Goods">
    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
    <span class="foodName">{{goods.goodsName}}</span>
    <span class="foodPrice">￥{{goods.price}}元</span>
</li>
```

#  Axios从远程读取数据

[mzabriskie/axios](https://github.com/mzabriskie/axios)

```
	
npm install axios --save
```
由于axios是需要打包到生产环境中的，所以我们使用–save来进行安装。

## 引入Axios
我们在Pos.vue页面引入Axios，由于使用了npm来进行安装，所以这里不需要填写路径。

	

```
import axios from 'axios'
```
## 服务端拉取常用商品数据

远端服务器地址：http://jspang.com/DemoApi/oftenGoods.php

（在实际项目中这个后台接口地址是后端程序员提供给你的，你可以随便调用这个接口，已经放到服务器上了。）

我们前端人员其实也可以用firebase或者clouda自己创建一个服务器地址。或者用七牛阿里云这类服务器

可以先把地址放到地址栏访问一下，是可以正常访问的，并且输出了json格式的字符串，这就是我们需要的远端数据了。这里我们使用Axios的get 方式来获得数据。

获取ajax服务器数据 也可以用fetch api 具体看这里

[myvuebloglog](https://github.com/JXtreehouse/vue_lessons/tree/master/vuejs-playlist/vue-cli%20%20creating%20a%20blog/myVueBlog)

当然对于vue 我们还是建议使用
- vue-resource
- axios

```
 created(){
      axios.get('http://orn48sw9d.bkt.clouddn.com/json/oftengoods.php')
      .then(response=>{
         console.log(response);
         this.oftenGoods=response.data;
      })
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
  },
```
把axios的方法写到了created钩子函数中，我们使用了get 方法进行拉取数据，如果拉取成功用远端数据对oftenGoods进行赋值。

拉取报错，一般有两种情况：
- 络不通：网络状况不是很好，这可以在失败后隔5秒再次请求。
- 报决绝访问：这种多是后端程序员设置了不允许跨域访问，需要你和后端程序员一起调试解决。

# 拉取分类商品数据：
远端服务器地址：http://jspang.com/DemoApi/typeGoods.php

依然用Get进行拉取，拉取后先用consoe.log(response)查看一下数据结构，让后进行赋值


```
  //读取分类商品列表
      axios.get('http://jspang.com/DemoApi/typeGoods.php')
      .then(response=>{
         console.log(response);
         //this.oftenGoods=response.data;
         this.type0Goods=response.data[0];
         this.type1Goods=response.data[1];
         this.type2Goods=response.data[2];
         this.type3Goods=response.data[3];
 
      })
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
```
html模板输出代码：
```
<ul class="goodsList">
 <li v-for="goods in type0Goods" @click="addOrderList(goods)">
 	<span class="goodsImg">
 		<img :src="goods.goodsImg" width="100%"/>
 	</span>
 	<span class="goodsName">{{goods.goodsName}}</span>
 	<span class="goodsPrice">￥{{goods.price}}元</span>
 </li>
</ul>
```

在实际开发中类别也是循环出来的

# 订单模块制作
功能
- 点击商品，添加到左边的订单栏里
- 增加，删除商品
- 模拟订单提交到后台
## 添加商品到订单页面

我们在vue的构造器里加入methods方法，在methods方法里再加入addOrderList方法。这个方法的作用是点击右侧的商品，然后把商品添加到左边的列表里。


```

methods:{
      //添加订单列表的方法
      addOrderList(goods){
            this.totalCount=0; //汇总数量清0
            this.totalMoney=0;
            let isHave=false;
            //判断是否这个商品已经存在于订单列表
            for (let i=0; i<this.tableData.length;i++){
                console.log(this.tableData[i].goodsId);
                if(this.tableData[i].goodsId==goods.goodsId){
                    isHave=true; //存在
                }
            }
            //根据isHave的值判断订单列表中是否已经有此商品
            if(isHave){
                //存在就进行数量添加
                 let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
                 arr[0].count++;
                 //console.log(arr);
            }else{
                //不存在就推入数组
                let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
                 this.tableData.push(newGoods);
 
            }
 
            //进行数量和价格的汇总计算
            this.tableData.forEach((element) => {
                this.totalCount+=element.count;
                this.totalMoney=this.totalMoney+(element.price*element.count);   
            });
           
      }
  }
```

在作这个方法的时候，在订单列表的下方又添加了订单的统计功能，其实也就两项：订单价格汇总和订单商品数量汇总。我们在data里声明的值是totalMoney和totalCount。
写完这个方法后，我们还需要在我们的商品上绑定方法，来进行调用添加方法。


```
@click="addOrderList(goods)"
```
这样在点击商品时订单列表就会根据我们的程序逻辑发生变化。

# 订单列表中的增加按钮

商品中绑定addOrderList方法是非常容易的，如果在订单列表中绑定是需要特殊处理一下的，需要用到template的scope值，让后进行绑定。


```
<el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
```
我们把订单增加的操作制作完成了，下面要制作订单商品的删除和订单的整体删除功能，最后模拟一下订单的结账功能。

# 删除单个商品
在veu构造器methods属性里增加一个delSingleGoods方法，并接收goods对象为参数，用数组的filter可以轻松删除数组中单个的商品。


```
//删除单个商品
      delSingleGoods(goods){
        console.log(goods);
        this.tableData=this.tableData.filter(o => o.goodsId !=goods.goodsId);
 
      },
```
现在可以npm run dev试一下了，会发现现在商品可以正确的删除了，但是统计的数量和金额是不正确的，我们需要写一些统计的代码。在下手之前你会发现在增加商品方法中也有类似统计的方法，既然两个功能很像，我们就重新写一个方法。

```

//汇总数量和金额
getAllMoney(){
    this.totalCount=0;
    this.totalMoney=0;
    if(this.tableData){
            this.tableData.forEach((element) => {
        this.totalCount+=element.count;
        this.totalMoney=this.totalMoney+(element.price*element.count);   
    });
    }
    
}
```

需要注意的是，以前我们是单独使用的，所以不用把totoalCount和totalMoney清零，但是做成公用方法了，记得清零。方法做好了，我们在需要的地方直接用this.getAllMoney()引用就可以了。

功能做好了，我们还需要为删除按钮绑定事件：


```
<el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>

```
这样我们就把删除单个订单商品的功能做好了，我们可以测试调试一下。
# 删除全部订单商品

这个功能其实很简单，只要把this.tableData清空就可以了，在methods属性中写一个delAllGoods的方法。

```
     //删除所有商品
        delAllGoods() {
            this.tableData = [];
            this.totalCount = 0;
            this.totalMoney = 0;
        },
```
有的小伙伴会好奇，你完全可以再次复用getAllMoney()方法进行汇总，为什么不用那？汇总方法里毕竟是有业务逻辑的，我们只做两个清零，这样消耗的资源更少，所以我们没有使用。

# 模拟结账
因为模拟结账需要Post数据到后台，这里无法实现
这里只有制作思路，可以在自己的服务器上去实现。

1、设置我们Aixos的Pos方法。

2、接受返回值进行处理。

3、如果成功，清空现有构造器里的tableData，totalMoney，totalCount数据。

4、进行用户的友好提示。
由于前两个步骤不能演示，所以这里我们只模拟3和4步。在methods里作一个结账方法，清空数据和进行友好提示。


```
checkout() {
    if (this.totalCount!=0) {
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
        this.$message({
            message: '结账成功，感谢你又为店里出了一份力!',
            type: 'success'
        });
 
    }else{
        this.$message.error('不能空结。老板了解你急切的心情！');
    }
 
}
```
# 项目打包和上线

1、把绝对路径改为相对路径
我们打开config/index.js 会看到一个build属性，这里就我们打包的基本配置了。你在这里可以修改打包的目录，打包的文件名。最重要的是一定要把绝对目录改为相对目录。


```
assetsPublicPath:'./'
```
这样才能保证我们打包出去的项目可以正常预览。

2、在命令行中用npm run build  进行打包。

```
npm run build
```

