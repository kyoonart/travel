<template>
  <div>
    <div class="content">
        <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
  <div class="info"><p class="name">大连圣亚海洋世界(AAAA景区)</p></div>
    </div>
    <div class="lis">
        <ul>
            <li v-for="item in list " :key="item.id">{{item.title}}
                <p v-for="itn in item.children" :key="itn.id">{{itn.title}}
                    <span v-for="inx in itn.children" :key="inx.id"> {{inx.title}}</span>
                </p>
            </li>
        </ul> 
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      list: []
    }
  },
  methods:{
      getList(){
          axios.get('http://localhost:8080/static/mock/detail.json').then(res=>{
        this.list= res.data.data.categoryList
          })
      }
  },
  mounted(){
      this.getList()
  }
}
</script>

<style lang="stylus" scoped>
  .content{
      height :3.6rem;
      width :100%;
      position :relative;
      overflow hidden
  }
  .content img  {
   width 100%;
  }
.content .name {
   color :#fff
}
.info{
     display: flex
      position: absolute
      top:3.2rem;
      left: 0
      right: 0
      bottom: 0
      height:.3rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
}
span{
    display :block;
    line-height: .54rem;
    padding-left: .2rem;
   border-top: .02rem solid #ccc
}
li{
    line-height: .54rem;
    padding-left: .2rem;
    border-bottom: .02rem solid #ccc
}
p{
     line-height: .54rem;
    padding-left: .2rem;
   border-top: .02rem solid #ccc
}
</style>
