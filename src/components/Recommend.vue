<template>
    <div>
    <div class="title">热销推荐</div>
     <div class="items">
            <div class="item left">
            <img src="https://imgs.qunarzz.com/vs_ceph_vs_tts/bc10122e-0a82-4f09-8a1f-d1a4f751e326.jpg_r_390x260x90_59ae996a.jpg" alt="">
            <div class="info"><p class="address">北京-峨眉山 5天跟团游</p>
            <p class="detail">0自费！美食！住五星！成都-峨眉山-乐山-都江堰-熊猫乐园-黄龙溪古镇5日游</p>
            <p class="money">￥4799起</p></div>
             </div>
             <div class="item right">
         <img src="https://imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg" alt="">
             <div class="info"><p class="address">北京-峨眉山 5天跟团游</p>
            <p class="detail">0自费！美食！住五星！成都-峨眉山-乐山-都江堰-熊猫乐园-黄龙溪古镇5日游</p>
              <p class="money">￥4799起</p></div>
             </div>
</div>
<!-- 热门景点 -->
 <div class="title title2">当季热门景点</div>
     <div class="items">
            <div class="item left">
            <img src="https://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg" alt="">
            <div class="info"><p class="address">北京-峨眉山 5天跟团游</p>
            <p class="detail">0自费！美食！住五星！成都-峨眉山-乐山-都江堰-熊猫乐园-黄龙溪古镇5日游</p>
            <p class="money">￥4799起</p></div>
             </div>
             <div class="item right">
         <img src="https://imgs.qunarzz.com/sight/p0/1504/37/37bc07abdd1fdbee.water.jpg_256x160_061797a3.jpg" alt="">
             <div class="info"><p class="address">北京-峨眉山 5天跟团游</p>
            <p class="detail">0自费！美食！住五星！成都-峨眉山-乐山-都江堰-熊猫乐园-黄龙溪古镇5日游</p>
              <p class="money">￥4799起</p></div>
             </div>
</div>
    </div>
</template>
<script>
export default {
    name:'Recommend'
}
</script>
<style  scoped>
.title{
    margin-top: .2rem;
    background-color: #ececec;
    padding: .2rem
}
    .items{
        display: flex;
        padding: .1rem;
    }
    .items .item {
        width: 50%;
        flex: 1;
        border-radius: .1rem;
      overflow: hidden;
    }
    .left{
          margin-right: .1rem  
    }
    .right{
        margin-left: .1rem
    }
     .items .item img{
         width: 100%;
     }
       .items .item .info .address{
           font-weight: 600;
           margin-top: .15rem
       }
        .items .item .info .detail{
        white-space: nowrap;
        text-overflow:ellipsis;
          margin-top: .15rem  
        }
          .items .item .info .money{
              color: #ff4700;
              font-size: .3rem;
             margin-top: .15rem  
          }
          .title2{
              font-size: .3rem;
              font-weight: 600
          }
</style>
