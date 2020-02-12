# Vue2.5构建去哪儿网

一个仿去哪儿APP的移动端项目练习，有主页，详情页，城市列表页，组件化开发以及CSS样式预处理框架stylus,通过variable.styl设置样式变量，抽离出公用样式减少代码重复，也便于维护，还使用了vue-awesome-swiper、better-scroll、axios插件

练习了使用Vue开发中常用的路由管理器Vue-Router来构建单页面应用，状态管理模式Vuex，异步处理方案axios, 使用了LocalStorage实现页面数据持久存储, 使用keep-alive对组件进行缓存，优化路由性能，结合activated生命周期钩子进行ajax请求优化。

## 技术栈
* Vue: Vue、Vue-router、Vuex、Vue-cli
* 插件：axios、vue-swesome-swiper、better-scroll
* css样式预设置：stylus
* api：本地后台接口数据

## 生成文件的部分说明
&emsp;build文件 -- 项目webpack打包配置内容

&emsp;config文件 -- 项目配置内容

&emsp;node_modules文件 -- 第三方依赖包

&emsp;src文件 --  存放整个项目的源代码

&emsp;&emsp;&emsp;src/router文件 -- 项目的所有路由

&emsp;&emsp;&emsp;src/assets文件 -- 会被webpack打包成依赖模块

&emsp;&emsp;&emsp;src/App.vue -- 项目的根组件

&emsp;&emsp;&emsp;src/main.js -- 项目的入口文件
&emsp;index.html -- 默认页面


## 项目特点
* 组件化开发
* 易于维护

## 项目分为几部分？
* 首页部分
* 详情页部分
* 城市选择部分

## 项目怎样拆分？
* 按照页面拆分，src/pages目录下每个夹代表一个页面
* 页面文件夹（父组件）下管理组成页面的子组件文件，父子组件间利用`props`传值。组件化使每部分的代码更清晰，易于维护
* 在router/index.js中管理路由

# 首页部分

1.  iconfont图标引入与使用 
2. 使用vue-swesome-swiper轮播插件
3. 公用样式封装
4. axios获取接口数据
5. 父子组件间传值

### 使用vue-awesome-swiper轮播组件（2.6.7版本）
安装这个插件

    npm install vue-awesome-swiper --save
    
用import在入口文件（main.js）中导入

    import VueAwesomeSwiper from 'vue-awesome-swiper'
    
为了**防止因为网速过慢而引起的页面抖动**，我们将css样式设置成

    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    
使包裹插件的div的高度由宽度的`27%`撑开。

这里要注意的是，vue-awesome-swiper插件拥有自己的样式，要让它使用我们定义的样式，需要用到>>>和ref

### 构建多页切换
利用计算属性根据图标数量判断当前图标在哪个页面，构建多页切换功能

      computed: {
        pages: function () {
            const res = []
            for (let i in this.iconList) {
                const k = Math.floor(i / 8)
                if (!res[k]) {
                    res[k] = []
                }
                res[k].push(this.iconList[i])
            }
            return res
        }
      }

 
### 样式封装

将公用样式封装在varibles.styl和mixins.styl文件中，有以下几点好处：

&emsp; 1.可以方便得被组件使用，避免重复编写样式

&emsp; 2.便于后期维护

### 使用`axios`进行ajax请求
用import在父组件导入axios，发送get请求

     axios.get('/api/index.json')

# 城市选择部分

1. router-link内部组件的使用
2. 使用better-scroll插件


### 实现页面跳转
使用`<router-link>`内部组件通过路由实现跳转页面的功能，`to`后边加需要跳转的页面的路由，（`to = "/"`表示跳转到根路径下的页面）

    <router-link to="/">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe606;</div>
      </div>
    </router-link>
    
### 使用better-scroll插件

首先通过修改样式使**页面固定**，后续搭配better-scroll插件实现原声APP的页面上下滑动的效果

