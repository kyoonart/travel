<template>
    <div class="list" ref="wapper">  
        <div>
         <div class="area">
                <div class="title">当前城市</div>
                <div class="buttonlist">   
                <button>北京</button>   
                </div>   
            </div>  
            <div class="area"> 
                <div class="title">热门城市</div>
                <div class="buttonlist">
                    <button v-for="item in hotcity" :key="item.id">{{item.name}}</button> 
                </div>
            </div>
            <div class="area" v-for="(item,key) of citydata" :key="key" :ref="key">  
                <div class="title">{{key}}</div>
                <div class="lists">
                 <ul>
                     <li v-for="ind in item" :key="ind.id">
                            {{ind.name}}
                        </li>
                    </ul>  
                </div> 
            </div> 
        </div> 
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name: 'Citylist',
    mounted() {
        this.scroll = new BScroll(this.$refs.wapper)
    },
    props: {
        hotcity: Array,
        citydata: Object,
        message: String
    },
    watch: {
        message() {
            if (this.message) {
                const element = this.$refs[this.message][0]
               this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>
<style scoped>
.list {
    position: absolute;
    top: 1.46rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}

.title {
    background: #ccc;
    line-height: .44rem;
    padding-left: .2rem;
    font-size: .26rem
}

.buttonlist {
    background-color: #fff;
    padding: .1rem .6rem .1rem .1rem;
    box-sizing: border-box
}

button {
    background: #fff;
    width: 30.33%;
    border: .02rem solid #ccc;
    margin: .1rem;
    text-align: center;
    border-radius: .06rem;
    /* padding: .1rem 0 */
}

li {
    line-height: .54rem;
    padding-left: .2rem;
    border-bottom: .02rem solid #ccc
}
</style>