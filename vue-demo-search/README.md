# vue-demo-search

> A Vue.js project

# 效果
![](http://on891bjlf.bkt.clouddn.com/vue/687474703a2f2f70312e6271696d672e636f6d2f3536373537312f313966323462313734336336626639302e706e67.png)

[在线查看]()

# # 所用知识
- 单文件组件
- vue-resource(ajax库)
- vue过渡效果 transition-group
[过渡效果](https://cn.vuejs.org/v2/guide/transitions.html#概述)


# 打包发布

1、把绝对路径改为相对路径 我们打开config/index.js 会看到一个build属性，这里就我们打包的基本配置了。你在这里可以修改打包的目录，打包的文件名。最重要的是一定要把绝对目录改为相对目录。
```
assetsPublicPath:'./'

```
这样才能保证我们打包出去的项目可以正常预览。

2、在命令行中用npm run build 进行打包。
```
npm run build

```


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