将 HTML DOM 结构调整成文档中规定的结构，在外层取`wrapper`，引用插件之后，在 `mounted ()` 生命周期钩子里面新建一个这个 DOM 引用的实例。

    import Bscroll from 'better-scroll'
    export default {
      name: 'CityList',
      //生命周期函数 挂载之后执行
      mounted () {
        //引用 wrapper DOM
        this.scroll = new Bscroll(this.$refs.wrapper)
      }
    }
    
### alphabet

是一个显示在右的 a-z 字母缩略指引

### city-components

兄弟组件间联动，这里没有采用 `bus`。
而是采用 `Alphabet.vue`(子组件) 传递给 `City.vue`(父组件) ，然后再通过 `City.vue`(父组件) 传递给 `List.vue`(子组件)。

在 `Alphabet.vue` 的 template 的循环展示中绑定 `@click` ，并在 methods 中使用 `$emit` 向外( `City.vue` 父组件 )发送 `change` 事件。

    <template>
      <ul class="list">
        <li class="item"
            v-for="(item, key) of cities"
            :key="key"
            @click="handleLetterClick"
        >
          {{key}}
        </li>
      </ul>
    </template>
    
    
    methods: {
      handleLetterClick (e) {
        this.$emit('change', e.target.innerText)
      }
    }
    
在 `City.vue` 的 `template` 中设置 `@change="handleLetterClick"` 监听 `change` 事件。并在 `methods` 中定义事件 `handleLetterClick`，传递 `letter` 参数。

在 `data` 中定义数据 `letter`，传递给 `List.vue`，在 `List.vue` 子组件 用`props` 接收 `letter`，通过侦听器 `watch`，侦听 `letter` 的变化

使用 `better-scroll` 中的 `scrollToElement` 方法进行点击跳转效果的实现

    watch: {
      letter () {
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      }
    }
    

### 使用 Vuex 实现数据共享

需要实现 city 页面的数据传递给 index 首页。由于 City.vue 和 Home.vue 没有公用父级组件，这样就无法通过一个公用的父级组件进行数据的中转。这里我们使用 Vuex 数据层框架来实现。

安装`Vuex`,在`main.js`中注入`store`,并在src下创建名为'store'的文件夹，`state` 里放置全局公用数据 `city`。

在` List.vue` 和` Search.vue `组件中包含城市循环输出项的元素标签上定义 `@click="handleCityClick(item.name)"`。

并在相应的` methods` 中执行 `Vuex` 的 `commit` 方法( 数据共享 ) 和 `Vue-router`的 `push` 方法( 页面跳转 )

### localStorage

使用 `localStorage` 实现城市保存的功能，在 store 的 `index.js` 文件中配置 `localStorage`

有可能当用户使用隐身模式或禁用`localStorage`，会导致浏览器报错。所以建议使用 `try catch `进行优化

    let defalutCity = '北京'
    try {
      if (localStorage.city) {
        defaultCity = localStorage.city
      }
    } catch (e) {}
    
    export default new Vuex.Store({
      state: {
        city: defaultCity
      },
      mutations: {
        changeCity (state, city) {
          state.city = city
          try {
            localStorage.city = city
          } catch (e) {}
        }
      }
    })
    
### keep-alive 优化

当查看 `network` 时候，可以看到从首页到城市选择页切换过程中每次切换都会发送 `ajax` 请求。所以我们对此进行优化。

在` App.vue` 中给 `<router-view/>` 外部添加一个 `<keep-alive>` 标签。其含义是路由的内容被加载过一次之后，就把路由的内容放置到内存中，下一次再使用路由的时候，无需重新加载组件、执行钩子函数。只需要从内存中拿出以前的内容显示就可以了。

### activated 生命周期钩子

结合 keep-alive 新增的 `activated` 生命周期钩子，实现每次点击曾经选中过的城市，不发送`ajax`，城市选择变化的时候再进行 `ajax` 请求的优化。

### 详情页

### :to 实现动态路由

使用 tag 将 router-link 标签替换成 li，从而不用修改样式就可以达到之前样式的效果。

然后按照下图所示进行动态路由的实现。即点击相应的列表选择选择动态跳转页面。
