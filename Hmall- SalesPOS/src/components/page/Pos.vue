<template>
  <div class="pos">
   <div>
   	<el-row>
   	<!-- 订单栏 -->
   		<el-col :span="7" class="pos-order" id="order-list">
   			<el-tabs>
   				<el-tab-pane label="选货">
   				  <el-table :data="tableData" border style="width: 100%">
   				  	
   				  	<el-table-column prop="goodsName" label="商品名称"></el-table-column>

   				  	<el-table-column prop="count" label="量" width="60"></el-table-column>

   				  	<el-table-column prop="price" label="金额" width="70"></el-table-column>

   				  	<el-table-column  label="操作"  width="100"  fixed="right">
   				  		<template scope="scope">
   				  			<el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
   				  			<el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
   				  		</template>
   				  	</el-table-column>
   				  </el-table> 
   				  <div class="totalDiv">
   				  	<small>数量：</small>&nbsp;&nbsp;&nbsp;&nbsp;
   				  	<strong>{{totalCount}}</strong>
   				  	<small>总计：</small>
              <strong>{{totalMoney}}</strong> 元
   				  </div>

   				  <div class="div-btn">
   				  	<el-button type="warning">挂单</el-button>
   				  	<el-button type="danger">删除</el-button>
   				  	<el-button type="success">结账</el-button>
   				  </div>
   					
   				</el-tab-pane>	

   				<el-tab-pane label="挂单">
            挂单
          </el-tab-pane>
          <el-tab-pane label="外送">
            外送
          </el-tab-pane>
   			</el-tabs>	

   		</el-col>

   	<!--商品展示-->
   		<el-col :span="17">
   			<div class="often-goods">
   				<div class="title">常用商品</div>
   				<div class="often-goods-list">
   					
   					<ul>
   						<li v-for="goods in oftenGoods"  @click="addOrderList(goods)">
   							<span>{{goods.goodsName}}</span>
   							<span class="o-price">￥{{goods.price}}元</span>
   						</li>
   					</ul>

   				</div>
   			</div>

     <div class="goods-type">
     	<el-tabs>
     		<el-tab-pane label="小家电">
     			<div>
     				<ul class="goodsList">
     					<li v-for="goods in type0Goods" @click="addOrderList(goods)">
     						<span class="goodsImg">
     							<img :src="goods.goodsImg" width="100%"/>
     						</span>
     						<span class="goodsName">{{goods.goodsName}}</span>
     						<span class="goodsPrice">￥{{goods.price}}元</span>
     					</li>
     				</ul>
     			</div>
     		</el-tab-pane>


     		<el-tab-pane label="厨具">
     			<div>
     				<ul class="goodsList">
     					<li v-for="goods in type1Goods" @click="addOrderList(goods)">
     						<span class="goodsImg"><img :src="goods.goodsImg" width="100%"/></span>
     						<span class="goodsName">{{goods.goodsName}}</span>
     						<span class="goodsPrice">￥{{goods.price}}元</span>
     					</li>
     				</ul>
     			</div>
     		</el-tab-pane>
     		<el-tab-pane label="卫具">
     			<div>
     				<ul class="goodsList">
     					<li v-for="goods in type2Goods" @click="addOrderList(goods)">
     						<span class="goodsImg"><img :src="goods.goodsImg" width="100%"/></span>
     						<span class="goodsName">{{goods.goodsName}}</span>
     						<span class="goodsPrice">￥{{goods.price}}元</span>
     					</li>
     				</ul>
     			</div>
     		</el-tab-pane>
     		<el-tab-pane label="杂项">
     			<div>
     				<ul class="goodsList">
     					<li v-for="goods in type3Goods" @click="addOrderList(goods)">
     						<span class="goodsImg"><img :src="goods.goodsImg" width="100%"/></span>
     						<span class="goodsName">{{goods.goodsName}}</span>
     						<span class="goodsPrice">￥{{goods.price}}元</span>
     					</li>
     				</ul>
     			</div>
     		</el-tab-pane>
     	</el-tabs>
     </div>



   		</el-col>
   	</el-row>
   </div>
  </div>
</template>
 
