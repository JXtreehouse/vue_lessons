import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
import singleBlog from './components/singBlog.vue'


export default[
  {path:'/',component:showBlogs},
  {path:'/add',component:addBlog},
  {path:'/blog/:id',component:singleBlog}
]