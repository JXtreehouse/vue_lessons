<template>
  <div id="add-blog">
  <h2>镜心的小树屋</h2>
  <form v-if="!submitted">
    <label>Blog Title</label>
    <input type="text" v-model.lazy="blog.title" required />
    <label>Blog Content</label>
    <textarea v-model.lazy="blog.content"></textarea>
    <div id="checkboxes">
      <label>技术文章</label>
      <input type="checkbox" value="技术文章" v-model="blog.categories"/>
      <label>Demo</label>
      <input type="checkbox" value="demo" v-model="blog.categories"/>
      <label>文学</label>
      <input type="checkbox" value="文学" v-model="blog.categories"/>
      <label>书籍</label>
      <input type="checkbox" value="书籍" v-model="blog.categories"/>
    </div>
    <label>作者:</label>
    <select v-model="blog.author">
      <option v-for="author in authors">{{author}}</option>
    </select>
    <button v-on:click.prevent="post">Add Blog</button>
    
  </form>
  <div v-if="submitted">
    <h3>Thanks for adding your post</h3>
  </div>
  <div id="preview">
    <h3>Preview Blog</h3>
    <p>标题: {{blog.title}}</p>
    <p>内容: </p>
    <p>{{blog.content}}</p>
    <p>Blog Categories</p>
    <ul>
      <li v-for="category in blog.categories">{{category}}</li>
    </ul>
    <p>作者:{{blog.author}}</p>
  </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
     blog:{
       title:'',
       content:'',
       categories:[],
       author:''

     },
     authors:['JX',"AlexZ33","Clay"],
     submitted: false
    }
  },
  methods:{
   post:function() {
    this.$http.post('https://myvueblog.firebaseio.com/post.json',this.blog).then(function(data){
      console.log(data);
      this.submitted =true;
    });
   }
  }
}
</script>

<style>
#add-blog *{
  box-sizing: border-box;
}

#add-blog{
  margin: 20px auto;
  max-width: 500px;
}

label{
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],textarea{
  display: block;
  width: 100%;
  padding: 8px;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3{
  margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;

}

#checkboxes label{
  display: inline-block;

}
</style>