<script>
import axios from 'axios';
export default {
  name: 'Pos',
  mounted: function() {
  	var orderHeight = document.body.clientHeight;
  	document.getElementById('order-list').style.height = orderHeight + 'px';
  },
  data() {
    return {
       tableData: [],

      /*tableData: [{
          
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
        }], //订单列表的值 这里为了布局写死数据  

      */
     /*       oftenGoods: [
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
          
      ],
       type0Goods:[
          {
              goodsId:1,
              goodsImg:"https://img.alicdn.com/bao/uploaded/i2/TB1lQoKRFXXXXXAXpXXXXXXXXXX_!!0-item_pic.jpg_60x60q90.jpg",
              goodsName:'电风扇',
              price:150
          }, {
              goodsId:2,
              goodsImg:"https://img.alicdn.com/bao/uploaded/i3/TB1t8lnRVXXXXXwXXXXXXXXXXXX_!!0-item_pic.jpg_60x60q90.jpg",
              goodsName:'电饭煲',
              price:258
          }, {
              goodsId:3,
              goodsImg:"https://img.alicdn.com/bao/uploaded/i2/TB1bzBbRVXXXXa5XpXXXXXXXXXX_!!0-item_pic.jpg_60x60q90.jpg",
              goodsName:'剃须刀',
              price:500
          }, {
              goodsId:4,
              goodsImg:"https://img.alicdn.com/bao/uploaded/i3/853978397/TB2OFm_mxXlpuFjSsphXXbJOXXa_!!853978397.jpg_430x430q90.jpg",
              goodsName:'榨汁机',
              price:80
          }, {
              goodsId:5,
               goodsImg:"https://img.alicdn.com/imgextra/i1/372448381/TB2ycTRxEdnpuFjSZPhXXbChpXa_!!372448381.jpg_60x60q90.jpg",
              goodsName:'电子称',
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
              goodsName:'大块鸡米',
              price:15
          }, {
              goodsId:20,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'香脆鸡柳',
              price:17
          }
          
      ],*/  oftenGoods: [],
            type0Goods: [],
            type1Goods: [],
            type2Goods: [],
            type3Goods: [],
            totalMoney: 0, //订单总价格
            totalCount: 0  //订单商品总数量
    }
  },
  created () {

  	//读取常用商品列表
  	 axios.get('http://jspang.com/DemoApi/oftenGoods.php')
          .then(response => {
              //console.log(response);
              this.oftenGoods = response.data;
          })
          .catch(error => {
              console.log(error);
              alert('网络错误，不能访问');
          })
  	 //读取分类商品列表
  	 axios.get('http://jspang.com/DemoApi/typeGoods.php')
        .then(response => {
            //console.log(response);
            //this.oftenGoods=response.data;
            this.type0Goods = response.data[0];
            this.type1Goods = response.data[1];
            this.type2Goods = response.data[2];
            this.type3Goods = response.data[3];

        })
        .catch(error => {
            console.log(error);
            alert('网络错误，不能访问');
        })
  },
  methods: {

  //添加订单列表的方法
  	addOrderList(goods) {
  		//console.log(goods);
  		this.totalCount = 0;//汇总商品数量 清零
  		this.totalMoney = 0;
  		let isHave = false;
  		//判断是否这个商品已经存在于订单列表
  		
  		for (let i = 0; i < this.tableData.length; i++) {
  			console.log(this.tableData[i].goodsId);
  			if (this.tableData[i].goodsId == goods.goodsId) {

  				isHave = true;//存在

  			}
  		}

  		//根据isHave的值判断订单列表中是否已经有此商品
  		if(isHave){
  			//存在就进行数量添加
  			let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
  			arr[0].count++;
  		}else{
  			//不存在就插入数组
  			let newGoods = {goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
  			 this.tableData.push(newGoods);
  		}
      this.getAllMoney();
  	},

  //删除单个商品
  	delSingleGoods(goods) {
  		console.log(goods);
  		this.tableData = this.tableData.filter(o => o.goodsId !== goods.goodsId);
  		this.getAllMoney();
  	},
  //删除所有商品
      delAllGoods() {
          this.tableData = [];
          this.totalCount = 0;
          this.totalMoney = 0;
      },
   //汇总数量和金额
      getAllMoney() {
          this.totalCount = 0;
          this.totalMoney = 0;
          if (this.tableData) {
              this.tableData.forEach((element) => {
                  this.totalCount += element.count;
                  this.totalMoney = this.totalMoney + (element.price * element.count);
              });
          }
      },
   //结账方法模拟
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

  }
}
</script>
<style scoped>

.pos{
	font-size: 12px;
}
.pos-order{
	background-color: #f9fafc;
	border-right: 1px solid #c0ccda;
}
.div-btn{
	margin-top: 15px;
	text-align: center;
}

.title{
	height: 20px;
	border-bottom: 1px solid #d3dce6;
	background-color: #f9fafc;
	padding: 10px;
}
.often-goods-list ul li {
	list-style: none;
	float: left;
	border: 1px solid #e5e9f2;
	padding: 10px;
	margin: 5px;
	background-color:#fff;
	cursor: pointer; 
}
.o-price{
	color: #58b7ff;
}

.often-goods-list{
	border-bottom: 1px solid #c0ccda;
	height: auto;
	overflow: hidden;
	padding-bottom: 10px;
	background-color: #f9fafc;
}

.goodsList li{
	list-style: none;
	width: 23%;
	border: 1px solid #e5e9f2;
	height: auto;
	overflow: hidden;
	background-color: #fff;
	padding: 2px;
	float: left;
	margin: 2px;
	cursor: pointer; 
}

.goodsList li span{
	display: block;
	float: left;
}

.goodsImg{
	width: 40%;
}

.goodsName{
	font-size: 14px;
	padding-left: 10px;
	color: brown;
}

.goodsPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}

.totalDiv{
	height: auto;
	overflow: hidden;
	text-align: right;
	font-size:16px;
	background-color: #fff;
	border-bottom: 1px solid #e5e9f2;
	padding: 10px 130px;
}


</style>